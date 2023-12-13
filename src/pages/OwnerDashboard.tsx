import { useEffect, useState } from 'react'
import { Col, Row } from 'antd';
import { GET } from '../shared/utils/fetch'
import { DataLists } from './components';

export default function OwnerDashboard() {
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TSystems[]>([])

    useEffect(() => {
        const controller = new AbortController();
        fetchData({ signal: controller.signal })
        return () => controller.abort()
    }, [])

    async function fetchData(args?: ApiParams) {
        setLoading(true)
        const { signal, ...restArgs } = args ?? {};
        try {
            const res = await GET<ApiData<TSystems[]>>('/systems/dashboard?site=owner', signal!, restArgs)
            setDataSource(res.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <Row className='justify-content-between gap-2 align-items-center'>
                <Col>
                    <h3>Owner Dashboard</h3>
                </Col>
            </Row>
            <Row className='card-list mt-3'>
                <DataLists dataList={dataSource} to='/owner-dashboard' loading={loading} />
            </Row>
        </>
    )
}
