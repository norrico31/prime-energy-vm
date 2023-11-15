import { useState } from 'react'
import { Col, Row, Form, InputGroup } from 'react-bootstrap';
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';
import { useDataResource } from '../../../shared/utils/fetch';
import { Table, Button } from '../../components';
import { AiOutlineSearch } from 'react-icons/ai';

type Payload = {
    name: string
    age: number
    gender: string
}

const url = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'
const urlPost = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'

// const columns: TableColHead = [
//     {
//         colHead: 'User',
//     },
//     {
//         colHead: 'Account Type',
//     },
//     {
//         colHead: 'Date',
//     },
//     {
//         colHead: 'Action',
//     },
//     {
//         colHead: 'Module',
//     },
//     {
//         colHead: 'Payload',
//     },
// ]

export default function AuditLogs() {
    const [search, searchVal, inputChange] = useDebounceSearch()
    const [currentPage, setCurrentPage] = useState(1);
    const [, setShowModal] = useState(false);
    // const [pageSize, setPageSize] = useState(10);

    const { data } = useDataResource<ApiSuccess<AuditLogs[]>, Payload>({ queryKey: 'getWhos', paths: { get: url, post: urlPost }, search, page: currentPage, limit: 10 })

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

    return (
        <>
            <h3 className='text-color-gray mb-2'>Audit Logs</h3>
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
            >
                {data?.data.data.map(d => {
                    return <tr key={d.id}>
                        <td >{d.user.full_name}</td>
                        <td >{d.account_type}</td>
                        <td >{d.date}</td>
                        <td >{d.action}</td>
                        <td >{d.module_name}</td>
                        <td >{d.payload as string}</td>
                    </tr>
                })}
            </Table>
        </>
    )
}