import { makeAutoObservable } from 'mobx'
import {CommentsModel} from "../types/Comments";
import {PostModel} from "../types/Posts";

class Comments {
    constructor() {
        makeAutoObservable(this)
    }

    createComment(data: CommentsModel) {
        fetch(`https://blog-api-t6u0.onrender.com/comments`, {
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
