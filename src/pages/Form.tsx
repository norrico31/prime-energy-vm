import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Form as BootstrapForm, Modal, FloatingLabel, Table as BootstrapTable, CloseButton, Col as BootstrapCol, Row as BootstrapRow } from 'react-bootstrap'
import { Row, Col, Form, Input, DatePicker, Select, Space } from 'antd'
import { useAuthUser } from '../shared/contexts/AuthUser'
import dayjs, { Dayjs } from 'dayjs'
import { Button, FileUpload } from './components'

import { GET, POST, PUT } from '../shared/utils/fetch'
const { useForm } = Form

type Payload = {
    action_due_date1: string | null
    action_due_date2: string | null
    action_due_date3: string | null
    action_due_date4: string | null
    action_due_date5: string | null
    action_item1: string | null
    action_item2: string | null
    action_item3: string | null
    action_item4: string | null
    action_item5: string | null
    action_owner1: string | null
    action_owner2: string | null
    action_owner3: string | null
    action_owner4: string | null
    action_owner5: string | null
    availability: TAvailability
    date_raised: string
    due_date: string
    equipment: TEquipment
    name: string
    id: string
    integrity: TIntegrity
    is_longterm: string
    reference_no: string
    risk_description: string
    status: TStatus
    threat_owner: TUserOptions
    url: { id: string; url: string }[]
    vulnerability_description: string
    vulnerability_title: string
}

function Forms() {
    const params = useParams()
    const { user } = useAuthUser()
    const navigate = useNavigate()
    const [form] = useForm()
    const [classification, setClassification] = useState<string>('0');
    const [url, setUrls] = useState<typeof initDataRowState>([]);
    const [files, setFiles] = useState<Array<File>>([]);
    // const [equipmentId, setEquipmentId] = useState<string|undefined>(undefined)

    useEffect(() => {
        // if (id === 'create') return
        const controller = new AbortController();
        if (params?.transactionId) {
            (async () => {
                try {
                    const res = await GET<ApiData<TTransaction<Dayjs>>>('/transactions/' + params?.transactionId, controller.signal)
                    form.setFieldsValue({
                        ...res.data,
                        reference_no: res.data?.ref_no,
                        equipment_id: res.data?.equipment.id,
                        status_id: res.data?.status.id,
                        availability_id: res.data?.availability.id,
                        integrity_id: res.data?.integrity.id,
                        date_raised: dayjs(res.data?.date_raised, 'YYYY/MM/DD'),
                        due_date: dayjs(res.data?.due_date, 'YYYY/MM/DD'),
                        equipment_tag: res.data?.equipment.name // MUST CHANGE TO equipment_tag
                    })
                    setUrls(res.data?.url)
                } catch (error) {
                    return error
                }
            })()
        } else {
            (async () => {
                try {
                    const res = await GET<ApiData<TEquipment>>('/equipments/' + params?.equipmentId, controller.signal)
                    console.log('specific equipment: ', res.data)
                    form.setFieldsValue({
                        ...res.data,
                    })
                } catch (error) {
                    return error
                }
            })()
            form.setFieldsValue({
                ...form.getFieldsValue(),
                classification: '0',
                threat_owner: user?.id
            })
        }
        return () => controller.abort()
    }, [form])

    const onFinish = async (values: Record<string, string | number>) => {
        //* edit create endpoint
        const formData = new FormData()
        const objPayload = { ...values, id: params?.transactionId, equipment_id: params?.equipmentId, url: url.map((u) => ({ url: u.url, id: '' })), date_raised: dayjs(values?.date_raised).format('MM-DD-YYYY'), due_date: dayjs(values?.due_date).format('MM-DD-YYYY') }
        if (files.length > 0) {
            for (const k in values) {
                const val = values[k]
                formData.append(k, val !== undefined ? (val + '') : '')
            }
            const blobFile = new Blob(files)
            formData.append('id', params?.equipmentId + '')
            formData.append('file', blobFile)
            formData.append('equipment_id', params?.equipmentId + '')
        }
        const payload = files.length > 0 ? formData : objPayload;
        try {
            const res = params?.transactionId ? PUT<Payload & FormData>('/transactions/' + params?.transactionId, payload as Payload & FormData, { ...(files.length > 0 ? { headers: { enctype: 'multipart/form-data' } } : {}) }) : POST('/transactions', payload, { ...(files.length > 0 ? { headers: { enctype: 'multipart/form-data' } } : {}) })
            const data = await res
            console.log('form data: ', data)
            return res
        } catch (error) {
            return error
        }
    }

    return <>
        <div className={`d-flex justify-content-between`}>
            <Button variant='outline-primary' title='Back to lists' className='mb-4 text-decoration-none' onClick={() => navigate(-1)}>Back to lists</Button>
        </div>
        <Form form={form} name="horizontal_login" onFinish={onFinish} layout='vertical'>
            <Row wrap gutter={[24, 24]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Reference No." name='reference_no'>
                        <Input placeholder="Enter reference no." disabled />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Date Raised (mm/dd/yyyy)" name='date_raised' rules={[{ required: true, message: '' }]}>
                        <DatePicker style={{ width: '100%' }} format='YYYY/MM/DD' />
                    </Form.Item>
                </Col>
            </Row>
            <Row wrap gutter={[24, 24]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Equipment" name='equipment_tag'>
                        <Input disabled />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <FormItemThreatOwner name='threat_owner' />
                </Col>
            </Row>
            <Row wrap gutter={[24, 24]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <FormItemStatuses name='status_id' />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label="Classification" name='is_longterm' rules={[{ required: true, message: '' }]}>
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
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item label='Due Date' name='due_date' >
                        <DatePicker format='YYYY/MM/DD' style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>
            <hr />
            {classification == '0' ? (
                <Row wrap gutter={[24, 24]}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form.Item label='Action Item'>
                            {new Array(5).fill(null).map((_, i) => (
                                <Form.Item name={`action_item${i}`} key={i}>
                                    <Input.TextArea placeholder='Enter action item' />
                                </Form.Item>
                            ))}
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Form.Item label='Action Owner' >
                            {new Array(5).fill(null).map((_, i) => (
                                <Form.Item name={`action_owner${i}`} key={i} style={{ marginBottom: 14, }}>
                                    <Select placeholder='Select owner' style={{ height: 50 }}>
                                        {/* <Select.Option value="demo">Threat Owner</Select.Option> */}
                                    </Select>
                                </Form.Item>
                            ))}
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Form.Item label='Due Date' >
                            {new Array(5).fill(null).map((_, i) => (
                                <Form.Item name={`due_date${i}`} key={i} style={{ marginBottom: 14 }}>
                                    <DatePicker format='YYYY/MM/DD' style={{ height: 50, width: '100%' }} />
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
            <Row justify='end'>
                <Space>
                    <Button variant='danger' title='Cancel' onClick={() => navigate(-1)}>
                        Cancel
                    </Button>
                    <Button type="submit" variant='primary' title='Create' >
                        Submit
                    </Button>
                </Space>
            </Row>
        </Form >
    </>
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

    return <Form.Item label="Status" name={name} rules={[{ required: true, message: '' }]}>
        <Select placeholder='Select Status' optionFilterProp="children" showSearch allowClear>
            {statuses.map((stat) => (
                <Select.Option value={stat.id} key={stat.id}>
                    {stat.name}
                </Select.Option>
            ))}
        </Select>
    </Form.Item>
}

function FormItemThreatOwner({ name }: { name: string }) {
    const [statuses, setStatuses] = useState<TUserOptions[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const res = await GET<ApiData<TUserOptions[]>>('/users/options', controller.signal)
                setStatuses(res.data ?? [])
            } catch (error) {
                return error
            }
        })();
        return () => controller.abort()
    }, [])

    return <Form.Item label="Threat Owner" name={name}>
        <Select placeholder='Select Threat Owner' optionFilterProp="children" showSearch allowClear disabled>
            {statuses.map((stat) => (
                <Select.Option value={stat.id} key={stat.id}>
                    {stat?.label}
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

    return <Form.Item label="Availability" name={name} rules={[{ required: true, message: '' }]}>
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

    return <Form.Item label="Integrity" name={name} rules={[{ required: true, message: '' }]}>
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

const initDataRowState = [
    {
        id: Math.floor(Math.random() * 99999) + '',
        url: ''
    }
]