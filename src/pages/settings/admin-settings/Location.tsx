import { useEffect, useState } from 'react'
import { Form as AntDForm, Input, Space, Col, Row, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAuthUser } from '../../../shared/contexts/AuthUser'
import { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch'
import { ButtonActions, Button, Table } from '../../components'
import { GET, POST, PUT, DELETE } from '../../../shared/utils/fetch'

export default function Location() {
    const { mapPermission } = useAuthUser()
    const navigate = useNavigate()
    const [search, searchVal, inputChange] = useDebounceSearch()
    const [isModalShow, setIsModalShow] = useState(false);
    const [selectedData, setSelectedData] = useState<TLocation | undefined>(undefined);
    const [tableParams, setTableParams] = useState<TableParams<TablePaginationConfig> | undefined>()
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TLocation[]>([])
    const hasSitesAdminSettings = mapPermission.has('Sites Management - Allow View List')
    const hasUserCreate = mapPermission.has('Sites Management - Allow Create')
    const hasUserEdit = mapPermission.has('Sites Management - Allow Edit')
    const hasUserDelete = mapPermission.has('Sites Management - Allow Delete')

    useEffect(() => {
        const controller = new AbortController();
        fetchData({ signal: controller.signal, search, page: tableParams?.pagination?.current, limit: tableParams?.pagination?.pageSize })
        return () => controller.abort()
    }, [search])

    async function fetchData(args?: ApiParams) {
        setLoading(true)
        const { signal, ...restArgs } = args ?? {};
        try {
            const res = await GET<ApiSuccess<TLocation[]>>('/sites', signal!, restArgs)
            setDataSource(res.data.data)
            setTableParams({
                ...tableParams,
                pagination: {
                    ...tableParams?.pagination,
                    total: res.data.pagination?.total,
                    current: res.data.pagination?.current_page,
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

    if (!loading && !hasSitesAdminSettings) {
        navigate(-1)
        return null
    }

    const tableChange = (pagination: TablePaginationConfig) => fetchData({ page: pagination?.current, search, limit: pagination.pageSize! })

    const onCancel = () => {
        setIsModalShow(false)
        setSelectedData(undefined)
    }

    const columns: ColumnsType<TLocation> = [
        {
            title: 'Location',
            dataIndex: 'name',
            key: 'name',
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
            render: (_, record) => <ButtonActions
                loading={loading}
                editData={hasUserEdit ? () => {
                    setIsModalShow(true)
                    setSelectedData(record)
                } : false}
                deleteData={hasUserDelete ? () => DELETE('/sites/' + record.id).finally((fetchData)) : false}
                dataTitle={record.name}
                dataDescription={record.description!}
            />,
        },
    ]

    return (
        <>
            <h3 className='text-color-gray mb-2'>Locations</h3>
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
            <Table<TLocation> loading={loading} columns={columns} dataSource={dataSource} isSizeChanger tableParams={tableParams} onChange={tableChange} />
            <ModalInput open={isModalShow} onCancel={onCancel} selectedData={selectedData} fetchData={fetchData} />
        </>
    )
}

type ModalProps = {
    open: boolean;
    onCancel: () => void
    fetchData(signal?: ApiParams): Promise<unknown>
    selectedData?: TLocation
}


type Payload = {
    name: string
    description: string | null
} & Partial<{ id: string }>

function ModalInput({ open, onCancel, selectedData, fetchData }: ModalProps) {
    const [form] = AntDForm.useForm<Payload>()
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
        const result = !selectedData ? POST<Payload, ApiSuccess<TLocation>>('/sites/', v) : PUT<Payload>('/sites/' + selectedData.id, v);
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

    return <Modal open={open} onCancel={onCancel} footer={null} title={`Location - ${selectedData ? 'Edit' : 'Create'}`} forceRender>
        {error && (
            <span className='error-text'>{error}</span>
        )}
        <AntDForm form={form} onFinish={onFinish} layout='vertical' disabled={loading}>
            <AntDForm.Item label='Location Name' name="name" rules={[{ required: true, message: '' }]}>
                <Input type="text" placeholder="Enter location name." />
            </AntDForm.Item>
            <AntDForm.Item label='Description' name="description" >
                <Input.TextArea placeholder="Enter sequence no." />
            </AntDForm.Item>
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
        </AntDForm>
    </Modal>
}