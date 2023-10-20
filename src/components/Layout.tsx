import { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom"
import useWindowSize from '../shared/hooks/useWindowResize'
import Container from 'react-bootstrap/Container'
import { AiOutlineHome, AiOutlinePrinter, AiOutlineFolder, AiOutlineFileText, AiOutlineLineChart } from 'react-icons/ai'
import Nav from 'react-bootstrap/Nav'
import Navbars from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FiSettings } from 'react-icons/fi'
import { TbSettingsDollar, TbSettingsBolt } from 'react-icons/tb'
import Logo from '../shared/assets/logo_horizontal.svg'

const links: { icon: JSX.Element; name: string; to: string }[] = [
    { icon: <AiOutlineHome className='fs-4' />, name: 'Dashboard', to: '/' },
    { icon: <AiOutlinePrinter className='fs-4' />, name: 'Print Report', to: '/print-report' },
    { icon: <AiOutlineFolder className='fs-4' />, name: 'Swp', to: '/swp' },
    { icon: <AiOutlineFileText className='fs-4' />, name: 'Ogp', to: '/ogp' },
    { icon: <AiOutlineLineChart className='fs-4' />, name: 'Pipelines', to: '/pipelines' },
    { icon: <TbSettingsDollar className='fs-4' />, name: 'Asset Settings', to: '/asset-settings/asset' },
    { icon: <FiSettings className='fs-4' />, name: 'System Settings', to: '/system-settings/phase' },
    { icon: <TbSettingsBolt className='fs-4' />, name: 'Admin Settings', to: '/admin-settings/site' },
    // { icon: <AiFillUnlock className='fs-4' />, name: 'Vulnerabilities', to: '/vulnerabilities' },
]

function Navbar() {
    const { width } = useWindowSize()
    const [expand, setExpand] = useState(false);
    return <Navbars expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
            {width >= 860 &&
                <Navbars.Brand className='logo-width p-0'>
                    <img src={Logo} alt="logo" className='main-logo' />
                </Navbars.Brand>
            }
            <Navbars.Toggle aria-controls='offcanvasNavbar-expand-false' onClick={() => setExpand(true)} />
            {width > 640 && (
                <h4 className={`m-0 fs-6`}>
                    Malampaya SWP Vulnerabilities
                </h4>

            )}
            <Navbars.Offcanvas
                id='offcanvasNavbar-expand-false'
                aria-labelledby='offcanvasNavbarLabel-expand-false'
                placement="start"
                show={expand}
                onHide={() => setExpand(false)}
                className='navbar-offcanvas'
            // style={{ width: 300 }}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id='offcanvasNavbarLabel-expand-false'>
                        <img src={Logo} alt="logo" className='main-logo inverted' />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
                    {/* <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                    <Nav className="mt-3">
                        {links.map((link, idx) => {
                            // guard clause for permissions
                            return <NavLink key={idx} className={({ isActive }) => `nav-link d-flex align-items-center gap-3 fs-5 ${isActive ? 'active' : ''}`} to={link.to} onClick={() => setExpand(false)}>
                                {link.icon}
                                {link.name}
                            </NavLink>
                        })}
                    </Nav>
                </Offcanvas.Body>
            </Navbars.Offcanvas>
            <div className='settings-dropdown d-flex align-items-center gap-4'>
                <h5 className='ml-auto'>ADMINISTRATOR</h5>
                <NavDropdown
                    title={<FiSettings />}
                    id='offcanvasNavbarDropdown-expand-false'
                >
                    <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                    {/* <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item> */}
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
        </Container>
    </Navbars>
}

export default function Layout() {
    return <>
        {/* <Notification /> */}
        <Navbar />
        <Container fluid className='px-5 py-3'>
            {/* <Row className='mb-4'>
                <Title />
            </Row> */}
            {<Outlet />}
        </Container>
    </>
}