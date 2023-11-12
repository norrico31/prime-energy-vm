import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
// import { CloseButton, Col, FloatingLabel, Form, Modal, Row, Table } from 'react-bootstrap'
import { Row, Col, Form, Input, DatePicker, Select } from 'antd'
import { Button } from './components';

const { useForm } = Form

function Forms() {
    const params = useParams()
    console.log(params)
    const navigate = useNavigate()
    const [form] = useForm()
    const [classification, setClassification] = useState<string>('short_term');

    useEffect(() => {
        // if (id === 'create') return
        form.setFieldsValue({
            ...form.getFieldsValue(),
            classification: 'short_term'
        })
        // FETCH ENDPOINT BY ID
    }, [])

    const onFinish = (values: Record<string, string | number>) => {
        console.log(values)
        // edit create endpoint
    }


    // const [urls, setUrls] = useState<typeof initDataRowState>([]);


    return <>

        <div className={`d-flex justify-content-between`}>
            <Button variant='outline-primary' title='Back to lists' className='mb-4 text-decoration-none' onClick={() => navigate(-1)}>Back to lists</Button>
        </div>
        <Form form={form} name="horizontal_login" onFinish={onFinish} layout='vertical'>
            <Row wrap gutter={[24, 24]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Reference No." name='reference_no'>
                        <Input placeholder="Enter reference no." />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Date Raised (mm/dd/yyyy)" name='date_raised'>
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>
            <Row wrap gutter={[24, 24]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Equipment" name='equipment'>
                        <Input placeholder="Enter equipment" />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Threat Owner" name='theat_owner_id'>
                        <Select placeholder='Select threat owner'>
                            {/* <Select.Option value="demo">Threat Owner</Select.Option> */}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row wrap gutter={[24, 24]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Status" name='status_id'>
                        <Select placeholder='Select status' allowClear optionFilterProp="children" showSearch>
                            {/* <Select.Option value="demo">Threat Owner</Select.Option> */}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Classification" name='classification'>
                        <Select placeholder='Select classification' value={classification} onChange={setClassification} optionFilterProp="children">
                            <Select.Option value="short_term">Short Term</Select.Option>
                            <Select.Option value="long_term">Long Term</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row wrap gutter={[24, 24]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Availability" name='availability_id'>
                        <Select placeholder='Select availability'>
                            {/* <Select.Option value="demo">Threat Owner</Select.Option> */}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Integrity" name='integrity_id'>
                        <Select placeholder='Select integrity'>
                            {/* <Select.Option value="demo">Threat Owner</Select.Option> */}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item label='Vulnerability Title' name='vulnerability_title'>
                        <Input.TextArea placeholder='Enter vulnerability title' />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item label='Vulnerability Description' name='vulnerability_description'>
                        <Input.TextArea placeholder='Enter vulnerability description' />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item label='Risk Description' name='risk_description'>
                        <Input.TextArea placeholder='Enter risk description' />
                    </Form.Item>
                </Col>
            </Row>
            {classification == 'short_term' ? (
                <Row wrap gutter={[24, 24]}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form.Item label='Action Item' >
                            {new Array(5).fill(null).map((_, i) => (
                                <Form.Item name={`action_item_${i}`} key={i}>
                                    <Input.TextArea placeholder='Enter action item' />
                                </Form.Item>
                            ))}
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form.Item label='Action Owner' >
                            {new Array(5).fill(null).map((_, i) => (
                                <Form.Item name={`action_owner_${i}`} key={i} style={{ marginBottom: 28, }}>
                                    <Select placeholder='Select owner' style={{ height: 50 }}>
                                        {/* <Select.Option value="demo">Threat Owner</Select.Option> */}
                                    </Select>
                                </Form.Item>
                            ))}
                        </Form.Item>
                    </Col>
                </Row>
            ) : null}
            <hr />
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item label='Other Remarks'>
                        {/* TODO */}
                        Upload Documents
                    </Form.Item>
                </Col>
            </Row>
            <Button variant='danger'>Cancel</Button>
            <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    </>
    // <Form onSubmit={onSubmit}>


    {/* <hr /> */ }
    {/* <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridOtherRemarks">
                    <Form.Label>Other Remarks</Form.Label>
                    <Form.Group as={Col} xs={6} md={6} controlId="formGridOtherRemarks">
                        <Form.Label>Upload Documents</Form.Label>
                        <FileUpload />
                    </Form.Group>
                </Form.Group>
            </Row> */}
    {/* <Row className="mb-3">
                <FormUrl urls={urls} setUrls={setUrls} />
            </Row> */}
    {/* <ButtonSubmit /> */ }
    // </Form >
}

export default Forms;

// function FormUrl({ urls, setUrls }: { urls: typeof initDataRowState; setUrls: React.Dispatch<React.SetStateAction<{ id: string; url: string; }[]>> }) {
//     const [isModalVisible, setIsModalVisible] = useState(false)
//     const [urlList, setUrlList] = useState<typeof initDataRowState>(initDataRowState)

//     useEffect(() => {
//         if (isModalVisible && urls.length) {
//             setUrlList(urls)
//         } else {
//             setTimeout(() => setUrlList(initDataRowState), 200)
//         }
//     }, [isModalVisible, urls])

//     const addRow = () => setUrlList(prevUrl => [...prevUrl, { ...initDataRowState[0], id: Math.floor(Math.random() * 99999) + '', }])

//     const removeRow = (id: string) => {
//         const updatedRows = urlList.filter((url) => id !== url.id)
//         setUrlList(updatedRows)
//     }

//     const onHide = () => setIsModalVisible(false)


//     return <Form.Group as={Col} controlId="formGridOtherRemarks">
//         <div className='d-flex justify-content-between mb-2'>
//             <Form.Label>Upload URL</Form.Label>
//             <Button variant='primary' onClick={() => setIsModalVisible(true)}>Click to upload url</Button>
//         </div>
//         <Table bordered striped hover className='text-center'>
//             <thead>
//                 <tr>
//                     <th scope="col"></th>
//                     <th scope="col">URL</th>
//                     <th scope="col">Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {urls?.map((d, idx) => (
//                     <tr key={idx}>
//                         <td>{idx + 1}</td>
//                         <td>
//                             <Link to={d.url}>{d.url}</Link>
//                         </td>
//                         <td >
//                             <Button variant='primary' onClick={() => {
//                                 const filteredUrls = urls.filter(u => u.id !== d.id)
//                                 setUrls([...filteredUrls])
//                             }}>Remove</Button>
//                         </td>
//                     </tr>

//                 ))}
//             </tbody>
//         </Table>
//         <Modal
//             aria-labelledby="contained-modal-title-vcenter"
//             show={isModalVisible}
//             onHide={onHide}
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                     Upload URL
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Button variant='primary' className='mb-3' onClick={addRow}>Add Entry</Button>
//                 {urlList.map((url, idx) => <Row className='d-flex align-items-center px-3' key={idx}>
//                     <Form.Group as={Col} controlId="formGridOtherRemarks">
//                         <FloatingLabel
//                             controlId="floatingInput"
//                             label="Add Link"
//                             className="mb-2"

//                         >
//                             <Form.Control type="text" placeholder="name@example.com" value={urlList[idx].url} onChange={(e) => {
//                                 const urls = urlList.map((u) => u.id === url.id ? { ...url, url: e.target.value } : u)
//                                 setUrlList(urls)
//                             }} />
//                         </FloatingLabel>
//                     </Form.Group>
//                     <CloseButton onClick={() => removeRow(url.id)} disabled={urlList.length === 1} />
//                 </Row>
//                 )}
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button variant='primary' onClick={() => {
//                     onHide()
//                     // setTimeout(() => setUrlList(initDataRowState), 500)
//                 }}>Cancel</Button>
//                 <Button
//                     variant='primary'
//                     disabled={Object.values(urlList).map(Object.values).flat().some(u => u === '')}
//                     onClick={() => {
//                         onHide()
//                         setTimeout(() => {
//                             setUrls(urlList)
//                             // setUrlList(initDataRowState)
//                         }, 500)
//                     }}>Upload</Button>
//             </Modal.Footer>
//         </Modal>
//     </Form.Group >
// }

// function ButtonSubmit() {
//     const { pathname } = useLocation()
//     return <div className={`d-flex justify-content-end gap-2`}>
//         <Button variant='danger' title='Close' onClick={() => alert('cancel')}>Cancel</Button>
//         <Button type="submit" variant={pathname.includes('edit') ? 'primary' : 'success'} title={pathname.includes('edit') ? 'Update' : 'Create'} >
//             {pathname.includes('edit') ? 'Update' : 'Submit'}
//         </Button>
//     </div>
// }


// const initDataRowState = [
//     {
//         id: Math.floor(Math.random() * 99999) + '',
//         url: ''
//     }
// ]