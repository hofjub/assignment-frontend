import React, {useState} from 'react';
import Kanban from "./features/kanban/components/Kanban";
import {useKanbanStore} from "./features/kanban/stores/useKanbanStore";
import {Button, Card} from "@mui/material";

function App() {


    return (
        <div style={{
            gap: 24,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "32px 24px",
            boxSizing: "border-box",
        }}>
            <div style={{width: "100%"}}>
                <Kanban/>
            </div>


            <JsonView/>

        </div>
    );
}

const JsonView = () => {
    const {columns} = useKanbanStore()

    const [showJson, setShowJson] = useState(false)

    return (
        <>
            <Button
                onClick={() => setShowJson(prev => !prev)}
                sx={{
                    borderRadius: 2,
                    color: "text.secondary",
                    textTransform: "none",
                }}
            >
                {
                    showJson ? "Dismiss JSON" : "Show JSON"
                }
            </Button>

            {showJson && (
                <Card
                    variant="outlined"
                    sx={{
                        width: "min(960px, 100%)",
                        overflow: "hidden",
                        bgcolor: "#172033",
                        borderColor: "rgba(23, 32, 51, 0.12)",
                        borderRadius: 2,
                        boxShadow: "0 18px 40px rgba(23, 32, 51, 0.12)",
                        color: "#f8fafc",
                        p: 3,
                    }}
                >
                <pre  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    margin: 0,
                }}>

                <code>{JSON.stringify(columns, null, 2)}</code>
                </pre>
                </Card>
            )}
        </>
    )
}

export default App;
