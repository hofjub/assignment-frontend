import {Box, Button} from "@mui/material";
import React, {useState} from "react";
import KanbanList from "./KanbanList";
import {useKanbanStore} from "../stores/useKanbanStore";
import {DraggableList} from "../../draggable";
import KanbanColumnInput from "./KanbanColumnInput";

export function Kanban() {
    const {addColumn, reorderColumn, columns} = useKanbanStore()
    const [isAddingColumn, setIsAddingColumn] = useState(false);

    return (
        <Box sx={{pb: 4}}>
            <DraggableList
                items={columns}
                useCustomDragHandle
                renderItem={(column, {dragHandleProps}) => (
                    <KanbanList column={column} dragHandleProps={dragHandleProps} />
                )}
                direction="horizontal"
                onReorder={reorderColumn}
                droppableId="kanban-columns"
                type={"COLUMN"}
                margin={5}
                sx={{
                    overflowX: "auto",
                    alignItems: "flex-start",
                    pb: 2,
                    px: 1,
                }}
                footer={
                    isAddingColumn ? (
                        <KanbanColumnInput
                            onBlur={() => setIsAddingColumn(false)}
                            onCreate={(title) => {
                                addColumn(title);
                                setIsAddingColumn(false);
                            }}
                        />
                    ) : (
                        <Button
                            onClick={() => setIsAddingColumn(true)}
                            sx={{
                                bgcolor: "rgba(255, 255, 255, 0.74)",
                                border: "1px dashed rgba(23, 32, 51, 0.24)",
                                borderRadius: 2,
                                color: "text.secondary",
                                justifyContent: "flex-start",
                                minHeight: 48,
                                textTransform: "none",
                                width: 400,
                                "&:hover": {
                                    bgcolor: "#fff",
                                    borderColor: "primary.main",
                                },
                            }}
                        >
                            Add Column
                        </Button>
                    )
                }
            />
        </Box>
    );
}


export default Kanban;
