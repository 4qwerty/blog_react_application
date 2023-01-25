import { observable } from 'mobx'

export const ModalStore = observable({
    isOpenAddPostModal: false,
    isOpenEditPostModal: false,
    isOpenSuccessModal: false,
    isOpenDeletePostModal: false,

    openAddPostModal() {
        this.isOpenAddPostModal = true
    },
    closeAddPostModal() {
        this.isOpenAddPostModal = false
    },
    openEditPostModal() {
        this.isOpenEditPostModal = true
    },
    closeEditPostModal() {
        this.isOpenEditPostModal = false
    },
    openSuccessModal() {
        this.isOpenSuccessModal = true
    },
    closeSuccessModal() {
        this.isOpenSuccessModal = false
    },
    openDeletePostModal() {
        this.isOpenDeletePostModal = true
    },
    closeDeletePostModal() {
        this.isOpenDeletePostModal = false
    }
})
