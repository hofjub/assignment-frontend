import {Box} from "@mui/material";
import KanbanList from "./KanbanList";
import {useKanbanStore} from "../stores/useKanbanStore";
import {DraggableList} from "../../draggable";

export function Kanban() {
    const {reorderColumn, columns} = useKanbanStore()

    return (
        <Box sx={{ paddingBottom: 4 }}>
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
            />
        </Box>
    );
}


export default Kanban;
