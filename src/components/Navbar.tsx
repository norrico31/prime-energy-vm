import { useState } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbars from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FiSettings } from 'react-icons/fi'
import useWindowSize from '../shared/hooks/useWindowResize'

const links = ['dashboard', 'print-report', 'swp', 'ogp', 'pipelines', 'vulnerabilities']

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
                            return <Link className='nav-link' key={link} to={'/' + link} onClick={() => setExpand(false)}>{link ? link[0].toUpperCase() + link.slice(1) : ''}</Link>
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


export default Navbar;