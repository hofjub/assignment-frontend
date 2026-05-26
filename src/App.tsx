import React, {useState} from 'react';
import Kanban from "./features/kanban/components/Kanban";
import {useKanbanStore} from "./features/kanban/stores/useKanbanStore";
import {Box, Button, Card, Dialog} from "@mui/material";

function App() {

    const {columns} = useKanbanStore()

    const [showJson, setShowJson] = useState(false)

    return (
        <div style={{
            gap: 30,
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <div style={{width: "100%"}}>
                <Kanban/>
            </div>


            <Button onClick={() => setShowJson(prev => !prev)}>
                {
                    showJson ? "Dismiss JSON" : "Show JSON"
                }
            </Button>

            {showJson && (
                <Card style={{width: "80%", overflow: "hidden", backgroundColor: 'rgb(0,0,0,0.25)', padding: 30}}>
                <pre>

                <code>{JSON.stringify(columns, null, 2)}</code>
                </pre>
                </Card>
            )}

        </div>
    );
}

export default App;
