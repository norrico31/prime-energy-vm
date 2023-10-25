import { useState } from 'react'
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';
import { useDataResource } from '../../../shared/hooks/useDataResource';
import { Table, ButtonActions, PageSize, Button } from '../../../components';
import { Col, Row, Form, Modal as BootstrapModal } from 'react-bootstrap';

type Payload = {}

const url = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'
const urlPost = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'

const columns: TableColHead = [
    {
        colHead: 'Asset Classification',
    },
    {
        colHead: 'Description',
    },
    {
        colHead: 'Action',
    },
]

export default function AssetClassification() {
    const [search, searchVal, inputChange] = useDebounceSearch()
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [showModal, setShowModal] = useState(false)
    const [showModalDelete, setShowModalDelete] = useState(false)
    const { data, createData, isLoading } = useDataResource<ApiSuccess<WhosInOut[]>, Payload>({ queryKey: 'getWhos', paths: { get: url, post: urlPost }, search, page: currentPage, limit: pageSize })

    const paginationProps: PageProps = {
        active: data?.data?.current_page ?? 0,
        total: data?.data?.total ?? 0,
        perPage: data?.data?.per_page ?? 0,
        lastPage: data?.data?.last_page ?? 0,
        setCurrentPage
    }

    const pageSizeChange = (v: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentPage(1)
        setPageSize(isNaN(+v.target.value) ? 10 : parseInt(v.target.value))
    }

    const onHide = () => {
        setShowModal(false)
    }

    const onHideDelete = () => {
        setShowModalDelete(false)
    }

    return (
        <>
            <Row>
                <Col >
                    <PageSize value={pageSize} onChange={pageSizeChange} />
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
                        <td >{d.time_keeping_date}</td>
                        <td className='d-flex justify-content-center gap-1'>
                            <ButtonActions
                                loading={isLoading}
                                editData={() => createData({ age: 31, name: 'gerald', gender: 'male' })}
                                disabled={() => setShowModalDelete(true)}
                            />
                        </td>
                        {/* <td >{d.time_keeping_time}</td>
                        <td >{d.scheduled_time}</td> */}
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
            <BootstrapModal.Title>Asset Classification- Create</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Asset Classification Name</Form.Label>
                    <Form.Control required type="text" placeholder="Enter asset classification name." />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control required type="text" placeholder="Enter description." />
                </Form.Group>
            </Row>
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
            <Button variant="secondary" onClick={onHide}>
                Cancel
            </Button>
            <Button variant="primary" onClick={() => alert('Create')}>
                Save
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
                Disabled Asset
            </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>Disabled Selected Asset Classification</BootstrapModal.Body>
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