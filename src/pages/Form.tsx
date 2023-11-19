import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom'
import { Form as BootstrapForm, Modal, FloatingLabel, Table as BootstrapTable, CloseButton, Col as BootstrapCol, Row as BootstrapRow } from 'react-bootstrap'
import { Row, Col, Form, Input, DatePicker, Select } from 'antd'
import { Button, FileUpload } from './components';

import { GET, POST, PUT } from '../shared/utils/fetch'
const { useForm } = Form

// WHERE SHUOLD I GET THREAT OWNER
// PROPERTY FOR UPLOADING FILES

function Forms() {
    const params = useParams()
    const navigate = useNavigate()
    const [form] = useForm()
    const [classification, setClassification] = useState<string>('0');
    const [url, setUrls] = useState<typeof initDataRowState>([]);
    const [files, setFiles] = useState<Array<File>>([]);

    useEffect(() => {
        // if (id === 'create') return
        const controller = new AbortController();
        if (!params?.transactionId) return
        (async () => {
            try {
                const res = await GET<ApiSuccess<TLocation[]>>('/transactions/' + params?.equipmentId, controller.signal)
                console.log(res)
            } catch (error) {
                return error
            }
        })()
        form.setFieldsValue({
            ...form.getFieldsValue(),
            classification: '0'
        })
        return () => controller.abort()
    }, [])

    const onFinish = (values: Record<string, string | number>) => {
        console.log({ ...values, url: url.map((u) => ({ url: u.url, id: '' })), files })
        // use new FormData for upload docs
        // edit create endpoint
    }

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
                    <FormItemEquipment name='equipment_id' />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Threat Owner" name='threat_owner'>
                        <Select placeholder='Select threat owner'>
                            {/* <Select.Option value="demo">Threat Owner</Select.Option> */}
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row wrap gutter={[24, 24]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <FormItemStatuses name='status_id' />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Classification" name='is_longterm'>
                        <Select placeholder='Select classification' value={classification} onChange={setClassification} optionFilterProp="children">
                            <Select.Option value="0">Short Term</Select.Option>
                            <Select.Option value="1">Long Term</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row wrap gutter={[24, 24]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <FormItemAvailability name='availability_id' />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <FormItemIntegrity name='integrity_id' />
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
            <Row wrap gutter={[24, 24]} style={{ marginBottom: 20 }}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Due Date (mm/dd/yyyy)" name='due_date'>
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>
            {classification == '0' ? (
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
                                <Form.Item name={`action_owner_${i}`} key={i} style={{ marginBottom: 14, }}>
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
            <BootstrapRow className="mb-3">
                <BootstrapForm.Group as={Col} controlId="formGridOtherRemarks">
                    <BootstrapForm.Label>Other Remarks</BootstrapForm.Label>
                    <BootstrapForm.Group as={Col} xs={10} controlId="formGridOtherRemarks">
                        <BootstrapForm.Label>Upload Documents</BootstrapForm.Label>
                        <FileUpload
                            files={files}
                            setFiles={setFiles}
                        />
                    </BootstrapForm.Group>
                </BootstrapForm.Group>
            </BootstrapRow>
            <Row className="mb-3">
                <FormUrl url={url} setUrls={setUrls} />
            </Row>
            <ButtonSubmit />
        </Form>
    </>
}

function FormItemEquipment({ name }: { name: string }) {
    let { pathname } = useLocation()
    pathname = pathname.split('/')[1].toLowerCase()
    // eslint-disable-next-line prefer-const
    let [equipments, setEquipments] = useState<TEquipment[]>([]);
    equipments = equipments.filter((e) => e.system.name.toLocaleLowerCase() === pathname)

    useEffect(() => {
        // if (id === 'create') return
        const controller = new AbortController();
        (async () => {
            try {
                const res = await GET<ApiSuccess<TEquipment[]>>('/equipments', controller.signal)
                setEquipments(res.data.data ?? [])
            } catch (error) {
                return error
            }
        })();
        return () => controller.abort()
    }, [])

    return <Form.Item label="Equipment" name={name}>
        <Select placeholder='Select Equipment' optionFilterProp="children" showSearch allowClear>
            {equipments.map((eq) => (
                <Select.Option value={eq.id} key={eq.id}>
                    {eq.name} - {eq.system?.name}
                </Select.Option>
            ))}
        </Select>
    </Form.Item>
}

function FormItemStatuses({ name }: { name: string }) {
    const [statuses, setStatuses] = useState<TStatus[]>([]);

    useEffect(() => {
        // if (id === 'create') return
        const controller = new AbortController();
        (async () => {
            try {
                const res = await GET<ApiSuccess<TStatus[]>>('/statuses', controller.signal)
                setStatuses(res.data.data ?? [])
            } catch (error) {
                return error
            }
        })();
        return () => controller.abort()
    }, [])

    return <Form.Item label="Status" name={name}>
        <Select placeholder='Select Status' optionFilterProp="children" showSearch allowClear>
            {statuses.map((stat) => (
                <Select.Option value={stat.id} key={stat.id}>
                    {stat.name}
                </Select.Option>
            ))}
        </Select>
    </Form.Item>
}

function FormItemAvailability({ name }: { name: string }) {
    const [availabilities, setAvailabilities] = useState<TAvailability[]>([]);

    useEffect(() => {
        // if (id === 'create') return
        const controller = new AbortController();
        (async () => {
            try {
                const res = await GET<ApiSuccess<TAvailability[]>>('/availability', controller.signal)
                setAvailabilities(res.data.data ?? [])
            } catch (error) {
                return error
            }
        })();
        return () => controller.abort()
    }, [])

    return <Form.Item label="Availability" name={name}>
        <Select placeholder='Select Availability' optionFilterProp="children" showSearch allowClear>
            {availabilities.map((stat) => (
                <Select.Option value={stat.id} key={stat.id}>
                    {stat.name}
                </Select.Option>
            ))}
        </Select>
    </Form.Item>
}

function FormItemIntegrity({ name }: { name: string }) {
    const [integrities, setIntegrities] = useState<TIntegrity[]>([]);

    useEffect(() => {
        // if (id === 'create') return
        const controller = new AbortController();
        (async () => {
            try {
                const res = await GET<ApiSuccess<TIntegrity[]>>('/integrity', controller.signal)
                setIntegrities(res.data.data ?? [])
            } catch (error) {
                return error
            }
        })();
        return () => controller.abort()
    }, [])

    return <Form.Item label="Integrity" name={name}>
        <Select placeholder='Select Integrity' optionFilterProp="children" showSearch allowClear>
            {integrities.map((stat) => (
                <Select.Option value={stat.id} key={stat.id}>
                    {stat.name}
                </Select.Option>
            ))}
        </Select>
    </Form.Item>
}

export default Forms;

function FormUrl({ url, setUrls }: { url: typeof initDataRowState; setUrls: React.Dispatch<React.SetStateAction<{ id: string; url: string; }[]>> }) {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [urlList, setUrlList] = useState<typeof initDataRowState>(initDataRowState)

    useEffect(() => {
        if (isModalVisible && url.length) {
            setUrlList(url)
        } else {
            setTimeout(() => setUrlList(initDataRowState), 200)
        }
    }, [isModalVisible, url])

    const addRow = () => setUrlList(prevUrl => [...prevUrl, { ...initDataRowState[0], id: Math.floor(Math.random() * 99999) + '', }])

    const removeRow = (id: string) => {
        const updatedRows = urlList.filter((url) => id !== url.id)
        setUrlList(updatedRows)
    }

    const onHide = () => setIsModalVisible(false)

    return <BootstrapForm.Group as={BootstrapCol} controlId="formGridOtherRemarks">
        <div className='d-flex justify-content-between mb-2'>
            <BootstrapForm.Label>Upload URL</BootstrapForm.Label>
            <Button variant='primary' onClick={() => setIsModalVisible(true)}>Click to upload url</Button>
        </div>
        <BootstrapTable bordered striped hover className='text-center'>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">URL</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {url?.map((d, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>
                            <Link to={d.url}>{d.url}</Link>
                        </td>
                        <td >
                            <Button variant='primary' onClick={() => {
                                const filteredUrls = url.filter(u => u.id !== d.id)
                                setUrls([...filteredUrls])
                            }}>Remove</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </BootstrapTable>
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
                    <BootstrapForm.Group as={BootstrapCol} controlId="formGridOtherRemarks">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Add Link"
                            className="mb-2"
                        >
                            <BootstrapForm.Control type="text" placeholder="name@example.com" value={urlList[idx].url} onChange={(e) => {
                                const urls = urlList.map((u) => u.id === url.id ? { ...url, url: e.target.value } : u)
                                setUrlList(urls)
                            }} />
                        </FloatingLabel>
                    </BootstrapForm.Group>
                    <CloseButton style={{ marginLeft: 10 }} onClick={() => removeRow(url.id)} disabled={urlList.length === 1} />
                </Row>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={() => {
                    onHide()
                }}>Cancel</Button>
                <Button
                    variant='primary'
                    disabled={Object.values(urlList).map(Object.values).flat().some(u => u === '')}
                    onClick={() => {
                        onHide()
                        setTimeout(() => setUrls(urlList), 300)
                    }}>Upload</Button>
            </Modal.Footer>
        </Modal>
    </BootstrapForm.Group >
}

function ButtonSubmit() {
    const { pathname } = useLocation()
    return <div className={`d-flex justify-content-end gap-2`}>
        <Button variant='danger' title='Close' onClick={() => alert('cancel')}>Cancel</Button>
        <Button type="submit" variant={pathname.includes('edit') ? 'primary' : 'success'} title={pathname.includes('edit') ? 'Update' : 'Create'} >
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