import {Alert, Box, Button, TextField} from "@mui/material";
import React, {FocusEvent, FormEvent, useState} from "react";

function KanbanColumnInput({onCreate, onBlur}: {
    onCreate: (title: string) => void,
    onBlur: () => void,
}) {
    const [title, setTitle] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedTitle = title.trim();
        if (!trimmedTitle) return;

        onCreate(trimmedTitle);
        setTitle("");
    };

    const handleBlur = (event: FocusEvent<HTMLFormElement>) => {
        if (event.currentTarget.contains(event.relatedTarget)) return;

        onBlur();
    };

    return (
        <Box component="form" onBlur={handleBlur} onSubmit={handleSubmit} sx={{width: 400}}>
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
                    autoFocus
                    fullWidth
                    label="Column title"
                    onChange={(event) => setTitle(event.target.value)}
                    size="small"
                    value={title}
                    variant="standard"
                />
            </Alert>
        </Box>
    );
}

export default KanbanColumnInput;
