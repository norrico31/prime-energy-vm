/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Form as BootstrapForm, Modal, FloatingLabel, Table as BootstrapTable, CloseButton, Col as BootstrapCol, Row as BootstrapRow } from 'react-bootstrap'
import { Row, Col, Form, Input, DatePicker, Select, Space, Skeleton, Collapse, CollapseProps } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import { useAuthUser } from '../shared/contexts/AuthUser'
import { Button, FileUpload, PageHeading } from './components'
import axios from 'axios'
import { GET } from '../shared/utils/fetch'
import { firstLetterCapitalize } from '../shared/utils'

const { useForm } = Form

type Actions = { id: string; action_owner: string; action_due_date?: Dayjs | string; action_item: string }

const initActionsState: Actions[] = [
    {
        id: '',
        action_owner: '',
        action_due_date: '',
        action_item: ''
    }
]

function Forms() {
    const params = useParams()
    const { user, mapPermission, token } = useAuthUser()
    const navigate = useNavigate()
    const [form] = useForm()
    const [classification, setClassification] = useState<string>('0');
    const [url, setUrls] = useState<typeof initDataRowState>([]);
    const [files, setFiles] = useState<Array<TTransactionFile>>([]);
    const [actions, setActions] = useState<Actions[]>(initActionsState)
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const isDisabledAddActionItmBtn = actions.map(({ id, ...restProps }) => Object.values(restProps)).flat().some((v) => v === '' || v === undefined)
    const hasUserEdit = mapPermission.has('Transactions Management - Allow Edit')

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        if (!user) return
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
                    setFiles(res?.data?.files ?? [])
                    setTitle(res?.data?.equipment?.name)
                    setUrls(res.data?.url)
                    setClassification(res?.data?.is_longterm)
                    const actionsFromServer = res?.data.actions.map((a) => ({ ...a, action_owner: a.action_owner.id })) as Actions[]
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
    }, [form, user])

    const addRowActionItem = () => {
        setActions([...actions, { ...initActionsState[0], id: '' }])
    }

    const actionRowChange = (data: Actions, idx: number) => {
        if (!data) return
        const newDataCols = actions.map((d, i) => idx === i ? { ...data } : d)
        setActions(newDataCols)
    }

    const onFinish = async (values: Record<string, string | number>) => {
        const formData = new FormData()
        const objPayload: Record<string, unknown> = {
            ...values,
            id: params?.transactionId,
            equipment_id: params?.equipmentId,
            date_raised: dayjs(values?.date_raised).format('MM-DD-YYYY'),
            due_date: dayjs(values?.due_date).format('MM-DD-YYYY'),
        }
        for (const k in objPayload) {
            const val = objPayload[k]
            formData.append(k, val !== undefined ? (val + '') : '')
            if (k === 'files') continue
        }
        if (files.length) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i] as unknown as TTransactionFile
                if (file?.id) {
                    formData.append(`files[${i}][id]`, file?.id as string)
                } else {
                    formData.append(`files[${i}][id]`, '')
                }
                formData.append(`files[${i}][file]`, file as unknown as Blob)
            }
        }
        if (url.length) {
            for (let i = 0; i < url.length; i++) {
                const d = url[i]
                formData.append(`url[${i}][url]`, d.url)
                formData.append(`url[${i}][description]`, d.description)
                formData.append(`url[${i}][id]`, '')
            }
        }
        if (actions.map(({ id: _, ...restProps }) => Object.values(restProps))[0].some((d) => d !== '' || d !== undefined)) {
            for (let i = 0; i < actions.length; i++) {
                const action = actions[i]
                formData.append(`actions[${i}][id]`, '')
                formData.append(`actions[${i}][action_owner]`, action.action_owner + '')
                formData.append(`actions[${i}][action_due_date]`, action.action_due_date + '')
                formData.append(`actions[${i}][action_item]`, action.action_item)
            }
        }
        if (params?.transactionId && files.length) formData.append('_method', 'PUT')
        const id = params?.transactionId ? params?.transactionId : params?.equipmentId
        const payload = files.length ? formData : { ...objPayload, actions, url: url.map((u) => ({ ...u, id: params?.transactionId ? u.id : '' })) }
        try {
            const res = (params?.transactionId && files.length) ? axios.post('https://vms.redcoresolutions.com/core/api/v1/transactions/' + id, payload as typeof payload, { headers: { 'Authorization': 'Bearer ' + token } }) : params?.transactionId && files.length ? axios.put('https://vms.redcoresolutions.com/core/api/v1/transactions/' + id, payload as typeof payload, { headers: { 'Authorization': 'Bearer ' + token } }) : axios.post('https://vms.redcoresolutions.com/core/api/v1/transactions/', payload, { headers: { 'Authorization': 'Bearer ' + token } })
            const data = await res
            navigate(-1)
            return data
        } catch (error) {
            return error
        }
    }

    if (!loading && !hasUserEdit) {
        navigate(-1)
        return null
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
                    actions.map((a, idx) => <ActionItem
                        key={idx}
                        action={a}
                        actionRowChange={(v) => actionRowChange(v, idx)}
                        isShowActionAddItem={idx === actions.length - 1}
                        addRowActionItem={addRowActionItem}
                        isDisabledAddActionItmBtn={isDisabledAddActionItmBtn}
                    />)
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

function ActionItem({ action, actionRowChange, isShowActionAddItem, addRowActionItem, isDisabledAddActionItmBtn }: { action: Actions; actionRowChange: (d: Actions) => void; isShowActionAddItem: boolean; addRowActionItem: () => void; isDisabledAddActionItmBtn: boolean }) {
    const [actionItem, setActionItem] = useState(action)
    useEffect(() => actionRowChange(actionItem), [actionItem])
    return <Fragment>
        <Row wrap gutter={[24, 24]}>
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Form.Item label='Action Item'>
                    <Form.Item >
                        <Input.TextArea placeholder='Enter action item' value={actionItem.action_item!} onChange={e => setActionItem({ ...actionItem, action_item: e.target.value })} />
                    </Form.Item>
                </Form.Item>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <ActionThreatOwner value={actionItem.action_owner!} onChange={v => setActionItem({ ...actionItem, action_owner: v })} />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                <Form.Item label='Due Date' >
                    <Form.Item style={{ marginBottom: 14 }}>
                        <DatePicker format='YYYY/MM/DD' style={{ height: 50, width: '100%' }}
                            value={actionItem.action_due_date ? dayjs(actionItem.action_due_date) : undefined}
                            onChange={v => setActionItem({ ...actionItem, action_due_date: !v ? undefined : dayjs(v).format('YYYY/MM/DD') })!}
                        />
                    </Form.Item>
                </Form.Item>
            </Col>
        </Row>
        {isShowActionAddItem && (
            <>
                <Button variant='primary' disabled={isDisabledAddActionItmBtn} onClick={addRowActionItem}>Add Action Item</Button>
                <hr />
            </>

        )}
    </Fragment>
}

function FormItemStatuses({ name }: { name: string }) {
    const [statuses, setStatuses] = useState<TStatus[]>([]);

    useEffect(() => {
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

    return <Form.Item label='Action Owner' style={{ marginBottom: 14 }}>
        <Select placeholder='Select Action Owner' optionFilterProp="children" showSearch allowClear style={{ height: 50 }} value={value} onChange={onChange}>
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
        setUrlList(url.length ? url : initDataRowState)
    }, [url])

    const addRow = () => setUrlList([...urlList, { ...initDataRowState[0], id: '' }])

    const removeRowInModal = (idx: number) => {
        const filteredUrls = [...urlList]
        filteredUrls.splice(idx, 1)
        setUrlList([...filteredUrls])
    }

    const dataUrlChange = (d: typeof initDataRowState[0], idx: number) => {
        if (!d && !idx) return
        const updatedUrls = urlList.map((data, i) => i === idx ? { ...d } : data)
        setUrlList(updatedUrls)
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
                            <Button variant='primary' onClick={(e) => {
                                e.stopPropagation()
                                const filteredUrls = [...urlList]
                                filteredUrls.splice(idx, 1)
                                setUrls(filteredUrls)
                                setUrlList(filteredUrls)
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
                {urlList.map((url, idx) => <ModalBodyUrl key={idx} url={url} isDisabledRemoveBtn={urlList.length === 1} removeRowInModal={() => removeRowInModal(idx)} dataUrlChange={(d) => dataUrlChange(d, idx)} />
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={() => {
                    onHide()
                }}>Cancel</Button>
                <Button
                    variant='primary'
                    disabled={Object.values(urlList).map(({ id: _, ...restProps }) => Object.values(restProps)).flat().some(u => u === '')}
                    onClick={() => {
                        onHide()
                        setTimeout(() => setUrls(urlList), 300)
                    }}>Upload</Button>
            </Modal.Footer>
        </Modal>
    </BootstrapForm.Group >
}

function ModalBodyUrl({ url, isDisabledRemoveBtn, removeRowInModal, dataUrlChange }: { url: typeof initDataRowState[0]; isDisabledRemoveBtn: boolean; removeRowInModal: () => void; dataUrlChange: (d: typeof initDataRowState[0]) => void }) {
    const [dataUrl, setDataUrl] = useState(url);
    useEffect(() => dataUrlChange(dataUrl), [dataUrl]);
    return <Row className='d-flex align-items-center p-0 gap-1'>
        <BootstrapForm.Group as={BootstrapCol} controlId="formGridOtherRemarks">
            <FloatingLabel
                controlId="floatingInput"
                label="Enter Description"
                className="mb-2"
            >
                <BootstrapForm.Control type="text" as='textarea' style={{ height: 100 }} placeholder="name@example.com" value={dataUrl.description} onChange={(e) => setDataUrl({ ...dataUrl, description: e.target.value })} />
            </FloatingLabel>
        </BootstrapForm.Group>
        <BootstrapForm.Group as={BootstrapCol} controlId="formGridOtherRemarks">
            <FloatingLabel
                controlId="floatingInput"
                label="Enter Link"
                className="mb-2"
            >
                <BootstrapForm.Control type="text" placeholder="name@example.com" style={{ height: 100 }} value={dataUrl.url} onChange={(e) => setDataUrl({ ...dataUrl, url: e.target.value })} />
            </FloatingLabel>
        </BootstrapForm.Group>
        <CloseButton style={{ marginLeft: 10 }} onClick={(e) => {
            e.stopPropagation()
            removeRowInModal()
        }} disabled={isDisabledRemoveBtn} />
    </Row>
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
        id: '',
        description: '',
        url: ''
    }
]