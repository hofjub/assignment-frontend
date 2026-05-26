import {Card, CardContent, Stack} from "@mui/material";

function KanbanList({children}: { children: React.ReactNode }) {
    return (
        <Card variant="outlined" sx={{bgcolor: 'grey.200', width: 400}}>
            <CardContent>
                <Stack spacing={2}>{children}</Stack>
            </CardContent>
        </Card>
    );
}

export default KanbanList