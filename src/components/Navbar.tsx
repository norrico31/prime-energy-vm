import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbars from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FiSettings } from 'react-icons/fi'

function NavigationBar() {
    return <Navbars expand={false} className="bg-body-tertiary mb-3">
        <Container fluid>
            <Navbars.Brand href="#" className='logo-width'>
                LOGO
            </Navbars.Brand>
            <Navbars.Toggle aria-controls='offcanvasNavbar-expand-false' />
            <h4 className='m-0'>
                Malampaya SWP Vulnerabilities
            </h4>
            <Navbars.Offcanvas
                id='offcanvasNavbar-expand-false'
                aria-labelledby='offcanvasNavbarLabel-expand-false'
                placement="start"
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
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/print-report">Print Report</Nav.Link>
                        <Nav.Link href="/swp">SWP</Nav.Link>
                        <Nav.Link href="/ogp">OGP</Nav.Link>
                        <Nav.Link href="/pipelines">Pipelines</Nav.Link>
                        <Nav.Link href="/vulnerabilities">Vulnerabilities</Nav.Link>
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


export default NavigationBar;