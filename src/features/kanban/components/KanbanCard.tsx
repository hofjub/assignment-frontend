import {Card, CardContent, CardMedia, Checkbox, Stack, Typography} from "@mui/material";
import {KanbanCard as KanbanCardType} from "../types/card";
import {useKanbanStore} from "../stores/useKanbanStore";

function KanbanCard({card, columnId}: {
    card: KanbanCardType,
    columnId: string,
}) {
    const {editCard} = useKanbanStore();

    return (
        <Card
            variant="outlined"
            sx={{
                borderColor: "rgba(23, 32, 51, 0.08)",
                borderRadius: 2,
                boxShadow: "0 8px 18px rgba(23, 32, 51, 0.08)",
                overflow: "hidden",
                transition: "border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease",
                "&:hover": {
                    borderColor: "rgba(25, 118, 210, 0.35)",
                    boxShadow: "0 14px 26px rgba(23, 32, 51, 0.12)",
                    transform: "translateY(-1px)",
                },
            }}
        >
            {card.image && (
                <CardMedia
                    component="img"
                    height="140"
                    image={card.image}
                    alt=""
                    sx={{objectFit: "cover"}}
                />
            )}
            <CardContent sx={{p: 1.5, "&:last-child": {pb: 1.5}}}>
                <Stack spacing={1.25} direction="row" alignItems={"center"} >
                    <Checkbox
                        checked={Boolean(card.finishedAt)}
                        onChange={() => editCard(columnId, card.id, {
                            finishedAt: card.finishedAt ? undefined : new Date()
                        })}
                        sx={{
                            color: "rgba(23, 32, 51, 0.36)",
                            p: 0.5,
                        }}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            color: card.finishedAt ? "text.secondary" : "#172033",
                            fontWeight: 600,
                            lineHeight: 1.35,
                            overflowWrap: "anywhere",
                            textDecoration: card.finishedAt ? "line-through" : "none",
                        }}
                    >
                        {card.title}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default KanbanCard
