import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from '../components'

export default function Dashboard() {
    const data = [
        {
            title: 'WELL',
            id: '1',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list 1 ' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 2 ' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 3' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'unavail', text: 'well list' },
                { id: '5', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list last' },
            ]
        },
        {
            title: 'WELL1',
            id: '2',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'affected', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '5', statusAvailability: 'unavail', statusIntegrity: 'unavail', text: 'well list' },
            ]
        },
        {
            title: 'WELL212121212312312312',
            id: '3',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
            ]
        },
        {
            title: 'WELL212121212312312312',
            id: '4',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 123123123' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 12312321' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 123123123123' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list12 12312312312' },
            ]
        },
        {
            title: 'WELL',
            id: '1',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list 1 ' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 2 ' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 3' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'unavail', text: 'well list' },
                { id: '5', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list last' },
            ]
        },
        {
            title: 'WELL1',
            id: '2',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'affected', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '5', statusAvailability: 'unavail', statusIntegrity: 'unavail', text: 'well list' },
            ]
        },
        {
            title: 'WELL212121212312312312',
            id: '3',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
            ]
        },
        {
            title: 'WELL212121212312312312',
            id: '4',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 123123123' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 12312321' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 123123123123' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list12 12312312312' },
            ]
        },
        {
            title: 'WELL',
            id: '1',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list 1 ' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 2 ' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 3' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'unavail', text: 'well list' },
                { id: '5', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list last' },
            ]
        },
        {
            title: 'WELL1',
            id: '2',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'affected', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '5', statusAvailability: 'unavail', statusIntegrity: 'unavail', text: 'well list' },
            ]
        },
        {
            title: 'WELL212121212312312312',
            id: '3',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
            ]
        },
        {
            title: 'WELL212121212312312312',
            id: '4',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 123123123' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 12312321' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 123123123123' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list12 12312312312' },
            ]
        },
    ]
    return <Container className='bg-color-white py-4'>
        <Row className='justify-content-end p-0 m-0'>
            {links.map((l, idx) => (
                <Col key={idx} xs lg={2} className='text-end p-0 m-0'>
                    <NavLink to={'/dashboard/' + l.to} className={({ isActive }) => `dashboard-nav-links ${isActive ? 'active' : ''}`}>{l.title}</NavLink>
                </Col>
            ))}
        </Row>
        <hr />
        <div className='text-end mb-4'>
            <Button variant='primary' className='btn-print-report text-end' title={`Print Rerport - aha`}>Print Report - SWP</Button>
        </div>
        <Outlet context={{ data: data as typeof data }} />
    </Container>
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
        to: 'critical-report',
        title: 'Critical Report'
    },
]