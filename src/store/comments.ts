import { makeAutoObservable } from 'mobx'
import {ExtendedPostModel, PostModel} from '../models/Posts'
import {CommentsModel} from "../models/Comments";

class Comments {
    constructor() {
        makeAutoObservable(this)
    }

    async createPosts(data: CommentsModel) {
        await fetch(`https://blog-api-t6u0.onrender.com/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...data}),
        }).catch((error) => {
            console.error('Error:', error);
        });
    }
}

export default new Comments()
