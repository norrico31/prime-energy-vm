import { Outlet } from 'react-router-dom'
import { Container, } from 'react-bootstrap'
import { PageHeading } from './components'

export default function Ogp() {
    return <Container>
        <PageHeading title='OGP' onClick={() => alert('print report ogp')} />
        <Outlet />
    </Container>
}
