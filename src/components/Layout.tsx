import { useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom"
import { useNotifCtx } from '../shared/contexts/Notification'
import useWindowSize from '../shared/hooks/useWindowResize'
import Container from 'react-bootstrap/Container'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { AiOutlineCheckCircle, AiOutlineDownload, AiOutlineEdit, AiOutlineDelete, AiOutlineInfoCircle } from 'react-icons/ai'
import { Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbars from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FiSettings } from 'react-icons/fi'

const links: string[] = ['dashboard', 'print-report', 'swp', 'ogp', 'pipelines', 'vulnerabilities']

function Navbar() {
    const { width } = useWindowSize()
    const [expand, setExpand] = useState(false);
    return <Navbars expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
            {width >= 709 && <Navbars.Brand href="#" className='logo-width'>
                LOGO
            </Navbars.Brand>
            }

            <Navbars.Toggle aria-controls='offcanvasNavbar-expand-false' onClick={() => setExpand(true)} />
            <h4 className={`m-0 fs-${width < 709 ? '6' : 'initial'} text-color-gray`}>
                Malampaya SWP Vulnerabilities
            </h4>
            <Navbars.Offcanvas
                id='offcanvasNavbar-expand-false'
                aria-labelledby='offcanvasNavbarLabel-expand-false'
                placement="start"
                show={expand}
                onHide={() => setExpand(false)}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id='offcanvasNavbarLabel-expand-false'>
                        LOGO
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        {links.map((link) => {
                            // guard clause for permissions
                            return <Link className='nav-link' key={link} to={'/' + link} onClick={() => setExpand(false)}>{firstLetterCapitalize(link)}</Link>
                        })}
                    </Nav>
                </Offcanvas.Body>
            </Navbars.Offcanvas>
            <NavDropdown
                title={<FiSettings />}
                id='offcanvasNavbarDropdown-expand-false'
                className='settings-dropdown'
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
        </Container>
    </Navbars>
}

function Notification() {
    const { type: { type, title, msg }, setType } = useNotifCtx()
    return <ToastContainer position="top-end" className="p-3 z-1">
        <Toast
            show={type !== null}
            onClose={() => setType({ type: null, msg: '', title: '' })}
            autohide
        >
            <Toast.Header className={`notification-title-${type}`}>
                <Icon type={type} />
                <strong className="me-auto ">{title}</strong>
            </Toast.Header>
            <Toast.Body className={`notification-text-${type}`}>{msg}</Toast.Body>
        </Toast>
    </ToastContainer>
}

function Icon({ type }: { type: string | null }) {
    if (!type) return null
    const icons: Record<string, JSX.Element> = {
        'success': <AiOutlineCheckCircle className='notification-icon' />,
        'update': <AiOutlineEdit className='notification-icon' />,
        'delete': <AiOutlineDelete className='notification-icon' />,
        'info': <AiOutlineInfoCircle className='notification-icon' />,
        'download': <AiOutlineDownload className='notification-icon' />,
    }
    return icons[type]
}

export default function Layout() {
    let { pathname } = useLocation()
    pathname = firstLetterCapitalize(pathname.slice(1))
    return <>
        <Notification />
        <Navbar />
        <Container fluid className='px-5'>
            <Row className='mb-4'>
                <h2 className='text-color-gray'>{!pathname ? 'Dashboard' : pathname}</h2>
            </Row>
            {<Outlet />}
        </Container>
    </>
}

const firstLetterCapitalize = (str: string) => str ? str[0].toUpperCase() + str.slice(1) : ''