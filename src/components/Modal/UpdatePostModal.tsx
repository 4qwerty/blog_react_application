
import modal from '../../store/modal'
import { observer } from 'mobx-react-lite'
import {Box, Modal} from "@mui/material";
import "./modal.css"
import UpdatePostForm from "../Form/UpdatePostForm/UpdatePostForm";
import {PostModel} from "../../types/Posts";

export interface PostProps {
    post: PostModel
}

const UpdatePostModal = observer(() => {
    return (
        <Modal
            open={modal.isOpenEditPostModal}
            onClose={() => modal.closeEditPostModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="modal-style">
                <UpdatePostForm />
            </Box>
        </Modal>
    )
})

export default UpdatePostModal
