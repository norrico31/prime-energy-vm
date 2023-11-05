import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Col, Form, Row, } from 'react-bootstrap'
import { Button } from './components';
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

function Forms() {
    const { swpId, swpItemId, ogpId, ogpItemId, pipelineId, pipelineItemId, criticalEquipmentId, criticalEquipmentItemId } = useParams()
    console.log(swpId, swpItemId, ogpId, ogpItemId, pipelineId, pipelineItemId, criticalEquipmentId, criticalEquipmentItemId)
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (id === 'create') return
    //     alert('update')
    //     // FETCH ENDPOINT BY ID
    // }, [])

    const onSubmit = (v: typeof initValues) => {
        // edit create endpoint
        console.log(v)
    }
    return (
        <Formik
            validationSchema={schema}
            onSubmit={onSubmit}
            initialValues={initValues}
        >
            {/* {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => ( */}
            {({ handleSubmit, isSubmitting }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <div className={`d-flex justify-content-between`}>
                        <Button variant='outline-primary' title='Back to lists' className='mb-4 text-decoration-none' onClick={() => navigate(-1)}>Back to lists</Button>
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
                            <Form.Label>Availability</Form.Label>
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
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridAvailability">
                            <Form.Label>Initial Ram Raiting</Form.Label>
                            <Form.Select placeholder='Select Availability' defaultValue="Select Availability..." required>
                                {/* <option>Red</option>
                        <option>...</option> */}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridAvailability">
                            <Form.Label>Ram Priority</Form.Label>
                            <Form.Select placeholder='Select Availability' defaultValue="Select Availability..." required>
                                {/* <option>Red</option>
                        <option>...</option> */}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridAvailability">
                            <Form.Label>Re-assessed RAM Rating</Form.Label>
                            <Form.Select placeholder='Select Availability' defaultValue="Select Availability..." required>
                                {/* <option>Red</option>
                        <option>...</option> */}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Select placeholder='Select Status' defaultValue="Choose..." required>
                                {/* <option>Green</option>
                        <option>...</option> */}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridAvailability">
                            <Form.Label>Vulnerability Owner</Form.Label>
                            <Form.Control required type="text" placeholder="Enter vulnerability owner." />
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridDateRaised">
                            <Form.Label>Due Date - Baseed on risk rating</Form.Label>
                            <Form.Control required type="date" placeholder="Select Date" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridAvailability">
                            <Form.Label>SAP Notification</Form.Label>
                            <Form.Control required type="text" placeholder="Enter sap notification." />
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridDateRaised">
                            <Form.Label>Due Date - Latest Estimate</Form.Label>
                            <Form.Control required type="date" placeholder="Select Date" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridAvailability">
                            <Form.Label>MDC Number</Form.Label>
                            <Form.Control required type="text" placeholder="Enter MDC no." />
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridAvailability">
                            <Form.Label>SAP Work Order</Form.Label>
                            <Form.Control required type="text" placeholder="Enter SAP work order." />
                        </Form.Group>
                    </Row>
                    <ButtonSubmit isSubmitting={isSubmitting} />
                </Form>
            )}
        </Formik>
    );
}

export default Forms;

function ButtonSubmit({ isSubmitting }: { isSubmitting: boolean }) {
    const { pathname } = useLocation()
    return <div className={`d-flex justify-content-end`}>
        <Button variant={pathname.includes('edit') ? 'primary' : 'success'} type="submit" disabled={isSubmitting}>
            {pathname.includes('edit') ? 'Update' : 'Create'}
        </Button>
    </div>
}
