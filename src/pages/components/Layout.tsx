import { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom"
import useWindowSize from '../../shared/hooks/useWindowResize'
import Container from 'react-bootstrap/Container'
import { AiOutlineFolder, AiOutlineFileText, AiOutlineLineChart } from 'react-icons/ai'
import Nav from 'react-bootstrap/Nav'
import Navbars from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FiSettings } from 'react-icons/fi'
import { GiBrokenAxe } from 'react-icons/gi'
import { MdLocationOn, MdAdminPanelSettings, MdOutlineDashboard } from 'react-icons/md'
import Logo from '../../shared/assets/logo_horizontal.svg'

const links: { icon: JSX.Element; name: string; to: string }[] = [
    { icon: <MdOutlineDashboard className='fs-4' />, name: 'Dashboard', to: '/dashboard' },
    { icon: <AiOutlineFolder className='fs-4' />, name: 'Swp', to: '/swp' },
    { icon: <AiOutlineFileText className='fs-4' />, name: 'Ogp', to: '/ogp' },
    { icon: <AiOutlineLineChart className='fs-4' />, name: 'Pipelines', to: '/pipelines' },
    { icon: <GiBrokenAxe className='fs-4' />, name: 'Criical Equipment', to: '/critical-equipment' },
    { icon: <MdLocationOn className='fs-4' />, name: 'Location Settings', to: '/location-settings/systems' },
    { icon: <FiSettings className='fs-4' />, name: 'System Settings', to: '/system-settings/phase' },
    { icon: <MdAdminPanelSettings className='fs-4' />, name: 'Admin Settings', to: '/admin-settings/location' },
]

function Navbar() {
    const [expand, setExpand] = useState(false)
    return <Navbars expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
            <NavbarBrand onClick={() => setExpand(true)} />
            <Navbars.Offcanvas
                id='offcanvasNavbar-expand-false'
                aria-labelledby='offcanvasNavbarLabel-expand-false'
                placement="start"
                show={expand}
                onHide={() => setExpand(false)}
                className='navbar-offcanvas'
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id='offcanvasNavbarLabel-expand-false'>
                        <img src={Logo} alt="logo" className='main-logo inverted' />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='p-0'>
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
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Logout
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
        </Container>
    </Navbars>
}

function NavbarBrand(props: { onClick: () => void }) {
    const { width } = useWindowSize()
    return <>
        {width >= 860 &&
            <Navbars.Brand className='logo-width p-0'>
                <img src={Logo} alt="logo" className='main-logo' />
            </Navbars.Brand>
        }
        <Navbars.Toggle aria-controls='offcanvasNavbar-expand-false' onClick={props.onClick} />
        {width > 640 && (
            <h4 className={`m-0 fs-6`}>
                Malampaya SWP Vulnerabilities
            </h4>

        )}
    </>
}

export default function Layout() {
    return <>
        {/* <Notification /> */}
        <Navbar />
        <Container fluid className='bg-color-white px-4 py-3'>
            {<Outlet />}
        </Container>
    </>
}