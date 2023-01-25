import React from 'react';
import PostsList from "../PostsList/PostsList";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {Button} from "@mui/material";
import AddPostModal from "../Modal/AddPostModal";
import {observer} from "mobx-react-lite";
import {ModalStore} from "../../store/modal";


const HomePage = observer(() => {
    return (
        <div>
            <Button
                variant="outlined"
                startIcon={<AddBoxIcon />}
                onClick={() => ModalStore.openAddPostModal()}
            >
                Add post
            </Button>
            <PostsList/>

            <AddPostModal/>
        </div>
    );
}) ;

export default HomePage;
