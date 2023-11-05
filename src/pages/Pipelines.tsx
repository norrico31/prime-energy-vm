import { Outlet } from 'react-router-dom'
import { Button, PageHeading } from './components'
import { Col, Container } from 'react-bootstrap'

export default function Pipelines() {
    return <Container>
        <PageHeading title='Pipelines'>
            <Col className='d-flex justify-content-end gap-4' >
                <Button variant='primary' title='Print Report' className='btn-print-report' onClick={() => alert('download')}>Print Report - Pipelines</Button>
            </Col>
        </PageHeading>
        <Outlet />
    </Container>
}
