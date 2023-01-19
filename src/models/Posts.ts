import {CommentsModel} from "./Comments";

export interface PostModel {
    id: number,
    title: string,
    body: string
}

export interface ExtendedPostModel {
    id: number,
    title: string,
    body: string
    comments?: CommentsModel[]
}
