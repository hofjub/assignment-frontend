import {Box, Button, Card, CardContent, Stack} from "@mui/material";
import React from "react";
import {KanbanColumn} from "../types/column";
import {useKanbanStore} from "../stores/useKanbanStore";
import {DraggableList} from "../../draggable";
import KanbanCard from "./KanbanCard";
import {DraggableProvidedDragHandleProps} from "react-beautiful-dnd";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function KanbanList({column, dragHandleProps}: {
    column: KanbanColumn,
    dragHandleProps?: DraggableProvidedDragHandleProps
}) {

    const {reorderCard} = useKanbanStore()

    return (
        <Card variant="outlined" sx={{bgcolor: 'grey.200', width: 400}}>

            <CardContent>

                <Box
                    {...dragHandleProps}
                    sx={{ cursor: "grab" }}
                >
                    <DragIndicatorIcon
                        sx={{bgcolor: 'grey.200'}}
                    />
                </Box>

                <DraggableList
                    type={"CARD"}
                    items={column.cards}
                    renderItem={(c) => {
                        return <KanbanCard/>
                    }}
                    direction={"vertical"}
                    onReorder={(from, to) => reorderCard(column.id, from, to)}
                    droppableId={`kanban-cards-${column.id}`}
                />

                <Button>Add item {column.id}</Button>

            </CardContent>
        </Card>
    );
}

export default KanbanList