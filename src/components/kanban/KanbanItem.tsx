import {Card, CardContent, Checkbox, Stack, Typography} from "@mui/material";

function KanbanItem() {
    return (
        <Card>
            <CardContent>
                <Stack spacing={2} direction="row" alignItems="center">
                    <Checkbox/>
                    <Typography variant="h6">Some item</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default KanbanItem