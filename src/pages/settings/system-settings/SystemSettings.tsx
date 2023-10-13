import Tab from 'react-bootstrap/Tab'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { Col, Nav, Row } from 'react-bootstrap'

const systemTabs = [
    {
        key: 'phase',
        title: 'Phase',
    },
    {
        key: 'availability',
        title: 'Availability',
    },
    {
        key: 'integrity',
        title: 'Integrity',
    },
    {
        key: 'initial-ram-rating',
        title: 'Initial Ram Rating',
    },
    {
        key: 'ram-priority',
        title: 'Ram Priority',
    },
    {
        key: 're-asses-ram-rating',
        title: 'Re Asses Ram Rating',
    },
    {
        key: 'status',
        title: 'Status',
    },
]

export default function SystemSettings() {
    return (
        <div className='mt-0'>
            <h5 className='mb-3 text-color-gray'>System Settings</h5>
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
                    <Nav variant="pills" className="flex-column" onSelect={navigate as () => void}>
                        {systemTabs.map((system, idx) => (
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