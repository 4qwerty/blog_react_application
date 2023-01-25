import React from 'react';
import {Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Typography} from "@mui/material";
import {CommentsModel} from "../../types/Comments";
import {observer} from "mobx-react-lite";

interface CommentProps {
    comment: CommentsModel
}
const CommentCard: React.FC<CommentProps> = observer(({comment}) => {
    return (
        <Card sx={{ maxWidth: 800}}>
            <CardHeader
                title={comment.name}
                subheader={comment.email}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {comment.body}
                </Typography>
            </CardContent>
        </Card>
    );
})

export default CommentCard;
