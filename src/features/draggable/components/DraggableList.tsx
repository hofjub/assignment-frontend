import React from "react";
import { Box, Stack, StackProps } from "@mui/material";
import {
    DragDropContext,
    Draggable,
    Droppable,
    DropResult,
    Direction,
    DraggableProvidedDragHandleProps,
} from "react-beautiful-dnd";

interface DraggableListItem {
    id: string;
}

interface RenderItemOptions {
    dragHandleProps?: DraggableProvidedDragHandleProps;
    isDragging: boolean;
}

interface DraggableListProps<T extends DraggableListItem> {
    items: T[];
    renderItem: (item: T, options: RenderItemOptions) => React.ReactNode;
    direction: Direction;
    onReorder: (from: number, to: number) => void;
    droppableId?: string;
    spacing?: StackProps["spacing"];
    margin?: StackProps["margin"];
    sx?: StackProps["sx"];
    type?: string;
    footer?: React.ReactNode;

    /**
     * false = the whole item is the drag handle
     * true = renderItem must attach dragHandleProps manually
     */
    useCustomDragHandle?: boolean;
}

function DraggableList<T extends DraggableListItem>({
                                                        items,
                                                        renderItem,
                                                        direction,
                                                        onReorder,
                                                        droppableId = "draggable-list",
                                                        spacing = 2,
                                                        margin,
                                                        sx,
                                                        type,
                                                        footer,
                                                        useCustomDragHandle = false,
                                                    }: DraggableListProps<T>) {
    const onDragEnd = ({ source, destination }: DropResult) => {
        if (!destination) return;

        if (source.index === destination.index) return;

        onReorder(source.index, destination.index);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={droppableId} direction={direction} type={type}>
                {(droppableProvided) => (
                    <Stack
                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                        spacing={spacing}
                        margin={margin}
                        direction={direction === "horizontal" ? "row" : "column"}
                        sx={sx}
                    >
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(draggableProvided, snapshot) => {
                                    const dragHandleProps = useCustomDragHandle
                                        ? undefined
                                        : draggableProvided.dragHandleProps;

                                    return (
                                        <Box
                                            ref={draggableProvided.innerRef}
                                            {...draggableProvided.draggableProps}
                                            {...dragHandleProps}
                                            style={draggableProvided.draggableProps.style}
                                            sx={{
                                                opacity: snapshot.isDragging ? 0.8 : 1,
                                            }}
                                        >
                                            {renderItem(item, {
                                                dragHandleProps: draggableProvided.dragHandleProps,
                                                isDragging: snapshot.isDragging,
                                            })}
                                        </Box>
                                    );
                                }}
                            </Draggable>
                        ))}

                        {droppableProvided.placeholder}

                        {footer && (
                            <Box>
                                {footer}
                            </Box>
                        )}
                    </Stack>
                )}
            </Droppable>
        </DragDropContext>
    );
}

export default DraggableList;
