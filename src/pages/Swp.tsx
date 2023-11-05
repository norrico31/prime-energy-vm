import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { PageHeading } from './components'

export default function Swp() {
    return <Container>
        <PageHeading title='SWP' onClick={() => alert('print report swp')} />
        <Outlet />
    </Container>
}
