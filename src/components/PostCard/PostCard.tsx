import React from 'react'
import { observer } from 'mobx-react-lite'
import { PostModel } from '../../types/Posts'
import DeleteIcon from '@mui/icons-material/Delete'
import posts from '../../store/posts'
import EditIcon from '@mui/icons-material/Edit'
import CommentIcon from '@mui/icons-material/Comment'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    Typography,
} from '@mui/material'
import modal from '../../store/modal'
import { useNavigate } from 'react-router-dom'

interface TicketProps {
    post: PostModel
}

const PostCard: React.FC<TicketProps> = observer(({ post }) => {
    const removePost = (id: number) => {
        posts.deletePost(id)
    }

    const navigate = useNavigate()
    const openComment = async (id: number) => {
        navigate('/comment', {
            state: id,
        })
    }

    return (
        <>
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
                    <Button
                        variant="outlined"
                        endIcon={<CommentIcon />}
                        onClick={() => openComment(post.id)}
                    >
                        Comments
                    </Button>
                    <IconButton
                        aria-label="update"
                        color="success"
                        onClick={() => modal.openEditPostModal(post)}
                    >
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
        </>
    )
})

export default PostCard
