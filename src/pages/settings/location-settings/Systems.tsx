import { useEffect, useState } from 'react'
import { Input, Select, Row, Col, Space, Switch, Modal, Form } from 'antd';
import { Table, ButtonActions, Button } from '../../components';
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';

import { GET, POST, PUT, DELETE } from '../../../shared/utils/fetch'

export default function Systems() {
    const [search, searchVal, inputChange] = useDebounceSearch()
    const [isModalShow, setIsModalShow] = useState(false);
    const [tableParams, setTableParams] = useState<TableParams<TablePaginationConfig> | undefined>()
    const [selectedData, setSelectedData] = useState<TSystems | undefined>(undefined);
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TSystems[]>([])

    useEffect(() => {
        const controller = new AbortController();
        fetchData({ signal: controller.signal, search, page: tableParams?.pagination?.current, limit: tableParams?.pagination?.pageSize })
        return () => controller.abort()
    }, [search])

    async function fetchData(args?: ApiParams) {
        setLoading(true)
        const { signal, ...restArgs } = args ?? {}
        try {
            const res = await GET<ApiSuccess<TSystems[]>>('/systems', signal!, restArgs)
            setTableParams({
                ...tableParams,
                pagination: {
                    ...tableParams?.pagination,
                    total: res.data.pagination?.total,
                    current: res.data.pagination?.current_page,
                    pageSize: res.data.pagination?.per_page,
                },
            })
            setDataSource(res.data.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    const tableChange = (pagination: TablePaginationConfig) => fetchData({ page: pagination?.current, search, limit: pagination.pageSize! })

    const columns: ColumnsType<TSystems> = [
        {
            title: 'System Name',
            dataIndex: 'name',
            key: 'name',
            // width: 120
        },
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
            title: 'Disable',
            dataIndex: 'is_active',
            key: 'is_active',
            render: (_, rec) => rec.is_active === '0' ? 'No' : 'Yes',
            align: 'center',
            // width: 120
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
                        dataDescription={record.name}
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
            <h3 className='text-color-gray mb-2'>System</h3>
            <Row wrap justify='space-between' style={{ marginBottom: 10 }}>
                <Col xs={12} sm={12} md={12} lg={8}>
                    {/* <PageSize value={pageSize} onChange={pageSizeChange} /> */}
                    <Input.Search type="text" placeholder="Search..." value={searchVal} onChange={inputChange} style={{ borderRadius: 0 }} />
                </Col>
                <Col className='d-flex justify-content-end align-items-center'>
                    <Button variant='success' title='Create' onClick={() => setIsModalShow(true)}>Create</Button>
                </Col>
            </Row>
            <Table<TSystems> loading={loading} columns={columns} dataSource={dataSource} isSizeChanger tableParams={tableParams} onChange={tableChange} />

            <ModalInput open={isModalShow} onCancel={onCancel} fetchData={fetchData} selectedData={selectedData} />
        </>
    )
}

type ModalProps = {
    open: boolean;
    onCancel: () => void
    fetchData(args?: ApiParams): Promise<unknown>
    selectedData?: TSystems
}

type Payload = {
    name: string
    site_id: string
    sequence_no: number
    description: string
    is_active: number
} & Partial<{ id: string }>

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
        const result = !selectedData ? POST<Payload, ApiSuccess<TSystems>>('/systems/', { ...v, is_active: v.is_active ? 1 : 0 }) : PUT<Payload>('/systems/' + selectedData.id, { ...v, is_active: v.is_active ? 1 : 0 });
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

    return <Modal open={open} onCancel={onCancel} footer={null} title={`System - ${selectedData ? 'Edit' : 'Create'}`} forceRender>
        <Form form={form} onFinish={onFinish} layout='vertical' disabled={loading}>
            {error && (
                <span className='error-text'>{error}</span>
            )}
            <Form.Item label='System Name' name="name" rules={[{ required: true, message: '' }]}>
                <Input type="text" placeholder="Enter system name." />
            </Form.Item>
            <FormItemLocation name='site_id' />
            <Form.Item label='Sequence No.' name="sequence_no" rules={[{ required: true, message: '' }]}>
                <Input type="text" placeholder="Enter sequence no." />
            </Form.Item>
            <Form.Item label='Description' name="description" >
                <Input.TextArea placeholder="Enter description" />
            </Form.Item>
            <Form.Item label='Disable' name="is_active" valuePropName="checked">
                <Switch checkedChildren="Yes" unCheckedChildren="No" />
            </Form.Item>
            <Row justify='end' >
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
    </Modal >
}

export function FormItemLocation({ name }: { name: string }) {
    const [locations, setLocations] = useState<TLocation[]>([])
    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const res = await GET<ApiSuccess<TLocation[]>>('/sites', controller.signal)
                setLocations(res.data.data)
                return res
            } catch (error) {
                return error
            }
        })()
        return () => controller.abort()
    }, [])
    return <Form.Item label="Location" name={name}>
        <Select placeholder='Select Location' optionFilterProp="children" showSearch allowClear>
            {locations.map((loc) => (
                <Select.Option value={loc.id} key={loc.id}>
                    {loc.name}
                </Select.Option>
            ))}
        </Select>
    </Form.Item>
}

export function FormItemSystem({ name }: { name: string }) {
    const [systems, setLists] = useState<TSystems[]>([])
    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const res = await GET<ApiSuccess<TSystems[]>>('/systems', controller.signal)
                setLists(res.data.data)
                return res
            } catch (error) {
                return error
            }
        })()
        return () => controller.abort()
    }, [])

    return <Form.Item label="System" name={name}>
        <Select placeholder='Select System' optionFilterProp="children" showSearch allowClear>
            {systems.map((sys) => (
                <Select.Option value={sys.id} key={sys.id}>
                    {sys.name}
                </Select.Option>
            ))}
        </Select>
    </Form.Item>
}