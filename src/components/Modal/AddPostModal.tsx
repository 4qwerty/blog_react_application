
import { ModalStore } from '../../store/modal'
import { observer } from 'mobx-react-lite'
import {Box, Modal, Typography} from "@mui/material";
import AddPostForm from "../Form/AddPostForm/AddPostForm";

const AddPostModal = observer(() => {
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
            open={ModalStore.isOpenAddPostModal}
            onClose={() => ModalStore.closeAddPostModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <AddPostForm/>
            </Box>
        </Modal>
    )
})

export default AddPostModal
