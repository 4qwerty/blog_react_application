import React from 'react';
import {observer} from "mobx-react-lite";
import {Box, Modal} from "@mui/material";
import modal from "../../store/modal";
import AddPostForm from "../Form/AddPostForm/AddPostForm";

const SuccessModal = observer(() => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={modal.isOpenSuccessModal}
            onClose={() => modal.closeSuccessModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <AddPostForm/>
            </Box>
        </Modal>
    )
})
export default SuccessModal;
