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
                icon={false}
                severity="info"
                sx={{
                    bgcolor: "#fff",
                    border: "1px dashed rgba(25, 118, 210, 0.35)",
                    borderRadius: 2,
                    boxShadow: "0 12px 26px rgba(23, 32, 51, 0.08)",
                    color: "#172033",
                    p: 1.5,
                    "& .MuiAlert-message": {
                        width: "100%",
                    },
                }}
                action={
                    <Button
                        color="inherit"
                        disabled={!title.trim()}
                        size="small"
                        sx={{borderRadius: 1.5, textTransform: "none"}}
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
                    variant="outlined"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            bgcolor: "#f8fafc",
                        },
                    }}
                />
            </Alert>
        </Box>
    );
}

export default KanbanColumnInput;
