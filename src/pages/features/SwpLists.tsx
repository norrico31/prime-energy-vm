import { useState, useEffect } from 'react'
import { Row } from 'antd'
import { DataLists } from '../components'
import { GET } from '../../shared/utils/fetch'

// TODO: FETCH DATA HERE
export default function SwpLists() {
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TSystems[]>([])

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal)
        return () => controller.abort()
    }, [])

    async function fetchData(signal?: AbortSignal, params?: ApiParams) {
        setLoading(true)
        try {
            const res = await GET<ApiData<TSystems[]>>('/systems/dashboard?site=SWP', signal!, params)
            setDataSource(res.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }
    return (
        <Row className='card-list'>
            <DataLists dataList={dataSource} to='/swp' loading={loading} />
        </Row>
    )
}
