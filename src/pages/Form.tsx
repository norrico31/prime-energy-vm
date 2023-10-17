import { useEffect, PropsWithChildren } from 'react'
import { Col, Form, Row, } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components';
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
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    terms: false,
}

function Forms({ to, children }: PropsWithChildren<{ to: string }>) {
    const { id } = useParams()

    useEffect(() => {
        if (id === 'create') return
        // alert('update')
        // FETCH ENDPOINT BY ID
    }, [])

    const onSubmit = (v: typeof initValues) => {
        // edit create endpoint
        console.log(v)
    }
    console.log(children)
    return (
        <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={initValues}
        >
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <div className={`d-flex justify-content-between`}>
                        {children}
                        {/* <h2 className='text-color-gray'>{to.split('/')[1].toUpperCase()}</h2> */}
                        <Link to={to} className='mb-4 text-decoration-none'>Back to lists</Link>

                        {/* {id != 'create' &&
                            <Button variant='danger' title='Disable' className='mb-3' onClick={() => alert('use modal to delete/disable and hit endpoint ')}>Disable</Button>
                        } */}
                    </div>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridActionNo">
                            <Form.Label>Action No.</Form.Label>
                            <Form.Control required type="text" placeholder="Enter action no." />
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridDateRaised">
                            <Form.Label>Date Raised (mm/dd/yyyy)</Form.Label>
                            <Form.Control required type="date" placeholder="Select Date" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEquipment">
                            <Form.Label>Equipment</Form.Label>
                            <Form.Control required type="text" placeholder="Enter equipment." />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridInitiator">
                            <Form.Label>Initiator</Form.Label>
                            <Form.Control required type="text" placeholder="Enter initiator." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md={6} controlId="formGridActionNo2">
                            <Form.Label>Action No.</Form.Label>
                            <Form.Control required type="text" placeholder="Enter action no." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md={6} controlId="formGridEquipment2">
                            <Form.Label>Equipment</Form.Label>
                            <Form.Control required type="text" placeholder="Enter equipment." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md={6} controlId="formGridPhase">
                            <Form.Label>Phase</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridVulnerabilityTitle">
                            <Form.Label>Vulnerability Title</Form.Label>
                            <Form.Control required as='textarea' type="text" placeholder="Enter vulnerability title." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridDescription">
                            <Form.Label>Risk Description</Form.Label>
                            <Form.Control required as='textarea' type="text" placeholder="Enter risk description." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridActionItem">
                            <Form.Label>Action Item</Form.Label>
                            <Form.Control required type="text" placeholder="Enter item no." />
                            <Form.Control required type="text" placeholder="Enter item no." className='mt-1 mb-1' />
                            <Form.Control required type="text" placeholder="Enter item no." />
                            <Form.Control required type="text" placeholder="Enter item no." className='mt-1 mb-1' />
                            <Form.Control required type="text" placeholder="Enter item no." />
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridActionOwner">
                            <Form.Label>Action Owner</Form.Label>
                            <Form.Control required type="text" placeholder="Enter owner." />
                            <Form.Control required type="text" placeholder="Enter owner." className='mt-1 mb-1' />
                            <Form.Control required type="text" placeholder="Enter owner." />
                            <Form.Control required type="text" placeholder="Enter owner." className='mt-1 mb-1' />
                            <Form.Control required type="text" placeholder="Enter owner." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridMitigation">
                            <Form.Label>Mitigation</Form.Label>
                            <Form.Control required as='textarea' type="text" placeholder="Enter mitigation." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridAvailability">
                            <Form.Label>Availability.</Form.Label>
                            <Form.Select placeholder='Select Availability' defaultValue="Select Availability..." required>
                                {/* <option>Red</option>
                        <option>...</option> */}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridIntegrity">
                            <Form.Label>Integrity</Form.Label>
                            <Form.Select placeholder='Select Integrity' defaultValue="Choose..." required>
                                {/* <option>Green</option>
                        <option>...</option> */}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <div className={`d-flex justify-content-end`}>
                        <Button variant={id === 'create' ? 'success' : 'primary'} type="submit" disabled={isSubmitting}>
                            {id === 'create' ? 'Create' : 'Update'}
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default Forms;