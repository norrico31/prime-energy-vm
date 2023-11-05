import { Outlet } from 'react-router-dom'
import { Container, Col } from 'react-bootstrap'
import { Button, PageHeading } from '../components'

export default function Ogp() {
    return <Container>
        <PageHeading title='Ogp'>
            <Col className='d-flex justify-content-end gap-4' >
                <Button variant='primary' title='Print Report' className='btn-print-report' onClick={() => alert('download')}>Print Report - OGP</Button>
            </Col>
        </PageHeading>
        <Outlet />
    </Container>
}
