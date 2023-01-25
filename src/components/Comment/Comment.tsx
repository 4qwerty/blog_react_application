import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import {observer} from "mobx-react-lite";
import posts from '../../store/posts'
import {CommentsModel} from "../../types/Comments";
import CommentCard from "../CommentList/CommentCard";
import {Grid, Typography} from '@mui/material';
import './Comment.css'


const Comment = observer(() => {
    const state = useLocation()
    const postId = state.state

    const extendedPostData = posts.extendedPost
    const comments: CommentsModel[] | undefined = extendedPostData?.comments

    useEffect(() => {
        posts.retrievePost(postId)
    }, [])

    return (
        <div className='comment-box'>
            <div className='post-info'>
                <Typography variant="h4" gutterBottom>
                    {extendedPostData?.title}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    {extendedPostData?.body}
                </Typography>
            </div>


            {comments?.map((comment) => (
                <Grid
                    item xs={2} sm={4} md={4} lg={4} xl={4}
                    key={comment.id}
                >
                    <CommentCard
                        comment={comment}/>
                </Grid>
            ))}
        </div>
    );
});

export default Comment;
