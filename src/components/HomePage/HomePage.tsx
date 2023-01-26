import React from 'react';
import PostsList from "../PostsList/PostsList";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {Button} from "@mui/material";
import './home-page.css'
import AddPostModal from "../Modal/AddPostModal";
import {observer} from "mobx-react-lite";
import modal from "../../store/modal";
import UpdatePostModal from "../Modal/UpdatePostModal";


const HomePage = observer(() => {
    return (
        <div className='home-page-box'>
            <Button
                className='add-post-button'
                variant="contained"
                startIcon={<AddBoxIcon />}
                onClick={() => modal.openAddPostModal()}
            >
                Add post
            </Button>
            <PostsList/>

            <AddPostModal/>
            <UpdatePostModal/>
        </div>
    );
}) ;

export default HomePage;
