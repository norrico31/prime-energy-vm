import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom'
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
    const [classification, setClassification] = useState('shortTerm');

    // useEffect(() => {
    //     if (id === 'create') return
    //     alert('update')
    //     // FETCH ENDPOINT BY ID
    // }, [])

    const onSubmit = (v: typeof initValues) => {
        // edit create endpoint
        console.log(v)
    }

    const [urls, setUrls] = useState<typeof initDataRowState>([]);

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
                            <Form.Select placeholder='Select threat owner' required>
                                {/* <option>Green</option>
                        <option>...</option> */}
                            </Form.Select>
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
                            <Form.Control required as='textarea' type="text" placeholder="Enter vulnerability title." />
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
                                {/* <Form.Control required type="text" placeholder="Enter item no." />
                                <Form.Control required type="text" placeholder="Enter item no." className='mt-1 mb-1' />
                                <Form.Control required type="text" placeholder="Enter item no." />
                                <Form.Control required type="text" placeholder="Enter item no." className='mt-1 mb-1' />
                                <Form.Control required type="text" placeholder="Enter item no." /> */}
                                <Form.Control required as='textarea' type="text" placeholder="Enter action item." />
                                <Form.Control required as='textarea' type="text" placeholder="Enter action item." className='mt-1 mb-1' />
                                <Form.Control required as='textarea' type="text" placeholder="Enter action item." />
                                <Form.Control required as='textarea' type="text" placeholder="Enter action item." className='mt-1 mb-1' />
                                <Form.Control required as='textarea' type="text" placeholder="Enter action item." />
                            </Form.Group>
                            <Form.Group as={Col} xs={12} md={6} controlId="formGridActionOwner">
                                <Form.Label>Action Owner</Form.Label>
                                <Form.Select placeholder='Select Action Owner' required style={{ marginBottom: 17, height: 50 }}>
                                    {/* <option>Green</option>
                        <option>...</option> */}
                                </Form.Select><Form.Select placeholder='Select Action Owner' required style={{ marginBottom: 17, height: 50 }}>
                                    {/* <option>Green</option>
                        <option>...</option> */}
                                </Form.Select><Form.Select placeholder='Select Action Owner' required style={{ marginBottom: 17, height: 50 }}>
                                    {/* <option>Green</option>
                        <option>...</option> */}
                                </Form.Select><Form.Select placeholder='Select Action Owner' required style={{ marginBottom: 17, height: 50 }}>
                                    {/* <option>Green</option>
                        <option>...</option> */}
                                </Form.Select><Form.Select placeholder='Select Action Owner' required style={{ marginBottom: 17, height: 50 }}>
                                    {/* <option>Green</option>
                        <option>...</option> */}
                                </Form.Select>
                                {/* <Form.Control required type="text" placeholder="Enter owner." />
                                <Form.Control required type="text" placeholder="Enter owner." className='mt-1 mb-1' />
                                <Form.Control required type="text" placeholder="Enter owner." />
                                <Form.Control required type="text" placeholder="Enter owner." className='mt-1 mb-1' />
                                <Form.Control required type="text" placeholder="Enter owner." /> */}
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
                        <FormUrl urls={urls} setUrls={setUrls} />
                    </Row>
                    <ButtonSubmit isSubmitting={isSubmitting} />
                </Form>
            )
            }
        </Formik >
    );
}

export default Forms;

function FormUrl({ urls, setUrls }: { urls: typeof initDataRowState; setUrls: React.Dispatch<React.SetStateAction<{ id: string; url: string; }[]>> }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [urlList, setUrlList] = useState<typeof initDataRowState>(initDataRowState);

    const addRow = () => setUrlList(prevUrl => [...prevUrl, { ...initDataRowState[0], id: Math.floor(Math.random() * 99999) + '', }])

    const removeRow = (id: string) => {
        //TODO: BUG
        const updatedRows = urlList.filter((url) => id !== url.id)
        setUrlList(updatedRows)
    }

    const onHide = () => setIsModalVisible(false)
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
                {urls?.map((d, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>
                            <Link to={d.url}>{d.url}</Link>
                        </td>
                        <td >
                            {/* <Button variant='primary' onClick={() => {
                                if (selectedUrl) {
                                    const updatedRows = urlList.map(url => url.id !== selectedUrl.id ? url : selectedUrl)
                                    setUrls(updatedRows)
                                    setSelectedUrl(undefined)
                                } else {
                                    setSelectedUrl(d)
                                }
                            }}>{selectedUrl?.id === d.id ? 'Save' : "Edit"}</Button> */}
                            <Button variant='primary'>Remove</Button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </Table>
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            show={isModalVisible}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Upload URL
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant='primary' className='mb-3' onClick={addRow}>Add Entry</Button>
                {urlList.map((url, idx) => <Row className='d-flex align-items-center px-3' key={idx}>
                    <Form.Group as={Col} controlId="formGridOtherRemarks">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Add Link"
                            className="mb-2"

                        >
                            <Form.Control type="text" placeholder="name@example.com" value={urlList[idx].url} onChange={(e) => {
                                const urls = urlList.map((u) => u.id === url.id ? { ...url, url: e.target.value } : u)
                                setUrlList(urls)
                            }} />
                        </FloatingLabel>
                    </Form.Group>
                    <CloseButton onClick={() => removeRow(url.id)} disabled={urlList.length === 1} />
                </Row>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={() => {
                    onHide()
                    // setTimeout(() => setUrlList(initDataRowState), 500)
                }}>Cancel</Button>
                <Button
                    variant='primary'
                    type='submit'
                    disabled={Object.values(urlList).map(Object.values).flat().some(u => u === '')}
                    onClick={() => {
                        onHide()
                        setTimeout(() => {
                            setUrls(urlList)
                            setUrlList(initDataRowState)
                        }, 500)
                    }}>Upload</Button>
            </Modal.Footer>
        </Modal>
    </Form.Group>
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


const initDataRowState = [
    {
        id: Math.floor(Math.random() * 99999) + '',
        url: ''
    }
]