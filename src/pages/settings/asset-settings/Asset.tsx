import { useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap';
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';
import { useDataResource } from '../../../shared/hooks/useDataResource';
import { Table, ButtonActions, PageSize, Button } from '../../../components';

type Payload = {
    name: string
    age: number
    gender: string
}

const url = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'
const urlPost = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'

const columns: TableColHead = [
    {
        colHead: 'Asset',
    },
    {
        colHead: 'Description',
    },
    {
        colHead: 'Action',
    },
]

export default function Asset() {
    const [search, searchVal, onChange] = useDebounceSearch()
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const { data, createData, isLoading, error } = useDataResource<ApiSuccess<WhosInOut[]>, Payload>({ queryKey: 'getWhos', urls: { get: url, post: urlPost }, search, page: currentPage, limit: pageSize })

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
            <Row>
                <Col >
                    <PageSize value={pageSize} onChange={pageSizeChange} />
                </Col>
                <Col className='d-flex justify-content-end align-items-center gap-2'>
                    {/* <PageSize value={pageSize} onChange={pageSizeChange} /> */}
                    <Form.Control required type="text" placeholder="Search..." className='w-50' />
                    <Button variant='success' title='Create'>Create</Button>
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
                                disabled={() => alert('aha')}
                            />
                        </td>
                    </tr>
                })}
            </Table>
        </>
    )
}
