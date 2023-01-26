import {makeAutoObservable, observable} from 'mobx'
import {PostModel} from "../types/Posts";

class Modal {
    constructor() {
        makeAutoObservable(this)
    }

    isOpenAddPostModal = false
    isOpenEditPostModal = false
    isOpenSuccessModal = false
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
    openSuccessModal() {
        this.isOpenSuccessModal = true
    }
    closeSuccessModal() {
        this.isOpenSuccessModal = false
    }
    openAddCommentModal() {
        this.isOpenAddCommentModal = true
    }
    closeAddCommentModal() {
        this.isOpenAddCommentModal = false
    }
}

export default new Modal()
