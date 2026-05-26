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
        <Box sx={{ paddingBottom: 4}}>
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
                        <Button onClick={() => setIsAddingColumn(true)}>
                            Add Column
                        </Button>
                    )
                }
            />
        </Box>
    );
}


export default Kanban;
