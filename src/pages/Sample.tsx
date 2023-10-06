import { useFetch } from '../shared/hooks/useFetch'
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import BootstrapPagination from 'react-bootstrap/Pagination'
import Button from '../components/elements/Button'
import { AiOutlineEdit, AiOutlineDownload } from 'react-icons/ai'
import { BsTrash, BsEye } from 'react-icons/bs';

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
    const { data, isLoading, error } = useFetch<WhosInOut[]>({ urls: { get: url } })

    return <div className='d-flex justify-content-center align-items-center '>
        {isLoading ? <Spinner animation="border" />
            : <div className='w-100 p-3 text-center'>
                {/* TODO table dark mode in variant */}
                <Table responsive="lg" bordered hover size='sm' variant={undefined}>
                    <thead>
                        <tr>
                            {columns.map((c, idx) => (
                                <th key={idx}>{c.colHead}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map(d => {
                            return <tr key={d.id}>
                                <td >{d.user?.full_name}</td>
                                <td >{d.time_keeping_date}</td>
                                <td >{d.time_keeping_time}</td>
                                <td >{d.scheduled_time}</td>
                                <td className='d-flex justify-content-center  gap-1 '>
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
                            </tr>
                        })}
                    </tbody>
                </Table>
                <Pagination />
                {/* PAGINATION */}
            </div>}
    </div>
}

function Pagination() {
    return <div className="d-flex flex-column">
        <p>Total: <b>{1}</b></p>
        <BootstrapPagination className='m-auto'>
            <BootstrapPagination.Prev />
            <BootstrapPagination.Item active>{1}</BootstrapPagination.Item>
            <BootstrapPagination.Item>{2}</BootstrapPagination.Item>
            <BootstrapPagination.Item>{3}</BootstrapPagination.Item>
            <BootstrapPagination.Item>{4}</BootstrapPagination.Item>
            <BootstrapPagination.Item>{5}</BootstrapPagination.Item>
            <BootstrapPagination.Next />
        </BootstrapPagination>
    </div>
}