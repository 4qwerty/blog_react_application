import React from 'react';
import {observer} from "mobx-react-lite";
import {useFormik} from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import {Button} from "@mui/material";
import comment from "../../../store/comments";
import posts from "../../../store/posts";
import modal from "../../../store/modal";

const AddCommentForm = observer(() => {
    const post = posts.extendedPost
    const postId = post.id

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            body: '',
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .min(3, 'Must be 3 characters or longer')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            body: Yup.string()
                .min(3, 'Must be 3 characters or longer')
                .required('Required'),
        }),

        onSubmit: (data) => {
            const commentData = {postId, ...data}

            comment.createComment(commentData)
            modal.closeAddCommentModal()
        },
    })

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
                id="name"
                name="name"
                type="text"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
                <div className="required">{formik.errors.name}</div>
            )}

            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control
                id="email"
                name="email"
                type="email"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
                <div className="required">{formik.errors.email}</div>
            )}

            <Form.Label htmlFor="body">Body</Form.Label>
            <Form.Control
                id="body"
                name="body"
                type="text"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.body}
            />
            {formik.touched.body && formik.errors.body && (
                <div className="required">{formik.errors.body}</div>
            )}

            <Button type="submit">
                Submit
            </Button>
        </Form>
    );
});

export default AddCommentForm;
