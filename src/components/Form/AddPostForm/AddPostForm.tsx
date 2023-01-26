import React from 'react';
import * as Yup from 'yup'
import {observer} from "mobx-react-lite";
import {useFormik} from "formik";
import Form from 'react-bootstrap/Form'
import modal from "../../../store/modal";
import posts from "../../../store/posts";
import {Button} from "@mui/material";
import './add-post-form.css'

const AddPostForm = observer(() => {
    const formik = useFormik({
        initialValues: {
            title: '',
            body: '',
        },

        validationSchema: Yup.object({
            title: Yup.string()
                .min(3, 'Must be 3 characters or longer')
                .required('Required'),
            body: Yup.string()
                .min(3, 'Must be 3 characters or longer')
                .required('Required'),
        }),

        onSubmit: (data) => {
            posts.createPosts(data)
            modal.closeAddPostModal()
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
            {formik.touched.title && formik.errors.title && (
                <div className="required">{formik.errors.title}</div>
            )}

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
            {formik.touched.body && formik.errors.body && (
                <div className="required">{formik.errors.body}</div>
            )}

            <Button type="submit">
                Submit
            </Button>
        </Form>
    );
});

export default AddPostForm;
