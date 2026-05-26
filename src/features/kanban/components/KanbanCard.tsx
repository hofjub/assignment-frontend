import {Card, CardContent, Checkbox, Stack, Typography} from "@mui/material";
import {KanbanCard as KanbanCardType} from "../types/card";
import {useKanbanStore} from "../stores/useKanbanStore";

function KanbanCard({card, columnId}: {
    card: KanbanCardType,
    columnId: string,
}) {
    const {editCard} = useKanbanStore();

    return (
        <Card>
            <CardContent>
                <Stack spacing={2} direction="row" alignItems={"center"} >
                    <Checkbox
                        checked={Boolean(card.finishedAt)}
                        onChange={() => editCard(columnId, card.id, {
                            finishedAt: card.finishedAt ? undefined : new Date()
                        })}
                    />
                    <Typography variant="h6">{card.title}</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default KanbanCard
