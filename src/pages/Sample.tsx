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
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useFetch<FetchResponse<WhosInOut[]>>({ urls: { get: url }, search, page })

    const paginationProps: PageProps = {
        active: data?.current_page ?? 0,
        total: data?.total ?? 0,
        perPage: data?.per_page ?? 0,
        lastPage: data?.last_page ?? 0,
        setPage
    }

    return <div className='d-flex justify-content-center align-items-center '>
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
                {/* PAGINATION */}
            </div>}
    </div>
}

// TODO: functionality
function Pagination({ active, lastPage, perPage, total, setPage }: PageProps) {
    const items: JSX.Element[] = []
    for (let i = 1; i <= lastPage; i++) {
        items.push(
            <BootstrapPagination.Item key={i} active={active === i} onClick={() => setPage(i)}>{i}</BootstrapPagination.Item>
        )
    }
    return <div className="d-flex flex-column">
        <p>Total: <b>{total}</b></p>
        <BootstrapPagination className='m-auto'>
            <BootstrapPagination.Prev disabled={active === 1} onClick={() => setPage(p => p - 1)} />
            {items}
            <BootstrapPagination.Next disabled={active === lastPage} onClick={() => setPage((p) => p + 1)} />
        </BootstrapPagination>
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