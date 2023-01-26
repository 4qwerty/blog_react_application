import React from 'react';
import {Box, Modal} from "@mui/material";
import modal from "../../store/modal";
import {observer} from "mobx-react-lite";
import AddCommentForm from "../Form/AddCommentForm/AddCommentForm";
import './modal.css'

const AddCommentModal = observer(() => {
    return (
        <Modal
            open={modal.isOpenAddCommentModal}
            onClose={() => modal.closeAddCommentModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="modal-style">
                <AddCommentForm/>
            </Box>
        </Modal>
    )
})

export default AddCommentModal;
