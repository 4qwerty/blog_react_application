import React from 'react';
import {observer} from "mobx-react-lite";
import {PostModel} from "../../types/Posts";
import DeleteIcon from '@mui/icons-material/Delete';
import posts from "../../store/posts";
import EditIcon from '@mui/icons-material/Edit';
import CommentIcon from '@mui/icons-material/Comment';
import {
    Button,
    Card,
    CardActions,
    CardContent, IconButton,
    Typography
} from "@mui/material";

interface TicketProps {
    post: PostModel
}

const removePost = (id: number) => {
     posts.deletePost(id)
     posts.getPosts()
}

const PostCard: React.FC<TicketProps> = observer(({ post }) => {
    return (
        <Card sx={{ maxWidth: 400 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" endIcon={<CommentIcon />}>
                    Comments
                </Button>
                <IconButton aria-label="delete" color="success">
                    <EditIcon />
                </IconButton>
                <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => removePost(post.id)}
                >
                    <DeleteIcon />
                </IconButton>

            </CardActions>
        </Card>
    );
});

export default PostCard;
