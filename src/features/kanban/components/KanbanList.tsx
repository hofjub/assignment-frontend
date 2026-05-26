import {Box, Button, Card, CardContent, Stack, Typography} from "@mui/material";
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
        <Card
            variant="outlined"
            sx={{
                bgcolor: "#eef2f7",
                borderColor: "rgba(23, 32, 51, 0.08)",
                borderRadius: 2,
                boxShadow: "0 18px 36px rgba(23, 32, 51, 0.08)",
                width: 400,
            }}
        >

            <CardContent sx={{p: 2, "&:last-child": {pb: 2}}}>

                <Stack direction="row" spacing={1} alignItems="center" sx={{mb: 2}}>
                    <Box
                        {...dragHandleProps}
                        sx={{
                            alignItems: "center",
                            borderRadius: 1,
                            color: "text.secondary",
                            cursor: "grab",
                            display: "flex",
                            p: 0.5,
                            "&:hover": {
                                bgcolor: "rgba(23, 32, 51, 0.08)",
                            },
                        }}
                    >
                        <DragIndicatorIcon
                            fontSize="small"
                        />
                    </Box>

                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#172033",
                            fontWeight: 700,
                            lineHeight: 1.2,
                        }}
                    >
                        {column.title}
                    </Typography>
                </Stack>

                <DraggableList
                    type={"CARD"}
                    items={column.cards}
                    renderItem={(c) => {
                        return <KanbanCard card={c} columnId={column.id}/>
                    }}
                    direction={"vertical"}
                    onReorder={(from, to) => reorderCard(column.id, from, to)}
                    droppableId={`kanban-cards-${column.id}`}
                />

                {isAddingCard && (
                    <KanbanCardInput
                        onCreate={(title, image) => {
                            addCard(column.id, {title, image});
                            setIsAddingCard(false);
                        }}
                    />
                )}

                {!isAddingCard && (
                    <Button
                        fullWidth
                        onClick={() => setIsAddingCard(true)}
                        sx={{
                            borderRadius: 2,
                            color: "text.secondary",
                            justifyContent: "flex-start",
                            mt: 1,
                            textTransform: "none",
                            "&:hover": {
                                bgcolor: "rgba(23, 32, 51, 0.06)",
                                color: "primary.main",
                            },
                        }}
                    >
                        Add Card
                    </Button>
                )}

            </CardContent>
        </Card>
    );
}

export default KanbanList
