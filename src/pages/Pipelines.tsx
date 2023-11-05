import { Outlet } from 'react-router-dom'
import { PageHeading } from './components'
import { Container } from 'react-bootstrap'

export default function Pipelines() {
    return <Container>
        <PageHeading title='Pipelines' onClick={() => alert('print report pipelines')} />
        <Outlet />
    </Container>
}
