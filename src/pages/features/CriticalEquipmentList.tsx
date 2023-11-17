import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { DataLists } from '../components'
import { GET } from '../../shared/utils/fetch'

export default function CriticalEquipmentList() {
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
            const res = await GET<ApiSuccess<TRoles[]>>('/systems/dashboard?site=critical', signal!, params)
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
    ]

    return (
        <Row className='card-list'>
            <DataLists dataList={data} to='/critical-equipment' />
        </Row>
    )
}
