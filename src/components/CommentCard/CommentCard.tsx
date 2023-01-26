import React from 'react'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { CommentsModel } from '../../types/Comments'
import { observer } from 'mobx-react-lite'

interface CommentProps {
    comment: CommentsModel
}
const CommentCard: React.FC<CommentProps> = observer(({ comment }) => {
    return (
        <Card sx={{ width: 800, margin: 1 }}>
            <CardHeader title={comment.name} subheader={comment.email} />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {comment.body}
                </Typography>
            </CardContent>
        </Card>
    )
})

export default CommentCard
