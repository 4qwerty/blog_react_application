import { makeAutoObservable } from 'mobx'
import {ExtendedPostModel, PostModel} from '../types/Posts'


interface Post {
    title: string,
    body: string
}
class Posts {
    constructor() {
        makeAutoObservable(this)
    }

    posts: PostModel[] = []
    extendedPost: ExtendedPostModel | null = null

    async createPosts(data: Post) {
        await fetch(`https://blog-api-t6u0.onrender.com/posts`, {
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

    async retrievePost(id: number) {
        await fetch(`https://blog-api-t6u0.onrender.com/posts/${id}?_embed=comments`)
            .then(res => res.json())
            .then(data => {
                this.extendedPost = data
            })
            .catch(function(err) {
                console.log(err);
            });
    }
}

export default new Posts()
