import { useEffect, useState } from 'react'
import { Col, Input, Row } from 'antd';
import { useDebounceSearch } from '../shared/hooks/useDebounceSearch';
import { GET } from '../shared/utils/fetch'
import { DataLists } from './components';

export default function OwnerDashboard() {
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TSystems[]>([])
    const [search, searchVal, inputChange] = useDebounceSearch()

    useEffect(() => {
        const controller = new AbortController();
        fetchData({ signal: controller.signal, search })
        return () => controller.abort()
    }, [search])

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
            <Row justify='end'>
                <Col>
                    <Input.Search placeholder='Search...' value={searchVal} onChange={inputChange} />
                </Col>
            </Row>
            <Row className='card-list mt-3'>
                <DataLists dataList={dataSource} to='/owner-dashboard' loading={loading} />
            </Row>
        </>
    )
}
