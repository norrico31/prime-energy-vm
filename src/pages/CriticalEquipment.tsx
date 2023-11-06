import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { PageHeading } from './components'

export default function CriticalEquipment() {
    return <Container>
        <PageHeading title='Critical Equipment' onClick={() => alert('print report critical')} />
        <Outlet />
    </Container>
}