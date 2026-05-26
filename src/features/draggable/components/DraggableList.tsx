import {Box, Stack, StackProps} from "@mui/material";
import {DragDropContext, Draggable, Droppable, DropResult, Direction} from "react-beautiful-dnd";
import React from "react";

interface DraggableListItem {
    id: string
}

interface DraggableListProps<T extends DraggableListItem> {
    items: T[],
    renderItem: (item: T) => React.ReactNode,
    direction: Direction,
    onReorder: (from: number, to: number) => void,
    droppableId?: string,
    spacing?: StackProps["spacing"],
    margin?: StackProps["margin"],
    sx?: StackProps["sx"],
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
}: DraggableListProps<T>) {
    const onDragEnd = ({source, destination}: DropResult) => {
        if (!destination) return

        if (source.index === destination.index) return

        onReorder(source.index, destination.index)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={droppableId} direction={direction}>
                {(provided) => (
                    <Stack
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        spacing={spacing}
                        margin={margin}
                        direction={direction === "horizontal" ? "row" : "column"}
                        sx={sx}
                    >
                        {items.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                            >
                                {(provided, snapshot) => (
                                    <Box
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        sx={{
                                            opacity: snapshot.isDragging ? 0.8 : 1,
                                            ...provided.draggableProps.style,
                                        }}
                                    >
                                        {renderItem(item)}
                                    </Box>
                                )}
                            </Draggable>
                        ))}

                        {provided.placeholder}
                    </Stack>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default DraggableList
