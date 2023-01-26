import { makeAutoObservable } from 'mobx'
import {ExtendedPostModel, PostModel} from '../types/Posts'
import {CommentsModel} from "../types/Comments";


interface Post {
    title: string,
    body: string
}
class Posts {
    constructor() {
        makeAutoObservable(this)
    }

    posts: PostModel[] = []
    extendedPost: ExtendedPostModel = {
        id: 0,
        title: '',
        body: '',
        comments: []
    }

    createPosts(data: Post) {
        fetch(`https://blog-api-t6u0.onrender.com/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data}),
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
    getPosts() {
        fetch('https://blog-api-t6u0.onrender.com/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                this.posts = data
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    deletePost(id: number) {
        fetch(`https://blog-api-t6u0.onrender.com/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => console.log(res))
            .catch(function(err) {
                console.log(err);
            });
    }

    retrievePost(id: number) {
        fetch(`https://blog-api-t6u0.onrender.com/posts/${id}?_embed=comments`)
            .then(res => res.json())
            .then(data => {
                this.extendedPost = data
            })
            .catch(function(err) {
                console.log(err);
            });
    }

    updatePosts(data: { title: string | undefined; body: string | undefined }, id: number | undefined) {
        fetch(`https://blog-api-t6u0.onrender.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data}),
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
}

export default new Posts()
