import React from 'react';
import {observer} from "mobx-react-lite";
import {useFormik} from "formik";
import posts from "../../../store/posts";
import modal from "../../../store/modal";
import Form from "react-bootstrap/Form";
import {Button} from "@mui/material";

const UpdatePostForm = observer(() => {
    const post = modal.postToEdit
    const formik = useFormik({
        initialValues: {
            title: post?.title,
            body: post?.body,
        },

        onSubmit: (data) => {
            posts.updatePosts(data, post?.id).then(() => {
                posts.getPosts()
            })

            modal.closeEditPostModal()
            modal.openSuccessModal()
        },
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control
                id="title"
                name="title"
                type="text"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
            />

            <Form.Label htmlFor="lastName">Body</Form.Label>
            <Form.Control
                id="body"
                name="body"
                type="text"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.body}
            />

            <Button type="submit">
                Submit
            </Button>
        </Form>
    );
});

export default UpdatePostForm;
