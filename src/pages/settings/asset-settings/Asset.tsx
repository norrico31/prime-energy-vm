import React, { useState } from 'react'
import { useDebounceSearch } from '../../../shared/hooks/useDebounceSearch';
import { useFetch } from '../../../shared/hooks/useFetch';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner'
import { Table, ButtonActions, Button } from '../../../components';

import { BsTrash, BsEye } from 'react-icons/bs';
import { AiOutlineEdit, AiOutlineDownload } from 'react-icons/ai'

type Payload = {}

const url = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'
const urlPost = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'

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

export default function Asset() {
    const [search, searchVal, onChange] = useDebounceSearch()
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const { data, createData, isLoading, error } = useFetch<ApiSuccess<WhosInOut[]>, Payload>({ queryKey: 'getWhos', urls: { get: url, post: urlPost }, search, page: currentPage, limit: pageSize })

    const paginationProps: PageProps = {
        active: data?.data?.current_page ?? 0,
        total: data?.data?.total ?? 0,
        perPage: data?.data?.per_page ?? 0,
        lastPage: data?.data?.last_page ?? 0,
        setCurrentPage
    }

    console.log('asset')

    return (
        <div className='w-75'>
            <Table
                loading={false}
                pageProps={paginationProps}
                columns={columns}
            >
                {data?.data.data.map(d => {
                    return <tr key={d.id}>
                        <td >{d.user.full_name}</td>
                        <td >{d.time_keeping_date}</td>
                        <td >{d.time_keeping_time}</td>
                        <td >{d.scheduled_time}</td>
                        <td className='d-flex justify-content-center gap-1'>
                            <ButtonActions
                                loading={isLoading}
                                editData={() => createData({ age: 31, name: 'gerald', gender: 'male' })}
                            />
                        </td>
                    </tr>
                })}
            </Table>
        </div>
    )
}
