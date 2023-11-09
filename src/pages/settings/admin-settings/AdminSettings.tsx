import Tab from 'react-bootstrap/Tab'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { Col, Nav, Row } from 'react-bootstrap'

const adminTabs = [
    {
        key: 'site',
        title: 'Location',
    },
    {
        key: 'users',
        title: 'Users Management',
    },
    {
        key: 'roles-permission',
        title: 'Roles & Permission',
    },
    {
        key: 'audit-logs',
        title: 'Audit Logs',
    },
    {
        key: 'notification-logs',
        title: 'Notification Logs',
    },
]

export default function AdminSettings() {
    return (
        <div className='mt-0'>
            <h5 className='mb-3 text-color-gray'>Admin Settings</h5>
            <Tabs />
        </div >
    )
}

function Tabs() {
    let { pathname } = useLocation()
    const navigate = useNavigate()
    pathname = pathname?.split('/')[2]
    return (
        <Tab.Container id="left-tabs-example" activeKey={pathname} >
            <Row className='justify-content-between'>
                <Col xs={1} sm={1} md={1} lg={2} xl={2}  >
                    <Nav variant="pills" className="d-flex flex-column gap-1" onSelect={navigate as () => void}>
                        {adminTabs.map((system, idx) => (
                            <Nav.Item key={idx} >
                                <Nav.Link eventKey={system.key} className='text-color-black'>{system.title}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col xs={8} sm={8} md={9} lg={10} xl={10}>
                    <Tab.Content>
                        <Outlet />
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}