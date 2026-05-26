import React, {useState} from 'react';
import Kanban from "./features/kanban/components/Kanban";
import {useKanbanStore} from "./features/kanban/stores/useKanbanStore";
import {Box, Button, Card, Dialog} from "@mui/material";

function App() {


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


            <JsonView/>

        </div>
    );
}

const JsonView = () => {
    const {columns} = useKanbanStore()

    const [showJson, setShowJson] = useState(false)

    return (
        <>
            <Button onClick={() => setShowJson(prev => !prev)}>
                {
                    showJson ? "Dismiss JSON" : "Show JSON"
                }
            </Button>

            {showJson && (
                <Card style={{width: "80%", overflow: "hidden", backgroundColor: 'rgb(0,0,0,0.25)', padding: 30}}>
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
