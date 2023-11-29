import { useEffect, useState } from 'react'
import { Skeleton } from 'antd';
// import { useLocation } from 'react-router-dom';
// import { Row } from 'react-bootstrap'
// import { DataLists } from '../components'
import { GET } from '../shared/utils/fetch'

export default function OwnerDashboard() {
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
            const res = await GET<ApiData<TSystems[]>>('/systems/dashboard?site=owner', signal!, params)
            setDataSource(res.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    // const { pathname } = useLocation()
    console.log('owner Dashboard result: ', dataSource)
    return loading ? <Skeleton /> : (
        <>
            {/* {!pathname.includes('dashboard') && (
                <h3 className="mb-3">Critical Equipment</h3>
            )}
            <Row className='card-list'>
                <DataLists dataList={dataSource} to='/critical-equipment' loading={loading} />
            </Row> */}
            OwnerDashboard
        </>
    )
}
