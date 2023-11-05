import { Outlet } from 'react-router-dom'
import { Col, Container } from 'react-bootstrap'
import { Button, PageHeading } from './components'

export default function CriticalEquipment() {
    return <Container>
        <PageHeading title='Critical Equipment'>
            <Col className='d-flex justify-content-end gap-4' >
                <Button variant='primary' title='Print Report' className='btn-print-report' onClick={() => alert('download')}>Print Report - Critical Equipment</Button>
            </Col>
        </PageHeading>
        <Outlet />
    </Container>
}
