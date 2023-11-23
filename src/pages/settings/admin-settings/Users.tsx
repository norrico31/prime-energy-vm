import { useEffect, useState } from 'react'
import { Row, Col, Form, Modal, Input, Space, Select, Switch } from 'antd'
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';
import { Table, ButtonActions, Button } from '../../components';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { GET, POST, PUT, DELETE } from '../../../shared/utils/fetch'

export default function TUsers() {
    const [search, searchVal, inputChange] = useDebounceSearch()
    const [isModalShow, setIsModalShow] = useState(false);
    const [selectedData, setSelectedData] = useState<TUser | undefined>(undefined);
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TUser[]>([])
    const [tableParams, setTableParams] = useState<TableParams<TablePaginationConfig> | undefined>()

    useEffect(() => {
        const controller = new AbortController();
        fetchData({ signal: controller.signal, search, page: tableParams?.pagination?.current, limit: tableParams?.pagination?.pageSize })
        return () => controller.abort()
    }, [search])

    async function fetchData(args?: ApiParams) {
        setLoading(true)
        const { signal, ...restArgs } = args ?? {};
        try {
            const res = await GET<ApiSuccess<TUser[]>>('/users', signal!, restArgs)
            setDataSource(res?.data.data)
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

    const tableChange = (pagination: TablePaginationConfig) => fetchData({ page: pagination?.current, search, limit: pagination.pageSize! })

    const onCancel = () => {
        setIsModalShow(false)
        setSelectedData(undefined)
    }

    const columns: ColumnsType<TUser> = [
        {
            title: 'Full Name',
            dataIndex: 'full_name',
            key: 'full_name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (_, rec) => rec.role?.name
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (_, record) => <ButtonActions
                loading={loading}
                editData={() => {
                    setIsModalShow(true)
                    setSelectedData(record)
                }}
                deleteData={() => DELETE('/users/' + record.id).finally((fetchData))}
                dataTitle={record.full_name}
                dataDescription={record.email!}
            />,
        },
        // {
        //     title: 'Activation',
        //     key: 'activation',
        //     align: 'center',
        //     render: (_, record) => <ButtonActions
        //         loading={loading}
        //         editData={() => {
        //             setIsModalShow(true)
        //             setSelectedData(record)
        //         }}
        //         deleteData={() => DELETE('/users/' + record.id).finally((fetchData))}
        //         dataTitle={record.full_name}
        //         dataDescription={record.email!}
        //     />,
        // },
    ]

    return (
        <>
            <h3 className='text-color-gray mb-2'>Users Management</h3>
            <Row wrap justify='space-between' style={{ marginBottom: 10 }}>
                <Col xs={12} sm={12} md={12} lg={8}>
                    <Input.Search type="text" placeholder="Search..." value={searchVal} onChange={inputChange} style={{ borderRadius: 0 }} />
                </Col>
                <Col className='d-flex justify-content-end align-items-center'>
                    <Button variant='success' title='Create' onClick={() => setIsModalShow(true)}>Create</Button>
                </Col>
            </Row>
            <Table<TUser> loading={loading} columns={columns} dataSource={dataSource} isSizeChanger tableParams={tableParams} onChange={tableChange} />
            <ModalInput open={isModalShow} onCancel={onCancel} selectedData={selectedData} fetchData={fetchData} />
        </>
    )
}

type ModalProps = {
    open: boolean;
    onCancel: () => void
    fetchData(signal?: ApiParams): Promise<unknown>
    selectedData?: TUser
}


type Payload = {
    name: string
    description: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    confirm_password: string | null
    is_active: number;
} & Partial<{ id: string }>

function ModalInput({ open, onCancel, selectedData, fetchData }: ModalProps) {
    const [form] = Form.useForm<Payload>()
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (open) {
            if (selectedData) {
                form.setFieldsValue({ ...selectedData, is_active: Number(selectedData?.is_active) ? 1 : 0 })
            } else {
                form.resetFields()
            }
        }
    }, [selectedData, open])

    const onFinish = (v: Payload) => {
        if (v.password !== v.confirm_password) {
            setError('Password do not match!')
            setLoading(false)
            return
        }
        setLoading(true)
        setError(undefined)
        const result = !selectedData ? POST<Payload, ApiSuccess<TLocation>>('/users/', { ...v, is_active: v.is_active ? 1 : 0 }) : PUT<Payload>('/users/' + selectedData.id, { ...v, is_active: v.is_active ? 1 : 0 });
        result
            .then(() => {
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
    return <Modal open={open} onCancel={onCancel} footer={null} title={`User - ${selectedData ? 'Edit' : 'Create'}`} forceRender>
        <Form form={form} onFinish={onFinish} layout='vertical' disabled={loading}>
            {error && (
                <span className='error-text'>{error}</span>
            )}
            <Row justify='space-evenly' gutter={[24, 24]}>
                <Col>
                    <Form.Item label='First Name' name="first_name" rules={[{ required: true, message: '' }]}>
                        <Input type="text" placeholder="Enter first name." />
                    </Form.Item>
                    <Form.Item label='Last Name' name="last_name" rules={[{ required: true, message: '' }]}>
                        <Input type="text" placeholder="Enter last name." />
                    </Form.Item>
                    <FormItemRoles name='role_id' />
                    <Form.Item label='Active' name="is_active" valuePropName="checked">
                        <Switch checkedChildren="Yes" unCheckedChildren="No" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item label='Email' name="email" rules={[{ required: true, message: '' }]}>
                        <Input type="email" placeholder="Enter email." />
                    </Form.Item>
                    <InputPassword
                        label='Password'
                        name='password'
                        required={selectedData ? false : true}
                        placeholder='Enter password'
                    />
                    <InputPassword
                        label='Confirm Password'
                        name='confirm_password'
                        required={selectedData ? false : true}
                        placeholder='Enter confirm password'
                    />
                </Col>
            </Row>
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
    </Modal>
}

function InputPassword({ placeholder, required, name, label }: { placeholder: string, required: boolean; name: string, label: string }) {
    const [passwordVisible, setPasswordVisible] = useState(false)
    return <Form.Item label={label} name={name} rules={[{ required, message: '' }]}>
        <Input.Password
            placeholder={placeholder}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
        />
    </Form.Item>
}

function FormItemRoles({ name }: { name: string }) {
    const [roles, setRoles] = useState<TRoles[]>([]);

    useEffect(() => {
        // if (id === 'create') return
        const controller = new AbortController();
        (async () => {
            try {
                const res = await GET<ApiSuccess<TRoles[]>>('/roles', controller.signal)
                setRoles(res.data.data ?? [])
            } catch (error) {
                return error
            }
        })();
        return () => controller.abort()
    }, [])

    return <Form.Item label="Roles" name={name} rules={[{ required: true, message: '' }]}>
        <Select placeholder='Select Roles' optionFilterProp="children" showSearch allowClear>
            {roles.map((stat) => (
                <Select.Option value={stat.id} key={stat.id}>
                    {stat.name}
                </Select.Option>
            ))}
        </Select>
    </Form.Item>
}