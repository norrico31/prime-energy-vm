import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthUser } from '../../../shared/contexts/AuthUser';
import { Input, Row, Col, Space, Modal, Form } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';
import { Table, ButtonActions, Button } from '../../components';

import { GET, POST, PUT, DELETE } from '../../../shared/utils/fetch'

export default function Status() {
    const { mapPermission } = useAuthUser()
    const navigate = useNavigate()
    const [search, searchVal, inputChange] = useDebounceSearch()
    const [isModalShow, setIsModalShow] = useState(false);
    const [selectedData, setSelectedData] = useState<TStatus | undefined>(undefined);
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TStatus[]>([])
    const [tableParams, setTableParams] = useState<TableParams<TablePaginationConfig> | undefined>()
    const hasStatusSystemSettings = mapPermission.has('Statuses Management - view list')
    const hasUserCreate = mapPermission.has('Statuses Management - create')
    const hasUserEdit = mapPermission.has('Statuses Management - edit')
    const hasUserDelete = mapPermission.has('Statuses Management - delete')

    useEffect(() => {
        const controller = new AbortController();
        fetchData({ signal: controller.signal, search, page: tableParams?.pagination?.current, limit: tableParams?.pagination?.pageSize })
        return () => controller.abort()
    }, [search])

    async function fetchData(args?: ApiParams) {
        setLoading(true)
        const { signal, ...restArgs } = args ?? {};
        try {
            const res = await GET<ApiSuccess<TStatus[]>>('/statuses', signal!, restArgs)
            setDataSource(res.data.data)
            setTableParams({
                ...tableParams,
                pagination: {
                    ...tableParams?.pagination,
                    total: res?.data.pagination?.total,
                    current: res?.data.pagination?.current_page,
                    pageSize: res.data.pagination?.per_page,
                },
            })
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    if (!loading && !hasStatusSystemSettings) {
        navigate(-1)
        return null
    }

    const tableChange = (pagination: TablePaginationConfig) => fetchData({ page: pagination?.current, search, limit: pagination.pageSize! })

    const columns: ColumnsType<TStatus> = [
        {
            title: 'Status',
            dataIndex: 'name',
            key: 'name',
            // width: 120
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            width: 200,
            ellipsis: true
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
                        editData={hasUserEdit ? () => {
                            setIsModalShow(true)
                            setSelectedData(record)
                        } : false}
                        deleteData={hasUserDelete ? () => DELETE('/statuses/' + record.id).finally((fetchData)) : false}
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
            <h3 className='text-color-gray mb-2'>Status</h3>
            <Row wrap justify='space-between' style={{ marginBottom: 10 }}>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <Input.Search type="text" placeholder="Search..." value={searchVal} onChange={inputChange} style={{ borderRadius: 0 }} />
                </Col>
                <Col className='d-flex justify-content-end align-items-center'>
                    {hasUserCreate && (
                        <Button variant='success' title='Create' onClick={() => setIsModalShow(true)}>Create</Button>
                    )}
                </Col>
            </Row>
            <Table<TStatus> loading={loading} columns={columns} dataSource={dataSource} isSizeChanger tableParams={tableParams} onChange={tableChange} />
            <ModalInput open={isModalShow} onCancel={onCancel} selectedData={selectedData} fetchData={fetchData} />
        </>
    )
}


type ModalProps = {
    open: boolean;
    onCancel: () => void
    fetchData(signal?: ApiParams): Promise<unknown>
    selectedData?: TStatus
}

type Payload = {
    name: string
    description: string | null
    // is_active: number
} & Partial<{ id: string }>

function ModalInput({ open, onCancel, selectedData, fetchData }: ModalProps) {
    const [form] = Form.useForm<Payload>()
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (open) {
            if (selectedData) {
                form.setFieldsValue({ ...selectedData })
            } else {
                form.resetFields()
            }
        }
    }, [selectedData, open])

    const onFinish = (v: Payload) => {
        setLoading(true)
        const result = !selectedData ? POST<Payload, ApiSuccess<TStatus>>('/statuses/', v) : PUT<Payload>('/statuses/' + selectedData.id, v);
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
    return <Modal open={open} onCancel={onCancel} footer={null} title={`Status - ${selectedData ? 'Edit' : 'Create'}`} forceRender>
        <Form form={form} onFinish={onFinish} layout='vertical' disabled={loading}>
            {error && (
                <span className='error-text'>{error}</span>
            )}
            <Form.Item label='Status' name="name" rules={[{ required: true, message: '' }]}>
                <Input type="text" placeholder="Enter status name." />
            </Form.Item>
            <Form.Item label='Description' name="description" >
                <Input.TextArea placeholder="Enter description." />
            </Form.Item>
            {/* <Form.Item label='Disable' name="is_active" valuePropName="checked">
                <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
            </Form.Item> */}
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