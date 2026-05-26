import {Card, CardContent, Checkbox, Stack, Typography} from "@mui/material";
import {KanbanCard as KanbanCardType} from "../types/card";

function KanbanCard({card}: {
    card: KanbanCardType,
}) {
    return (
        <Card>
            <CardContent>
                <Stack spacing={2} direction="row" >
                    <Checkbox/>
                    <Typography variant="h6">{card.title}</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default KanbanCard
