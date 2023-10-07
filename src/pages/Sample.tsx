import { useState } from 'react'
import { useFetch } from '../shared/hooks/useFetch'
import { useDebounceSearch } from '../shared/hooks/useDebounceSearch'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import BootstrapPagination from 'react-bootstrap/Pagination'
import { BsTrash, BsEye } from 'react-icons/bs';
import { AiOutlineEdit, AiOutlineDownload } from 'react-icons/ai'
import Form from 'react-bootstrap/Form';
import Button from '../components/elements/Button'

const url = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'

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

export default function Sample() {
    const [search, searchVal, onChange] = useDebounceSearch()
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const { data, isLoading, error } = useFetch<FetchResponse<WhosInOut[]>>({ urls: { get: url }, search, page: currentPage, limit: pageSize })

    const paginationProps: PageProps = {
        active: data?.current_page ?? 0,
        total: data?.total ?? 0,
        perPage: data?.per_page ?? 0,
        lastPage: data?.last_page ?? 0,
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
                        {data?.data.map(d => {
                            return <tr key={d.id}>
                                <td >{d.user.full_name}</td>
                                <td >{d.time_keeping_date}</td>
                                <td >{d.time_keeping_time}</td>
                                <td >{d.scheduled_time}</td>
                                <ButtonActions
                                    isLoading={isLoading}
                                />
                            </tr>
                        })}
                    </tbody>
                </Table>
                <Pagination {...paginationProps} />
            </div>}
    </div>
}

// TODO: functionality
function Pagination({ active, lastPage, perPage, total, setCurrentPage }: PageProps) {
    const items: JSX.Element[] = []
    for (let i = 1; i <= lastPage; i++) {
        items.push(
            <BootstrapPagination.Item key={i} active={active === i} onClick={() => setCurrentPage(i)}>{i}</BootstrapPagination.Item>
        )
    }
    return <div className="d-flex justify-content-center w-25 align-items-center m-auto">
        <p className='mb-0'>Total: <b>{total}</b></p>
        <BootstrapPagination className='m-auto mb-2'>
            <BootstrapPagination.Prev disabled={active === 1} onClick={() => setCurrentPage(p => p - 1)} />
            <BootstrapPagination.Item active>{active}</BootstrapPagination.Item>
            <BootstrapPagination.Next disabled={active === lastPage} onClick={() => setCurrentPage((p) => p + 1)} />
        </BootstrapPagination>
        <p className='mb-0'>Per Page: <b>{perPage}</b></p>
    </div>
}

function ButtonActions({ isLoading }: { isLoading: boolean }) {
    return <td className='d-flex justify-content-center gap-1 '>
        <Button variant="info" loading={isLoading} title='View'>
            <BsEye />
        </Button>
        <Button variant="primary" loading={isLoading} title='Edit'>
            <AiOutlineEdit />
        </Button>
        <Button variant="danger" loading={isLoading} title='Delete'>
            <BsTrash />
        </Button>
        <Button variant="success" loading={isLoading} title='Download'>
            <AiOutlineDownload />
        </Button>
    </td>
}