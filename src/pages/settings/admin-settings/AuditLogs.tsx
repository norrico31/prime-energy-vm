import { useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap';
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';
import { useDataResource } from '../../../shared/hooks/useDataResource';
import { Table, PageSize, Button } from '../../../components';

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
        colHead: 'Account Type',
    },
    {
        colHead: 'Date',
    },
    {
        colHead: 'Action',
    },
    {
        colHead: 'Module',
    },
    {
        colHead: 'Payload',
    },
]

export default function AuditLogs() {
    const [search, searchVal, inputChange] = useDebounceSearch()
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const { data } = useDataResource<ApiSuccess<AuditLogs[]>, Payload>({ queryKey: 'getWhos', urls: { get: url, post: urlPost }, search, page: currentPage, limit: pageSize })

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

    return (
        <>
            <h3 className='text-color-gray mb-2'>Audit Logs</h3>
            <Row>
                <Col >
                    <PageSize value={pageSize} onChange={pageSizeChange} />
                </Col>
                <Col className='d-flex justify-content-end align-items-center gap-2'>
                    <Form.Control required type="text" placeholder="Search..." className='w-50' value={searchVal} onChange={inputChange} />
                    <Button variant='dark' title='Download module'>Download</Button>
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