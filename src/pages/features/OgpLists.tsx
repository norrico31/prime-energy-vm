import { Row } from 'react-bootstrap'
import { DataLists } from '../components'
import { useEffect, useState } from 'react'
import { GET } from '../../shared/utils/fetch'

export default function OgpLists() {
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TRoles[]>([])

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal)
        return () => controller.abort()
    }, [])

    async function fetchData(signal?: AbortSignal, params?: ApiParams) {
        setLoading(true)
        try {
            const res = await GET<ApiSuccess<TRoles[]>>('/systems/dashboard?site=OGP', signal!, params)
            setDataSource(res.data.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }
    const data = [
        {
            title: 'WELL',
            id: '1',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list 1 ' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 2 ' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 3' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'unavail', text: 'well list' },
                { id: '5', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list last' },
            ]
        },
        {
            title: 'WELL1',
            id: '2',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'affected', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '5', statusAvailability: 'unavail', statusIntegrity: 'unavail', text: 'well list' },
            ]
        },
        {
            title: 'WELL212121212312312312',
            id: '3',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
            ]
        },
        {
            title: 'WELL212121212312312312',
            id: '4',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 123123123' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 12312321' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 123123123123' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list12 12312312312' },
            ]
        },
        {
            title: 'WELL',
            id: '1',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list 1 ' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 2 ' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 3' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'unavail', text: 'well list' },
                { id: '5', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list last' },
            ]
        },
        {
            title: 'WELL1',
            id: '2',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'affected', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '5', statusAvailability: 'unavail', statusIntegrity: 'unavail', text: 'well list' },
            ]
        },
        {
            title: 'WELL212121212312312312',
            id: '3',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
            ]
        },
        {
            title: 'WELL212121212312312312',
            id: '4',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 123123123' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 12312321' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 123123123123' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list12 12312312312' },
            ]
        },
        {
            title: 'WELL',
            id: '1',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list 1 ' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 2 ' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 3' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'unavail', text: 'well list' },
                { id: '5', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list last' },
            ]
        },
        {
            title: 'WELL1',
            id: '2',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'affected', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '5', statusAvailability: 'unavail', statusIntegrity: 'unavail', text: 'well list' },
            ]
        },
    ]
    return (
        <Row className='card-list justify-content-center'>
            <DataLists dataList={data} to='/ogp' />
        </Row>
    )
}
