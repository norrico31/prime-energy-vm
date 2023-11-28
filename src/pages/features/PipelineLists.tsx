import { Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { DataLists } from '../components'
import { useEffect, useState } from 'react'
import { GET } from '../../shared/utils/fetch'

export default function PipelineLists() {
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
            const res = await GET<ApiData<TSystems[]>>('/systems/dashboard?site=pipelines', signal!, params)
            setDataSource(res.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }
    const { pathname } = useLocation()
    return (
        <>
            {!pathname.includes('dashboard') && (
                <h3 className="mb-3">Pipelines</h3>
            )}
            <Row className='card-list'>
                <DataLists dataList={dataSource} to='/pipelines' loading={loading} />
            </Row>
        </>
    )
}
