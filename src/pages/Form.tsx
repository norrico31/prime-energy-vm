import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { CloseButton, Col, FloatingLabel, Form, Modal, Row, Table } from 'react-bootstrap'
import { Button, FileUpload } from './components';
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
    const params = useParams()
    console.log(params)
    const navigate = useNavigate()
    const [classification, setClassification] = useState('');
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
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridReferenceNo">
                            <Form.Label>Reference No.</Form.Label>
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
                        <Form.Group as={Col} controlId="formGridThreat Owner">
                            <Form.Label>Threat Owner</Form.Label>
                            <Form.Control required type="text" placeholder="Enter theat owner." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Select placeholder='Select Status' required>
                                {/* <option>Green</option>
                        <option>...</option> */}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridClassification">
                            <Form.Label>Classification</Form.Label>
                            <Form.Select placeholder='Select Classification' value={classification} onChange={(e) => {
                                setClassification(e.target.value)
                            }} required>
                                <option key='short term' value='shortTerm'>Short Term</option>
                                <option key='long term' value='longTerm'>Long Term</option>
                            </Form.Select>
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
                            <Form.Select placeholder='Select Integrity' required>
                                {/* <option>Green</option>
                        <option>...</option> */}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridVulnerabilityTitle">
                            <Form.Label>Vulnerability Title</Form.Label>
                            <Form.Control required type="text" placeholder="Enter vulnerability title." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridVulnerabilityDescription">
                            <Form.Label>Vulnerability Description</Form.Label>
                            <Form.Control required as='textarea' type="text" placeholder="Enter vulnerability description." />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridRiskDescription">
                            <Form.Label>Risk Description</Form.Label>
                            <Form.Control required as='textarea' type="text" placeholder="Enter risk description." />
                        </Form.Group>
                    </Row>

                    {classification === 'shortTerm' ?
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
                        : null}
                    <hr />
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridOtherRemarks">
                            <Form.Label>Other Remarks</Form.Label>
                            {/* <Form.Control required as='textarea' type="text" placeholder="Enter risk description." /> */}
                            <Form.Group as={Col} xs={6} md={6} controlId="formGridOtherRemarks">
                                <Form.Label>Upload Documents</Form.Label>
                                <FileUpload />
                            </Form.Group>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <FormUrl />
                    </Row>

                    {/* 
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
                                <option>Red</option>
                        <option>...</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridIntegrity">
                            <Form.Label>Integrity</Form.Label>
                            <Form.Select placeholder='Select Integrity' required>
                                <option>Green</option>
                        <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridAvailability">
                            <Form.Label>Initial Ram Raiting</Form.Label>
                            <Form.Select placeholder='Select Availability' defaultValue="Select Availability..." required>
                                <option>Red</option>
                        <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridAvailability">
                            <Form.Label>Ram Priority</Form.Label>
                            <Form.Select placeholder='Select Availability' defaultValue="Select Availability..." required>
                                <option>Red</option>
                        <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridAvailability">
                            <Form.Label>Re-assessed RAM Rating</Form.Label>
                            <Form.Select placeholder='Select Availability' defaultValue="Select Availability..." required>
                                <option>Red</option>
                        <option>...</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} xs={12} md={6} controlId="formGridStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Select placeholder='Select Status' required>
                                <option>Green</option>
                        <option>...</option>
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
                    </Row> */}
                    <ButtonSubmit isSubmitting={isSubmitting} />
                </Form>
            )
            }
        </Formik >
    );
}

export default Forms;

function FormUrl() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dataList, setDataRow] = useState<typeof dataRow>([]);
    return <Form.Group as={Col} controlId="formGridOtherRemarks">
        <div className='d-flex justify-content-between mb-2'>
            <Form.Label>Upload URL</Form.Label>
            <Button variant='primary' onClick={() => setIsModalVisible(true)}>Click to upload url</Button>
        </div>
        <Table bordered striped hover className='text-center'>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">URL</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {dataList?.map((d, idx) => (
                    <tr key={idx}>
                        <td>{d.url}</td>
                    </tr>

                ))}
            </tbody>
        </Table>
        <ModalUrl
            show={isModalVisible}
            onHide={() => setIsModalVisible(false)}
            onChange={(list) => console.log(list)}
        />
    </Form.Group>
}

function ModalUrl(props: { show: boolean; onHide: () => void; onChange: (urls: typeof dataRow) => void }) {
    const [urlList, setUrlList] = useState(() => dataRow)
    const addRow = () => setUrlList(prevUrl => [...prevUrl, dataRow[0]])
    const removeRow = (idx: number) => {
        const rows = [...urlList]
        rows.splice(idx, 1)
        setUrlList(rows)
    }

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Upload URL
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant='primary' className='mb-3' onClick={addRow}>Add Entry</Button>
                {urlList.map((url, idx) => {
                    // console.log('render')
                    // TODO: Optimize rerenders
                    return (
                        <Row className='d-flex align-items-center px-3' key={idx}>
                            <Form.Group as={Col} controlId="formGridOtherRemarks">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Add Link"
                                    className="mb-2"

                                >
                                    <Form.Control type="text" placeholder="name@example.com" value={url.url} onChange={(e) => {
                                        const value = e.target.value
                                        const newUrl = [...urlList].map((u, i) => i === idx ? { ...u, url: value } : u)
                                        setUrlList(newUrl)
                                    }} />
                                </FloatingLabel>
                            </Form.Group>
                            <CloseButton onClick={() => removeRow(idx)} disabled={urlList.length === 1} />
                        </Row>
                    )
                })}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={() => {
                    props.onHide()
                    setTimeout(() => setUrlList(dataRow), 500)

                }}>Cancel</Button>
                <Button variant='primary' onClick={() => {
                    props.onHide()
                    props.onChange(urlList)
                    setTimeout(() => setUrlList(dataRow), 500)
                }}>Upload</Button>
            </Modal.Footer>
        </Modal>
    )
}

function ButtonSubmit({ isSubmitting }: { isSubmitting: boolean }) {
    const { pathname } = useLocation()
    return <div className={`d-flex justify-content-end gap-2`}>
        <Button variant='danger' title='Close'>Cancel</Button>
        <Button variant={pathname.includes('edit') ? 'primary' : 'success'} title={pathname.includes('edit') ? 'Update' : 'Create'} type="submit" disabled={isSubmitting}>
            {pathname.includes('edit') ? 'Update' : 'Submit'}
        </Button>
    </div>
}


const dataRow = [
    {
        url: ''
    }
]