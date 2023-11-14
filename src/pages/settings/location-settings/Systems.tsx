import { useState } from 'react'
import { Form as AntDForm, Input, Select, Row as AntDRow, Space, Switch } from 'antd';
import { Col, Row, Form, Modal as BootstrapModal, InputGroup } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDataResource } from '../../../shared/hooks/useDataResource';
import { Table, ButtonActions, Button } from '../../components';
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';

type Payload = {
    name: string
    age: number
    gender: string
}

const columns: TableColHead = [
    {
        colHead: 'Systems',
    },
    {
        colHead: 'Location',
    },
    {
        colHead: 'Sequence No.s',
    },
    {
        colHead: 'Description',
    },
    {
        colHead: 'Action',
    },
]

export default function Systems() {
    const [search, searchVal, inputChange] = useDebounceSearch()
    const [currentPage, setCurrentPage] = useState(1);
    // const [pageSize, setPageSize] = useState(10);
    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const { data, isLoading } = useDataResource<ApiSuccess<WhosInOut[]>, Payload>({ queryKey: 'system', paths: { get: '/systems', post: '/systems' }, search, page: currentPage, limit: 10 })

    const paginationProps: PageProps = {
        active: data?.data?.current_page ?? 0,
        total: data?.data?.total ?? 0,
        perPage: data?.data?.per_page ?? 0,
        lastPage: data?.data?.last_page ?? 0,
        setCurrentPage
    }

    // const pageSizeChange = (v: React.ChangeEvent<HTMLSelectElement>) => {
    //     setCurrentPage(1)
    //     setPageSize(isNaN(+v.target.value) ? 10 : parseInt(v.target.value))
    // }

    const onHide = () => {
        setShowModal(false)
    }

    const onHideDelete = () => {
        setShowModalDelete(false)
    }

    return (
        <>
            <Row>
                <h4 className='mb-3'>Systems</h4>
            </Row>
            <Row>
                <Col xs={8} sm={7} md={6} lg={4}>
                    {/* <PageSize value={pageSize} onChange={pageSizeChange} /> */}
                    <InputGroup>
                        <Form.Control required type="text" placeholder="Search..." className='w-50' value={searchVal} onChange={inputChange} style={{ borderRadius: 0 }} />
                        <InputGroup.Text style={{ borderRadius: 0 }}>
                            <AiOutlineSearch />
                        </InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col className='d-flex justify-content-end align-items-center'>
                    <Button variant='success' title='Create' onClick={() => setShowModal(true)}>Create</Button>
                </Col>
            </Row>
            <Table
                loading={false}
                pageProps={paginationProps}
                columns={columns}
            >
                {data?.data.data.map(d => {
                    return <tr key={d.id}>
                        <td >{d.user.full_name}</td>
                        <td >{d.time_keeping_date}</td>
                        <td className='d-flex justify-content-center gap-1'>
                            <ButtonActions
                                loading={isLoading}
                                // editData={() => createData({ name: 'gerald' })}
                                disabled={() => setShowModalDelete(true)}
                            />
                        </td>
                    </tr>
                })}
            </Table>
            <Modal show={showModal} onHide={onHide} />
            <ModalDelete show={showModalDelete} onHide={onHideDelete} />
        </>
    )
}

function Modal({ show, onHide }: { show: boolean; onHide: () => void }) {
    const [form] = AntDForm.useForm()
    const onFinish = (v: unknown) => {
        // hit endpoint for create/edit
        console.log(v)
    }
    return <BootstrapModal show={show} onHide={onHide} footer={null}>
        <BootstrapModal.Header closeButton>
            <BootstrapModal.Title>System - Create</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
            <AntDForm form={form} onFinish={onFinish} layout='vertical'>
                <AntDForm.Item label='System Name' name="name" rules={[{ required: true }]}>
                    <Input type="text" placeholder="Enter system name." />
                </AntDForm.Item>
                <AntDForm.Item label="Location" name='site_id'>
                    <Select placeholder='Select Location' optionFilterProp="children" >
                        {/* <Select.Option value="short_term">Short Term</Select.Option> */}
                    </Select>
                </AntDForm.Item>
                <AntDForm.Item label='Sequence No.' name="sequence_no" rules={[{ required: true }]}>
                    <Input type="text" placeholder="Enter sequence no." />
                </AntDForm.Item>
                <AntDForm.Item label='Description' name="description" >
                    <Input.TextArea placeholder="Enter sequence no." />
                </AntDForm.Item>
                <AntDForm.Item label='Disable' name="is_active" >
                    <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
                </AntDForm.Item>
                <AntDRow justify='end' >
                    <Space>
                        <Button variant="secondary" onClick={onHide}>
                            Cancel
                        </Button>
                        <Button variant="primary" type='submit'>
                            Save
                        </Button>
                    </Space>
                </AntDRow>
            </AntDForm>
        </BootstrapModal.Body>
    </BootstrapModal >
}

function ModalDelete({ show, onHide }: { show: boolean; onHide: () => void }) {
    return <BootstrapModal
        show={show}
        onHide={onHide}
        centered
    >
        <BootstrapModal.Header closeButton>
            <BootstrapModal.Title id="example-modal-sizes-title-sm">
                Disabled Systems
            </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>Disable Selected Systems</BootstrapModal.Body>
        <BootstrapModal.Footer>
            <Button variant="secondary" onClick={onHide} title='Cancel'>
                Cancel
            </Button>
            <Button variant="danger" onClick={() => alert('Delete')} title='Disabled'>
                Disable
            </Button>
        </BootstrapModal.Footer>
    </BootstrapModal>
}