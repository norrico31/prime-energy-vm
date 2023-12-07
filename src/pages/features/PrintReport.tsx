import { Row, Col, Skeleton } from 'antd'
import { Button } from '../components'
import { Table } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { GET } from '../../shared/utils/fetch'

type Props = {
    title: string
}

const obj: Record<string, string> = {
    'swp': 'SWP',
    'ogp': 'OGP',
    'pipelines': 'Pipelines',
    'critical': 'Critical',
}

export default function PrintReport({ title }: Props) {
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TPrintReport[]>([])

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal)
        return () => controller.abort()
    }, [title])

    async function fetchData(signal?: AbortSignal, params?: ApiParams) {
        setLoading(true)
        try {
            const data = await GET<TPrintReport[]>(`/download/transaction/preview?site=${obj[title?.toLowerCase()].toLowerCase()}`, signal!, params)
            setDataSource(data)
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    const exportPrintReport = async () => {
        try {
            const result = await GET(`/download/transaction/site?site=${obj[title?.toLowerCase()]}`)
            console.log('download reulst: ', result)
        } catch (error) {
            console.error('Error exporting transaction:', error);
        }

    }

    return (
        <>
            <h3>{title} Print Reports</h3>
            <hr />
            <Row justify='end'>
                <Col>
                    <Button variant='primary' onClick={exportPrintReport}>Export SWP Print Report</Button>
                </Col>
            </Row>
            <div className='mt-3'>
                {loading ? <Skeleton /> : (
                    <Table responsive="lg" bordered size='sm' variant={undefined}>
                        <thead className="text-center">
                            <tr>
                                <th >Ref No.</th>
                                <th >Date Added</th>
                                <th >Vulnerability Title</th>
                                <th >Availability</th>
                                <th >Integrity</th>
                                <th >Threat Owner</th>
                                <th >Status</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {(dataSource ?? []).map((d, idx) => (
                                <tr key={idx}>
                                    <td >{d.ref_no}</td>
                                    <td >{dayjs(d.date_raised).format('YYYY-MM-DD')}</td>
                                    <td >{d.vulnerability_title}</td>
                                    <td >{d.availability}</td>
                                    <td >{d.integrity}</td>
                                    <td >{d.threat_owner}</td>
                                    <td >{d.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </div>
        </>
    )
}
