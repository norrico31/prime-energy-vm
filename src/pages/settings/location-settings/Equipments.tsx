import { useEffect, useState } from 'react'
import { Input, Select, Row, Col, Space, Switch, Modal, Form } from 'antd';
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';
import { Table, ButtonActions, Button } from '../../components';

import { GET, POST, PUT, DELETE } from '../../../shared/utils/fetch'
import { ColumnsType } from 'antd/es/table';
import { FormItemLocation, FormItemSystem } from './Systems';

export default function Equipments() {
    const [search, searchVal, inputChange] = useDebounceSearch()
    const [isModalShow, setIsModalShow] = useState(false);
    const [selectedData, setSelectedData] = useState<TSystems | undefined>(undefined);
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TSystems[]>([])


    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal)
        return () => controller.abort()
    }, [search])

    async function fetchData(signal?: AbortSignal, params?: ApiParams) {
        setLoading(true)
        try {
            const res = await GET<ApiSuccess<TSystems[]>>('/equipments', signal!, params)
            setDataSource(res.data.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    const columns: ColumnsType<TSystems> = [
        {
            title: 'Equipment',
            dataIndex: 'name',
            key: 'name',
            // width: 120
        },
        // {
        //     title: 'System',
        //     dataIndex: 'system_id',
        //     key: 'system_id',
        //     render: (_, rec) => rec.
        //     // width: 120
        // },
        {
            title: 'Location',
            dataIndex: 'location_name',
            key: 'name',
            render: (_, rec) => rec.site?.name,
            // width: 120
        },
        {
            title: 'Sequence No.',
            dataIndex: 'sequence_no',
            key: 'sequence_no',
            align: 'center',
            // width: 130
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            // width: 200,
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <Space>
                    <div></div>
                    <ButtonActions
                        loading={loading}
                        editData={() => {
                            setIsModalShow(true)
                            setSelectedData(record)
                        }}
                        deleteData={() => DELETE('/systems/' + record.id).finally((fetchData))}
                        dataTitle={record.name}
                        dataDescription={record.description!}
                    />
                </Space>
            ),
        },
    ]

    const onCancel = () => {
        setIsModalShow(false)
        setSelectedData(undefined)
    }


    return (
        <>
            <h3 className='text-color-gray mb-2'>Equipments Management</h3>
            <Row wrap justify='space-between' style={{ marginBottom: 10 }}>
                <Col xs={12} sm={12} md={12} lg={8}>
                    {/* <PageSize value={pageSize} onChange={pageSizeChange} /> */}
                    <Input.Search type="text" placeholder="Search..." value={searchVal} onChange={inputChange} style={{ borderRadius: 0 }} />
                </Col>
                <Col className='d-flex justify-content-end align-items-center'>
                    <Button variant='success' title='Create' onClick={() => setIsModalShow(true)}>Create</Button>
                </Col>
            </Row>
            <Table<TSystems> loading={loading} columns={columns} dataSource={dataSource} isSizeChanger />
            <ModalInput open={isModalShow} onCancel={onCancel} selectedData={selectedData} fetchData={fetchData} />
        </>
    )
}


type ModalProps = {
    open: boolean;
    onCancel: () => void
    fetchData(signal?: AbortSignal): Promise<unknown>
    selectedData?: TSystems
}

type Payload = {
    name: string
    site_id: string
    sequence_no: number
    description: string
    is_active: number
}


function ModalInput({ open, onCancel, selectedData, fetchData }: ModalProps) {
    const [form] = Form.useForm<Payload>()
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (open) {
            if (selectedData) {
                form.setFieldsValue({ ...selectedData, site_id: selectedData?.site?.id, is_active: Number(selectedData?.is_active) ? 1 : 0 })
            } else {
                form.resetFields()
            }
        }
    }, [selectedData, open])

    const onFinish = (v: Payload) => {
        setLoading(true)
        const result = !selectedData ? POST<Payload, ApiSuccess<TSystems>>('/equipments/', { ...v, is_active: v.is_active ? 1 : 0 }) : PUT<Payload, ApiSuccess<TSystems>>('/equipments/' + selectedData.id, { ...v, is_active: v.is_active ? 1 : 0 });
        result.then(() => {
            setError(undefined)
            form.resetFields()
            onCancel()
        })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                fetchData()
                setLoading(false)
            })
    }

    return <Modal open={open} onCancel={onCancel} footer={null} title={`Equipment - ${selectedData ? 'Edit' : 'Create'}`} forceRender>
        <Form form={form} onFinish={onFinish} layout='vertical' disabled={loading}>
            {error && (
                <span className='error-text'>{error}</span>
            )}
            <Form.Item label='Equipment' name="name" rules={[{ required: true }]}>
                <Input type="text" placeholder="Enter equipment name." />
            </Form.Item>
            <Form.Item label='Equipment Tag' name="equipment_tag" rules={[{ required: true }]}>
                <Input type="text" placeholder="Enter equipment tag." />
            </Form.Item>
            <Form.Item label='Equipment ID' name="equipment_id" rules={[{ required: true }]}>
                <Input type="text" placeholder="Enter equipment id." />
            </Form.Item>
            <FormItemLocation name='site_id' />
            <FormItemSystem name='system_id' />
            <Form.Item label='Description' name="description" >
                <Input.TextArea placeholder="Enter description" />
            </Form.Item>

            <Form.Item label='Disable' name="is_active" valuePropName="checked">
                <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
            </Form.Item>
            <Form.Item label="Critical Equipment" name='is_critical'>
                <Select placeholder='Select Critical Equipment' optionFilterProp="children" showSearch allowClear>
                    <Select.Option value='1' key='1'>Yes</Select.Option>
                    <Select.Option value='0' key='0'>No</Select.Option>
                </Select>
            </Form.Item>
            <Row justify='end'>
                <Space>
                    <Button variant="secondary" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button variant="primary" type='submit' disabled={loading}>
                        Save
                    </Button>
                </Space>
            </Row>
        </Form>
    </Modal>
}
