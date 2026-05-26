import {Card, CardContent, Checkbox, Stack, Typography} from "@mui/material";

function KanbanCard() {
    return (
        <Card>
            <CardContent>
                <Stack spacing={2} direction="row" >
                    <Checkbox/>
                    <Typography variant="h6">Some item</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default KanbanCard