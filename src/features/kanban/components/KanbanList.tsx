import {Box, Button, Card, CardContent} from "@mui/material";
import React, {useState} from "react";
import {KanbanColumn} from "../types/column";
import {useKanbanStore} from "../stores/useKanbanStore";
import {DraggableList} from "../../draggable";
import KanbanCard from "./KanbanCard";
import {DraggableProvidedDragHandleProps} from "react-beautiful-dnd";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import KanbanCardInput from "./KanbanCardInput";

function KanbanList({column, dragHandleProps}: {
    column: KanbanColumn,
    dragHandleProps?: DraggableProvidedDragHandleProps
}) {

    const {addCard, reorderCard} = useKanbanStore()
    const [isAddingCard, setIsAddingCard] = useState(false);

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
                        return <KanbanCard card={c}/>
                    }}
                    direction={"vertical"}
                    onReorder={(from, to) => reorderCard(column.id, from, to)}
                    droppableId={`kanban-cards-${column.id}`}
                />

                {isAddingCard && (
                    <KanbanCardInput
                        onBlur={() => setIsAddingCard(false)}
                        onCreate={(title) => {
                            addCard(column.id, {title});
                            setIsAddingCard(false);
                        }}
                    />
                )}

                {!isAddingCard && (
                    <Button onClick={() => setIsAddingCard(true)}>
                        Add Card
                    </Button>
                )}

            </CardContent>
        </Card>
    );
}

export default KanbanList
