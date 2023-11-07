import { useState } from 'react'
import { Col, Row, Form, Modal as BootstrapModal } from 'react-bootstrap';
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';
import { useDataResource } from '../../../shared/hooks/useDataResource';
import { Table, ButtonActions, Button } from '../../components';

type Payload = {
    name: string
    age: number
    gender: string
}

const url = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'
const urlPost = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'

const columns: TableColHead = [
    {
        colHead: 'User',
    },
    {
        colHead: 'Email',
    },
    {
        colHead: 'Role',
    },
    {
        colHead: 'Action',
    },
    {
        colHead: 'Activation',
    },
]

export default function Users() {
    const [search, searchVal, inputChange] = useDebounceSearch()
    const [currentPage, setCurrentPage] = useState(1);
    // const [pageSize, setPageSize] = useState(10);
    const [showModal, setShowModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const { data, isLoading } = useDataResource<ApiSuccess<User[]>, Payload>({ queryKey: 'getWhos', paths: { get: url, post: urlPost }, search, page: currentPage, limit: 10 })

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
            <h3 className='text-color-gray mb-2'>Users Management</h3>
            <Row>
                <Col >
                    {/* <PageSize value={pageSize} onChange={pageSizeChange} /> */}
                </Col>
                <Col className='d-flex justify-content-end align-items-center gap-2'>
                    <Form.Control required type="text" placeholder="Search..." className='w-50' value={searchVal} onChange={inputChange} />
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
                        <td >{d.email}</td>
                        <td >{d.role?.name}</td>
                        <td className='d-flex justify-content-center gap-1'>
                            <ButtonActions
                                loading={isLoading}
                                // editData={() => createData({ name: 'gerald' })}
                                disabled={() => setShowModalDelete(true)}
                            />
                        </td>
                        <td>
                            <div className='d-flex gap-1 justify-content-center'>
                                <Button variant='success' title='active' size='sm'>Activate</Button>
                                {/* <Button variant='danger' title='active' size='sm'>Deactivate</Button> */}
                            </div>
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
    return <BootstrapModal show={show} onHide={onHide}>
        <BootstrapModal.Header closeButton>
            <BootstrapModal.Title>Users - Edit</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter first name." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter middle name." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter last name." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                {/* SELECT DROPDOWN */}
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Role</Form.Label>
                    <Form.Control required type="text" placeholder="Enter role." />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control required type="text" placeholder="Enter description." />
                </Form.Group>
            </Row>
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
            <Button variant="secondary" onClick={onHide}>
                Cancel
            </Button>
            <Button variant="primary" onClick={() => alert('Update')}>
                Update
            </Button>
        </BootstrapModal.Footer>
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
                Disabled User
            </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>Disable Selected Users</BootstrapModal.Body>
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