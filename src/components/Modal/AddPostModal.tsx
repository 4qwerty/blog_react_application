import modal from '../../store/modal'
import { observer } from 'mobx-react-lite'
import {Box, Modal} from "@mui/material";
import './modal.css'
import AddPostForm from "../Form/AddPostForm/AddPostForm";

const AddPostModal = observer(() => {
    return (
        <Modal
            open={modal.isOpenAddPostModal}
            onClose={() => modal.closeAddPostModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="modal-style">
                <AddPostForm/>
            </Box>
        </Modal>
    )
})

export default AddPostModal
