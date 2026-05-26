import {Alert, Box, Button, TextField} from "@mui/material";
import React, {FormEvent, useState} from "react";

function KanbanCardInput({onCreate, onBlur}: {
    onCreate: (title: string) => void,
    onBlur: () => void
}) {
    const [title, setTitle] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedTitle = title.trim();
        if (!trimmedTitle) return;

        onCreate(trimmedTitle);
        setTitle("");
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Alert
                severity="info"
                action={
                    <Button
                        color="inherit"
                        disabled={!title.trim()}
                        size="small"
                        type="submit"
                    >
                        Create
                    </Button>
                }
            >
                <TextField
                    onBlur={onBlur}
                    autoFocus
                    fullWidth
                    label="Title"
                    onChange={(event) => setTitle(event.target.value)}
                    size="small"
                    value={title}
                    variant="standard"
                />
            </Alert>
        </Box>
    );
}

export default KanbanCardInput;
