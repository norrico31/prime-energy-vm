import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

const { Formik } = formik;

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

const initValues = {
    ...{
        firstName: 'Mark',
        lastName: 'Otto',
        username: '',
        city: '',
        state: '',
        zip: '',
        terms: false,
    }
}

function Forms() {

    const onSubmit = (v: typeof initValues) => {
        console.log(v)
    }

    return (
        <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={initValues}
        >
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                            <Form.Label>Action No.</Form.Label>
                            <Form.Control required type="text" placeholder="Enter action no." />
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                            <Form.Label>Date Raised (mm/dd/yyyy)</Form.Label>
                            <Form.Control required type="date" placeholder="Select Date" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Equipment</Form.Label>
                            <Form.Control required type="text" placeholder="Enter equipment." />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Initiator</Form.Label>
                            <Form.Control required type="text" placeholder="Enter initiator." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md={6} controlId="formGridEmail">
                            <Form.Label>Action No.</Form.Label>
                            <Form.Control required type="text" placeholder="Enter action no." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md={6} controlId="formGridEmail">
                            <Form.Label>Equipment</Form.Label>
                            <Form.Control required type="text" placeholder="Enter equipment." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md={6} controlId="formGridEmail">
                            <Form.Label>Phase</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Vulnerability Title</Form.Label>
                            <Form.Control required as='textarea' type="text" placeholder="Enter vulnerability title." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Risk Description</Form.Label>
                            <Form.Control required as='textarea' type="text" placeholder="Enter risk description." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                            <Form.Label>Action Item</Form.Label>
                            <Form.Control required type="text" placeholder="Enter item no." />
                            <Form.Control required type="text" placeholder="Enter item no." className='mt-1 mb-1' />
                            <Form.Control required type="text" placeholder="Enter item no." />
                            <Form.Control required type="text" placeholder="Enter item no." className='mt-1 mb-1' />
                            <Form.Control required type="text" placeholder="Enter item no." />
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                            <Form.Label>Action Owner</Form.Label>
                            <Form.Control required type="text" placeholder="Enter owner." />
                            <Form.Control required type="text" placeholder="Enter owner." className='mt-1 mb-1' />
                            <Form.Control required type="text" placeholder="Enter owner." />
                            <Form.Control required type="text" placeholder="Enter owner." className='mt-1 mb-1' />
                            <Form.Control required type="text" placeholder="Enter owner." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Mitigation</Form.Label>
                            <Form.Control required as='textarea' type="text" placeholder="Enter mitigation." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                            <Form.Label>Availability.</Form.Label>
                            <Form.Select placeholder='Select Availability' defaultValue="Select Availability..." required>
                                {/* <option>Red</option>
                        <option>...</option> */}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                            <Form.Label>Integrity</Form.Label>
                            <Form.Select placeholder='Select Integrity' defaultValue="Choose..." required>
                                {/* <option>Green</option>
                        <option>...</option> */}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default Forms;