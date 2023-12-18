import { Row, Col } from "react-bootstrap";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from './components'
import { useAuthUser } from "../shared/contexts/AuthUser";

export default function Dashboard() {
    // const { mapPermission } = useAuthUser()
    // console.log(mapPermission)
    return <>
        <Main />
        <Outlet />
    </>
}

function Main() {
    let { pathname } = useLocation()
    pathname = pathname.includes('critical') ? 'critical-equipment' : pathname
    const navigate = useNavigate()
    const path = pathname === 'critical-equipment' ? pathname : pathname.includes('swp') ? 'swp' : pathname.includes('ogp') ? 'ogp' : pathname.includes('pipelines') ? 'pipelines' : '';
    return <>
        <Row className='justify-content-between gap-2 align-items-center'>
            <Col>
                <h3>{heading[shortenPathname(pathname)]}</h3>
            </Col>
            <NavLists />
        </Row>
        <hr />
        <div className='text-end mb-4'>
            <Button variant='primary' className='btn-print-report text-end' title={`Print Report - ${heading[shortenPathname(pathname)]}`} onClick={(() => navigate(`/${path}/print-report`))}>Print Report - {heading[shortenPathname(pathname)]}</Button>
        </div>
    </>
}

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

const shortenPathname = (path: string) => path.includes('-') ? path.split('-')[0] : path.split('/')[2]

const links = [
    {
        to: 'critical-equipment',
        title: 'Critical Equipment'
    },
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
]