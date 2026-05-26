import {Alert, Box, Button, Stack, TextField} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import React, {ChangeEvent, FormEvent, useState} from "react";

function KanbanCardInput({onCreate}: {
    onCreate: (title: string, image?: string) => void,
}) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState<string>();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const trimmedTitle = title.trim();
        if (!trimmedTitle) return;

        onCreate(trimmedTitle, image);
        setTitle("");
        setImage(undefined);
    };



    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {

        /*
        Base64:
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => setImage(String(reader.result));
        reader.readAsDataURL(file);
         */

        //For demo:
        const file = event.target.files?.[0];
        file !== undefined && setImage(URL.createObjectURL(file))

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
                <Stack spacing={1}>
                    {image && (
                        <Box
                            component="img"
                            src={image}
                            alt="Card thumbnail preview"
                            sx={{
                                borderRadius: 1,
                                height: 120,
                                objectFit: "cover",
                                width: "100%",
                            }}
                        />
                    )}
                    <Button
                        component="label"
                        size="small"
                        startIcon={<AddPhotoAlternateIcon />}
                        variant="outlined"
                    >
                        Upload thumbnail
                        <input
                            hidden
                            accept="image/*"
                            type="file"
                            onChange={handleImageChange}
                        />
                    </Button>
                    <TextField
                        autoFocus
                        fullWidth
                        label="Title"
                        onChange={(event) => setTitle(event.target.value)}
                        size="small"
                        value={title}
                        variant="standard"
                    />
                </Stack>
            </Alert>
        </Box>
    );
}

export default KanbanCardInput;
