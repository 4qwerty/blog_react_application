import React, {useEffect} from 'react';
import { observer } from 'mobx-react-lite'
import posts from '../../store/posts'
import PostCard from "../PostCard/PostCard";
import {Grid} from "@mui/material";

const PostsList: React.FC = observer(() => {
    const postData = posts.posts

    useEffect(() => {
        posts.getPosts()
    }, [])

    return (
        <>
            <Grid
                container
                spacing={{ xs: 1, md: 3, lg: 4, xl: 5 }}
                columns={{ xs: 2, sm: 8, md: 12, lg: 14, xl: 18 }}
                justifyContent='center'
            >

                {postData.map((post) => (
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4} key={post.id}>
                        <PostCard post={post}/>
                    </Grid>
                ))}
            </Grid>
        </>

    );
})

export default PostsList;
