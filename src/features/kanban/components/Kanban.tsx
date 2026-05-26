import {Box, Button} from "@mui/material";
import KanbanList from "./KanbanList";
import KanbanItem from "./KanbanItem";
import {useKanbanStore} from "../stores/useKanbanStore";
import {DraggableList} from "../../draggable";

export function Kanban() {
    const {reorderColumn, columns} = useKanbanStore()

    return (
        <Box sx={{ paddingBottom: 4 }}>
            <DraggableList
                items={columns}
                renderItem={(column) => (
                    <KanbanList>
                        <KanbanItem />
                        <KanbanItem />
                        <KanbanItem />
                        <Button>Add item {column.id}</Button>
                    </KanbanList>
                )}
                direction="horizontal"
                onReorder={reorderColumn}
                droppableId="kanban-columns"
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
