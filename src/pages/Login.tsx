import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'

// TODO
function Login() {
    return (
        <Container fluid className='login-container'>
            <Form className='w-100'>
                <Form.Group as={Row} lg='12' className="mb-3 d-flex justify-content-center" controlId="formPlaintextEmail">
                    <Col sm="10" md='5' lg='4'>
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Form.Control type='email' placeholder='Email' />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} lg='12' className="mb-3 d-flex justify-content-center" controlId="formPlaintextPassword">
                    <Col sm="10" md='5' lg='4'>
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextPassword">
                    <Col sm="10" md='5' lg='4' className='d-flex justify-content-end'>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container >
    );
}

export default Login;