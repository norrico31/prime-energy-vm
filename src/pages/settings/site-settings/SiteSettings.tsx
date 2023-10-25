import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { Col, Nav, Row, Tab } from 'react-bootstrap'

const siteTabs = [
    {
        key: 'systems',
        title: 'Systems',
    },
    {
        key: 'equipments',
        title: 'Equipments',
    },
]

export default function SiteSettings() {
    let { pathname } = useLocation()
    const navigate = useNavigate()
    pathname = pathname?.split('/')[2]
    return (
        <div className='mt-0'>
            <h2 className='mb-3'>Site Settings</h2>
            {/* <h2 className='mb-3'>Site Settings - {firstLetterCapitalize(pathname.split('-').join(' '))}</h2> */}
            <Tab.Container id="left-tabs-example" activeKey={pathname} >
                <Row className='justify-content-between'>
                    <Col xs={1} sm={1} md={1} lg={2} xl={2}  >
                        <Nav variant="pills" className="flex-column" onSelect={navigate as () => void}>
                            {siteTabs.map((site, idx) => (
                                <Nav.Item key={idx} >
                                    <Nav.Link eventKey={site.key} className='text-color-black'>{site.title}</Nav.Link>
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
        </div >
    )
}
