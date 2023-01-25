
import modal from '../../store/modal'
import { observer } from 'mobx-react-lite'
import {Box, Modal} from "@mui/material";
import UpdatePostForm from "../Form/updatePostForm/UpdatePostForm";
import {PostModel} from "../../types/Posts";

export interface PostProps {
    post: PostModel
}

const UpdatePostModal = observer(() => {
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
            open={modal.isOpenEditPostModal}
            onClose={() => modal.closeEditPostModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <UpdatePostForm />
            </Box>
        </Modal>
    )
})

export default UpdatePostModal
