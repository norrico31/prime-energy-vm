import { Fragment, useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Form as BootstrapForm, Modal, FloatingLabel, Table as BootstrapTable, CloseButton, Col as BootstrapCol, Row as BootstrapRow } from 'react-bootstrap'
import { Row, Col, Form, Input, DatePicker, Select, Space, Skeleton, Collapse, CollapseProps } from 'antd'
import { useAuthUser } from '../shared/contexts/AuthUser'
import dayjs, { Dayjs } from 'dayjs'
import { Button, FileUpload, PageHeading } from './components'

import { GET, POST, PUT } from '../shared/utils/fetch'
import { firstLetterCapitalize } from '../shared/utils'
const { useForm } = Form

type Payload = {
    availability: TAvailability
    classification: string
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
    vulnerability_description: string
    vulnerability_title: string
    actions: Actions
    url: TTransactionUrls
}

type Actions = { id: string; action_owner: string; action_due_date: Dayjs | string; action_item: string }[]

const initActionsState: Actions = [
    {
        id: '',
        action_owner: '',
        action_due_date: '',
        action_item: ''
    }
]

function Forms() {
    const params = useParams()
    const { user } = useAuthUser()
    const navigate = useNavigate()
    const [form] = useForm()
    const [classification, setClassification] = useState<string>('0');
    const [url, setUrls] = useState<typeof initDataRowState>([]);
    const [files, setFiles] = useState<Array<File>>([]);
    const [actions, setActions] = useState<Actions>(initActionsState)
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
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
                        equipment_tag: res.data?.equipment.name,
                        threat_owner: res?.data?.threat_owner?.id,
                    })
                    setTitle(res?.data?.equipment?.name)
                    setUrls(res.data?.url)
                    setClassification(res?.data?.is_longterm)
                    const actionsFromServer = res?.data.actions.map((a) => ({ ...a, action_owner: a.action_owner.id })) as Actions
                    setActions(actionsFromServer)
                } catch (error) {
                    return error
                } finally {
                    setLoading(false)
                }
            })()
        } else {
            (async () => {
                try {
                    const res = await GET<ApiData<TEquipment>>('/equipments/' + params?.equipmentId, controller.signal)
                    setTitle(res?.data?.system?.name)
                    form.setFieldsValue({
                        ...res.data,
                        is_longterm: '0',
                        threat_owner: user?.id
                    })
                    setClassification('0')
                } catch (error) {
                    return error
                } finally {
                    setLoading(false)
                }
            })()
        }
        return () => controller.abort()
    }, [form])

    const addRowActionItem = () => {
        setActions([...actions, { ...initActionsState[0], id: Math.floor(Math.random() * 9999) + '' }])
    }

    const actionThreaOwnerChange = (id: string, v: string) => {
        if (!v) return
        const updatedActionOwner = actions.map(a => a.id === id ? { ...a, action_owner: v } : a)
        setActions(updatedActionOwner)
    }

    const actionItemChange = (id: string, v: string) => {
        if (!v) return
        const updatedActionOwner = actions.map(a => a.id === id ? { ...a, action_item: v } : a)
        setActions(updatedActionOwner)
    }

    const actionDueDateChange = (id: string, v: string) => {
        if (!v) return
        const updatedActionOwner = actions.map(a => a.id === id ? { ...a, action_due_date: v } : a)
        setActions(updatedActionOwner)
    }

    const onFinish = async (values: Record<string, string | number>) => {
        const formData = new FormData()
        const objPayload = {
            ...values,
            id: params?.transactionId,
            equipment_id:
                params?.equipmentId,
            url: url.map((u) => ({ ...u, id: params?.transactionId ? u.id : '' })),
            date_raised: dayjs(values?.date_raised).format('MM-DD-YYYY'),
            due_date: dayjs(values?.due_date).format('MM-DD-YYYY'),
            actions: actions.map((a) => ({ ...a, id: params?.transactionId ? a.id : '' })),
        }
        if (files.length > 0) {
            for (const k in values) {
                const val = values[k]
                formData.append(k, val !== undefined ? (val + '') : '')
            }
            const blobFile = new Blob(files)
            formData.append('id', params?.equipmentId + '')
            formData.append('file', blobFile)
            formData.append('equipment_id', params?.equipmentId + '')
            formData.append('_method', 'PUT')
        }
        const payload = files.length > 0 ? formData : objPayload;
        try {
            const res = params?.transactionId ? PUT<Payload & FormData>('/transactions/', payload as Payload & FormData, { ...(files.length > 0 ? { headers: { enctype: 'multipart/form-data' } } : {}) }) : POST('/transactions', payload, { ...(files.length > 0 ? { headers: { enctype: 'multipart/form-data' } } : {}) })
            const data = await res
            navigate(-1)
            return data
        } catch (error) {
            return error
        }
    }

    return loading ? <Skeleton /> :
        <>
            <PageHeading title={title} onClick={() => alert('print report critical')} />
            <Form form={form} name="horizontal_login" onFinish={onFinish} layout='vertical'>
                <Row wrap gutter={[24, 24]}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form.Item label="Reference No." name='reference_no'>
                            <Input placeholder="Enter reference no." disabled />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form.Item label="Date Raised (yyyy/dd/mm)" name='date_raised' rules={[{ required: true, message: '' }]}>
                            <DatePicker style={{ width: '100%' }} format='YYYY/DD/MM' />
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
                        <FormItemThreatOwner name='threat_owner' label='Threat Owner' isDisabled />
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
                        <Form.Item label='Due Date (yyyy/dd/mm)' name='due_date' >
                            <DatePicker format='YYYY/DD/MM' style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <hr />
                {classification == '0' ? (
                    actions.map((a, idx) => (
                        <Fragment key={idx}>
                            <Row wrap gutter={[24, 24]}>
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item label='Action Item'>
                                        <Form.Item >
                                            <Input.TextArea placeholder='Enter action item' value={actions[idx].action_item!} onChange={e => actionItemChange(a.id!, e.target.value)} />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                    <ActionThreatOwner value={actions[idx].action_owner!} onChange={v => actionThreaOwnerChange(a.id!, v)} />
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                    <Form.Item label='Due Date' >
                                        <Form.Item style={{ marginBottom: 14 }}>
                                            <DatePicker format='YYYY/MM/DD' style={{ height: 50, width: '100%' }}
                                                value={actions[idx].action_due_date ? dayjs(actions[idx].action_due_date) : null}
                                                onChange={v => actionDueDateChange(a.id!, dayjs(v).format('YYYY/MM/DD'))}
                                            />
                                        </Form.Item>
                                    </Form.Item>
                                </Col>
                            </Row>
                            {idx === (actions.length - 1) && (
                                <>
                                    <Button variant='primary' onClick={addRowActionItem}>Add Action Item</Button>
                                    <hr />
                                </>

                            )}
                        </Fragment>
                    ))
                ) : null}
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
                <Row justify='center' className='mb-3'>
                    <Space>
                        <Button variant='danger' title='Close' onClick={() => {
                            form.setFieldsValue(undefined)
                            navigate(-1)
                        }}>
                            Close
                        </Button>
                        <Button type="submit" variant='primary' title='Create' >
                            Submit
                        </Button>
                    </Space>
                </Row>
            </Form >
            {params.transactionId && (
                <HistoryLogs transactionId={params.transactionId!} />
            )}
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
        <Select placeholder='Select Status' optionFilterProp="children" showSearch allowClear >
            {statuses.map((stat) => (
                <Select.Option value={stat.id} key={stat.id}>
                    {stat.name}
                </Select.Option>
            ))}
        </Select>
    </Form.Item>
}

function ActionThreatOwner({ value, onChange }: { value: string; onChange: (v: string) => void }) {
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

    return <Form.Item label='Threat Owner' style={{ marginBottom: 14 }}>
        <Select placeholder='Select Threat Owner' optionFilterProp="children" showSearch allowClear style={{ height: 50 }} value={value} onChange={onChange}>
            {statuses.map((stat) => (
                <Select.Option value={stat.id} key={stat.id}>
                    {stat?.label}
                </Select.Option>
            ))}
        </Select>
    </Form.Item>
}

function FormItemThreatOwner({ name, label, isDisabled }: { name: string; label: string; isDisabled?: boolean }) {
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

    return <Form.Item label={isDisabled ? label : undefined} name={name} style={{ marginBottom: !isDisabled ? 14 : undefined, }}>
        <Select placeholder={`Select ${label}`} optionFilterProp="children" showSearch allowClear disabled={isDisabled} style={{ height: !isDisabled ? 50 : undefined }}>
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

function FormUrl({ url, setUrls }: { url: typeof initDataRowState; setUrls: React.Dispatch<React.SetStateAction<{ id: string; url: string; description: string; }[]>> }) {
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
                    <th scope="col">Description</th>
                    <th scope="col">URL</th>
                    <th scope="col" colSpan={0}>Action</th>
                </tr>
            </thead>
            <tbody>
                {url?.map((d, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td style={{ width: 400 }}>
                            {d.description}
                        </td>
                        <td>
                            <Link target="_blank" to={'https://' + d.url} >{d.url}</Link>
                        </td>
                        <td>
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
            size='lg'
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Upload URL
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Button variant='primary' className='mb-3' onClick={addRow}>Add Entry</Button>
                {urlList.map((url, idx) => <Row className='d-flex align-items-center p-0 gap-1' key={idx}>
                    <BootstrapForm.Group as={BootstrapCol} controlId="formGridOtherRemarks">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Enter Description"
                            className="mb-2"
                        >
                            <BootstrapForm.Control type="text" as='textarea' style={{ height: 100 }} placeholder="name@example.com" value={urlList[idx].description} onChange={(e) => {
                                const urls = urlList.map((u) => u.id === url.id ? { ...url, description: e.target.value } : u)
                                setUrlList(urls)
                            }} />
                        </FloatingLabel>
                    </BootstrapForm.Group>
                    <BootstrapForm.Group as={BootstrapCol} controlId="formGridOtherRemarks">
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Enter Link"
                            className="mb-2"
                        >
                            <BootstrapForm.Control type="text" placeholder="name@example.com" style={{ height: 100 }} value={urlList[idx].url} onChange={(e) => {
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

function HistoryLogs({ transactionId }: { transactionId: string }) {
    const [histories, setHistories] = useState<TTransactionHistory[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        if (!transactionId) return;
        const controller = new AbortController();
        (async () => {
            try {
                const res = await GET<ApiSuccess<TTransactionHistory[]>>('/transactions/history?transaction_id=' + transactionId, controller.signal)
                setHistories(res.data.data)
            } catch (error) {
                return error
            } finally {
                setLoading(false)
            }
        })()

        return () => {
            controller.abort()
        }
    }, [transactionId]);
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'History Logs',
            children: <BootstrapTable bordered striped hover className='text-center'>
                <thead>
                    <tr>
                        <th scope="col">Ref No.</th>
                        <th scope="col">Actor</th>
                        <th scope="col">Action</th>
                        <th scope="col">Properties</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {(histories ?? []).map((history) => (
                        <tr key={history?.id}>
                            <td>{history?.transaction.ref_no}</td>
                            <td>{history?.actor.label}</td>
                            <td>{history?.action}</td>
                            <td>{(history?.properties?.attributes && typeof history?.properties?.attributes === 'object') ? Object?.entries?.(history?.properties?.attributes)?.map?.(([k, v], idx) => {
                                if (k === 'id' || k === 'is_longterm' || [
                                    'action_item1',
                                    'action_item2',
                                    'action_item3',
                                    'action_item4',
                                    'action_item5',
                                    'action_owner1',
                                    'action_owner2',
                                    'action_owner3',
                                    'action_owner4',
                                    'action_owner5',
                                    'action_due_date1',
                                    'action_due_date2',
                                    'action_due_date3',
                                    'action_due_date4',
                                    'action_due_date5',
                                ]?.includes(k)) return
                                const el = Array.isArray(v) ? v?.map(Object.entries).map(([arrK, arrV], index) => {
                                    const key = firstLetterCapitalize(arrK as unknown as string)
                                    return (
                                        <div key={index}>
                                            <b>{key}</b> - {arrV === null ? 'N/A' : arrV}
                                        </div>
                                    )
                                }) : (v !== null && typeof v === 'object') ? Object?.entries?.(v)?.map?.(([objK, objV], i) => {
                                    if (objK === 'id') return
                                    return (
                                        <div key={i}>
                                            <b>{firstLetterCapitalize(objK)}</b> - {objV === null ? 'N/A' : objV}
                                        </div>
                                    )
                                }) : (
                                    <div>
                                        <b>{firstLetterCapitalize(k.split('_').join(' '))}</b> - {v === null ? 'N/A' : v}
                                    </div>
                                );
                                return (
                                    <div key={idx}>
                                        {el}
                                    </div>
                                )
                            }) : null}</td>
                            <td>{history?.date}</td>
                        </tr>
                    ))}
                </tbody>
            </BootstrapTable>,
        },
    ];

    return loading ? <Skeleton /> : <Collapse accordion items={items} />;
}

const initDataRowState = [
    {
        id: Math.floor(Math.random() * 99999) + '',
        description: '',
        url: ''
    }
]