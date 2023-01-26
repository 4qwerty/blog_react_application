import {makeAutoObservable, observable} from 'mobx'
import {PostModel} from "../types/Posts";

class Modal {
    constructor() {
        makeAutoObservable(this)
    }

    isOpenAddPostModal = false
    isOpenEditPostModal = false
    isOpenAddCommentModal = false
    postToEdit: PostModel | null = null


    openAddPostModal() {
        this.isOpenAddPostModal = true
    }
    closeAddPostModal() {
        this.isOpenAddPostModal = false
    }
    openEditPostModal(post: PostModel) {
        this.isOpenEditPostModal = true
        this.postToEdit = post
    }
    closeEditPostModal() {
        this.isOpenEditPostModal = false
    }
    openAddCommentModal() {
        this.isOpenAddCommentModal = true
    }
    closeAddCommentModal() {
        this.isOpenAddCommentModal = false
    }
}

export default new Modal()
