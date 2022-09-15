import React from 'react';
import { Formik, ErrorMessage, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components'

const FormWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const FormikWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
`

const H1 = styled.h1`
width: 175px;
height: 39px;
font-weight: 700;
font-size: 32px;
line-height: 39px;
color: rgba(0, 0, 0, 0.64);

`

const Description = styled.div`
width: 288px;
height: 57px;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: rgba(0, 0, 0, 0.45);
margin: 24px 0 12px;
`

const Email = styled.input`
width: 288px;
height: 59px;
background: #FFFFFF;
border: 1px solid #CBD5E0;
border-radius: 6px;
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin: 12px 0 12px;
`

const Message = styled.input`
width: 288px;
height: 115px;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 6px;
font-weight: 400;
font-size: 16px;
line-height: 20px;
margin: 12px 0 12px;
`
const Button = styled.button`
width: 70px;
height: 37px;
font-weight: 600;
font-size: 16px;
line-height: 28px;
color: #FFFFFF;
background: #4DBA7A;
border-radius: 6px;
margin: 12px 0 0;
`

const ContactForm = () => {

    const formik = useFormik({
        initialValues: { email: '', message: '' },

        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            message: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required')

        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <FormWrapper>
            <H1>Contact Us</H1>
            <Description>If you have any questions please <br /> don't hesitate to contact us.<br /> We're here to help!</Description>

            <form onSubmit={formik.handleSubmit}>
                <FormikWrapper>

                    <Email
                        name="email"
                        type="email"
                        placeholder="Your email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email} />

                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}

                    <Message
                        name="message"
                        type="text" as='textarea'
                        placeholder="Your message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message} />

                    {formik.touched.message && formik.errors.message ? (
                        <div>{formik.errors.message}</div>
                    ) : null}

                    <Button type="submit">Send</Button>
                </FormikWrapper>
            </form>

        </FormWrapper>
    );
};

export default ContactForm;