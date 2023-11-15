import { useState } from 'react'
import { useDataResource } from '../shared/utils/fetch'
import { useDebounceSearch } from '../shared/hooks/useDebounceSearch'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form';
import { ButtonActions, Pagination } from './components'

const url = 'time_keepings/whos/in?date=2023-10-05'
const urlPost = 'time_keepings/whos/in?date=2023-10-05'

const columns: TableColHead = [
    {
        colHead: 'Name',
    },
    {
        colHead: 'Time Keeping Date',
    },
    {
        colHead: 'Time Keeping Time',
    },
    {
        colHead: 'Schedule Time',
    },
    {
        colHead: 'Actions',
    },
]

type Payload = {
    age: number
    name: string
    gender: string
}

export default function Sample() {
    const [search, searchVal, onChange] = useDebounceSearch()
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const { data, createData, isLoading } = useDataResource<ApiSuccess<WhosInOut[]>, Payload>({ queryKey: 'getWhos', paths: { get: url, post: urlPost }, search, page: currentPage, limit: pageSize })

    const paginationProps: PageProps = {
        active: data?.data?.current_page ?? 0,
        total: data?.data?.total ?? 0,
        perPage: data?.data?.per_page ?? 0,
        lastPage: data?.data?.last_page ?? 0,
        setCurrentPage
    }

    return <div className='d-flex justify-content-center align-items-center '>
        <Form.Select aria-label="Default select example" onChange={(v) => {
            setCurrentPage(1)
            setPageSize(isNaN(+v.target.value) ? 10 : parseInt(v.target.value))
        }}>
            {['Page Size', 10, 25, 50, 100].map(p => (
                <option key={p} value={p} onChange={(val) => setPageSize(typeof val === 'number' ? val : 10)}>{p}</option>
            ))}
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control type="text" placeholder="Search" value={searchVal!} onChange={onChange} />
        </Form.Group>
        {isLoading ? <Spinner animation="border" />
            : <div className='w-100 p-3 text-center'>
                <Table responsive="sm" bordered hover size='sm' variant={undefined}>
                    <thead>
                        <tr>
                            {columns.map((c, idx) => (
                                <th key={idx}>{c.colHead}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data.data.map(d => {
                            return <tr key={d.id}>
                                <td >{d.user.full_name}</td>
                                <td >{d.time_keeping_date}</td>
                                <td >{d.time_keeping_time}</td>
                                <td >{d.scheduled_time}</td>
                                <ButtonActions
                                    loading={isLoading}
                                    editData={() => createData({ age: 31, name: 'gerald', gender: 'male' })}
                                />
                            </tr>
                        })}
                    </tbody>
                </Table>
                <Pagination {...paginationProps} />
            </div>}
    </div>
}

