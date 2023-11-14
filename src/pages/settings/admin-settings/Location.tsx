import { useEffect, useState } from 'react'
import { Form as AntDForm, Row as AntDRow, Input, Select, Space, Switch } from 'antd';
import { Col, Row, Form, Modal as BootstrapModal, InputGroup } from 'react-bootstrap';
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';
import { useDataResource } from '../../../shared/hooks/useDataResource';
import { Table, ButtonActions, Button } from '../../components';
import { AiOutlineSearch } from 'react-icons/ai';
import { UseMutateFunction } from '@tanstack/react-query';

type Payload = {
    name: string
    description: string | null
} & Partial<{ id: string }>

const columns: TableColHead = [
    {
        colHead: 'Location',
    },
    {
        colHead: 'Description',
    },
    {
        colHead: 'Action',
    },
]

export default function Location() {
    const [search, searchVal, inputChange] = useDebounceSearch()
    const [currentPage, setCurrentPage] = useState(1);
    // const [pageSize, setPageSize] = useState(10);
    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [selectedData, setSelectedData] = useState<TLocation | undefined>(undefined);
    const { data, isLoading, createData, editData } = useDataResource<ApiSuccess<TLocation[]>, Payload>({ queryKey: 'location', paths: { get: '/sites', post: '/sites', put: '/sites/' }, search, page: currentPage, limit: 10 })

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
        setSelectedData(undefined)
    }

    const onHideDelete = () => {
        setShowModalDelete(false)
    }
    return (
        <>
            <h3 className='text-color-gray mb-2'>Location Management</h3>
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
            </Row >
            <Table
                loading={false}
                pageProps={paginationProps}
                columns={columns}
            >
                {data?.data.data.map(d => {
                    return <tr key={d.id}>
                        <td >{d.name}</td>
                        <td >{d.description}</td>
                        <td className='d-flex justify-content-center gap-1'>
                            <ButtonActions
                                loading={isLoading}
                                editData={() => {
                                    setShowModal(true)
                                    setSelectedData(d)
                                }}
                            // disabled={() => setShowModalDelete(true)}
                            />
                        </td>
                    </tr>
                })}
            </Table>
            <Modal show={showModal} onHide={onHide} createData={createData} editData={editData} selectedData={selectedData} />
            <ModalDelete show={showModalDelete} onHide={onHideDelete} />
        </>
    )
}

type ModalProps = {
    show: boolean;
    onHide: () => void
    selectedData?: TLocation
    createData: UseMutateFunction<Payload & Partial<{
        id: string;
    }>, unknown, Payload & Partial<{
        id: string;
    }>, unknown>;
    editData: UseMutateFunction<Payload & Partial<{
        id: string;
    }>, unknown, Payload & Partial<{
        id: string;
    }>, unknown>
}

function Modal({ show, onHide, createData, editData, selectedData }: ModalProps) {
    const [form] = AntDForm.useForm<Payload>()
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        if (show) {
            if (selectedData) {
                form.setFieldsValue({ ...selectedData })
            } else {
                form.resetFields()
            }
        }
    }, [selectedData, show])

    const onFinish = (v: Payload) => {
        if (selectedData) {
            setError(undefined)
            editData(v, {
                onError: (err) => {
                    const error = (err as { message?: string })?.message;
                    setError(error)
                },
                onSuccess: () => {
                    onHide()
                    form.resetFields()
                }
            })
        } else {
            createData(v, {
                onSuccess: () => {
                    onHide()
                    form.resetFields()
                },
                onError: (err) => {
                    const error = (err as { message?: string })?.message;
                    setError(error)
                },
            })
        }
    }

    return <BootstrapModal show={show} onHide={onHide}>
        <BootstrapModal.Header closeButton>
            <BootstrapModal.Title>Location - Edit</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
            {error && (
                <span className='error-text'>{error}</span>
            )}
            <AntDForm form={form} onFinish={onFinish} layout='vertical'>
                <AntDForm.Item label='Location Name' name="name" rules={[{ required: true }]}>
                    <Input type="text" placeholder="Enter location name." />
                </AntDForm.Item>
                <AntDForm.Item label='Description' name="description" >
                    <Input.TextArea placeholder="Enter sequence no." />
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
    </BootstrapModal>
}

function ModalDelete({ show, onHide }: { show: boolean; onHide: () => void }) {
    return <BootstrapModal
        show={show}
        onHide={onHide}
        centered
    >
        <BootstrapModal.Header closeButton>
            <BootstrapModal.Title id="example-modal-sizes-title-sm">
                Disabled Location
            </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>Disable Selected Location</BootstrapModal.Body>
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