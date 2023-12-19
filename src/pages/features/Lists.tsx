import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Row, Col } from 'antd'
import { Button, DataLists } from '../components'
import { GET } from '../../shared/utils/fetch'
import { useAuthUser } from '../../shared/contexts/AuthUser'

type Props = {
    title: string
    navigate?: string
}

const obj: Record<string, string> = {
    'swp': 'SWP',
    'ogp': 'OGP',
    'pipelines': 'Pipelines',
    'critical': 'Critical',
}

export default function Lists(props: Props) {
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TSystems[]>([])
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { mapPermission } = useAuthUser()

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal)
        return () => controller.abort()
    }, [props.title])

    async function fetchData(signal?: AbortSignal, params?: ApiParams) {
        setLoading(true)
        try {
            const res = await GET<ApiData<TSystems[]>>(`/systems/dashboard?site=${obj[props.title].toLowerCase()}`, signal!, params)
            setDataSource(res.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }
    const hasUserCreatePermission = mapPermission.has('Transactions Management - create')
    return (
        <>
            {!pathname.includes('dashboard') && (
                <Row justify='space-between' wrap>
                    <Col>
                        <h3 className="mb-3">{obj[props.title] === 'Critical' ? 'Critical Equipment' : obj[props.title]}</h3>
                    </Col>
                    <Col>
                        {props.navigate && (
                            <Button variant='primary' onClick={() => navigate(props.navigate!)}>Print Report</Button>
                        )}
                    </Col>
                </Row>
            )}
            <Row className='card-list'>
                <DataLists
                    dataList={dataSource}
                    to={`/${obj[props.title].toLowerCase() === 'critical' ? 'critical-equipment' : obj[props.title].toLowerCase()}`}
                    loading={loading}
                    hasUserCreate={hasUserCreatePermission}
                />
            </Row>
        </>
    )
}
