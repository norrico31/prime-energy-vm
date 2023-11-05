import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Button } from '../components'

export default function Dashboard() {
    let { pathname } = useLocation()
    pathname = pathname.includes('critical') ? 'critical-equipment' : pathname
    return <Container fluid className='bg-color-white py-4'>
        <Row className='justify-content-between gap-2 align-items-center p-0 m-0'>
            <Col>
                <h3>{heading[shortenPathname(pathname)]}</h3>
            </Col>
            <NavLists />
        </Row>
        <hr />
        <div className='text-end mb-4'>
            <Button variant='primary' className='btn-print-report text-end' title={`Print Rerport - aha`}>Print Report - SWP</Button>
        </div>
        <Outlet />
    </Container>
}

const shortenPathname = (path: string) => path.includes('-') ? path.split('-')[0] : path.split('/')[2]

function NavLists() {
    return links.map((l, idx) => (
        <Col key={idx} xs lg={2} className='text-end p-0 m-0'>
            <NavLink to={'/dashboard/' + l.to} className={({ isActive }) => `dashboard-nav-links ${isActive ? 'active' : ''}`}>{l.title}</NavLink>
        </Col>
    ))
}

const heading: Record<string, string> = {
    swp: 'SWP',
    ogp: 'OGP',
    pipelines: 'Pipelines',
    critical: 'Critical Equipment',
}

const links = [
    {
        to: 'swp',
        title: 'SWP'
    },
    {
        to: 'ogp',
        title: 'OGP'
    },
    {
        to: 'pipelines',
        title: 'Pipelines'
    },
    {
        to: 'critical-equipment',
        title: 'Critical Equipment'
    },
]