import {Box, Button, Card, CardContent, Checkbox, Stack, Typography} from "@mui/material";
import KanbanList from "./KanbanList";
import KanbanItem from "./KanbanItem";

export function Kanban() {
    return (

        <Box sx={{paddingBottom: 4}}>
            <Stack spacing={2} margin={5} direction="row">
                <KanbanList>
                    <KanbanItem/>
                    <KanbanItem/>
                    <KanbanItem/>
                    <Button>Add item</Button>
                </KanbanList>
                <KanbanList>
                    <KanbanItem/>
                    <KanbanItem/>
                    <KanbanItem/>
                    <Button>Add item</Button>
                </KanbanList>
                <KanbanList>
                    <KanbanItem/>
                    <KanbanItem/>
                    <KanbanItem/>
                    <Button>Add item</Button>
                </KanbanList>
            </Stack>
        </Box>
    );
}




export default Kanban;