import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Forms() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                    <Form.Label>Action No.</Form.Label>
                    <Form.Control type="text" placeholder="Enter action no." />
                </Form.Group>
                <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                    <Form.Label>Date Raised (mm/dd/yyyy)</Form.Label>
                    <Form.Control type="date" placeholder="Select Date" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Equipment</Form.Label>
                    <Form.Control type="text" placeholder="Enter equipment." />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Initiator</Form.Label>
                    <Form.Control type="text" placeholder="Enter initiator." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md={6} controlId="formGridEmail">
                    <Form.Label>Action No.</Form.Label>
                    <Form.Control type="text" placeholder="Enter action no." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md={6} controlId="formGridEmail">
                    <Form.Label>Equipment</Form.Label>
                    <Form.Control type="text" placeholder="Enter equipment." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md={6} controlId="formGridEmail">
                    <Form.Label>Phase</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Vulnerability Title</Form.Label>
                    <Form.Control as='textarea' type="text" placeholder="Enter vulnerability title." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Risk Description</Form.Label>
                    <Form.Control as='textarea' type="text" placeholder="Enter risk description." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                    <Form.Label>Action Item</Form.Label>
                    <Form.Control type="text" placeholder="Enter item no." />
                    <Form.Control type="text" placeholder="Enter item no." className='mt-1 mb-1' />
                    <Form.Control type="text" placeholder="Enter item no." />
                    <Form.Control type="text" placeholder="Enter item no." className='mt-1 mb-1' />
                    <Form.Control type="text" placeholder="Enter item no." />
                </Form.Group>
                <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                    <Form.Label>Action Owner</Form.Label>
                    <Form.Control type="text" placeholder="Enter owner." />
                    <Form.Control type="text" placeholder="Enter owner." className='mt-1 mb-1' />
                    <Form.Control type="text" placeholder="Enter owner." />
                    <Form.Control type="text" placeholder="Enter owner." className='mt-1 mb-1' />
                    <Form.Control type="text" placeholder="Enter owner." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Mitigation</Form.Label>
                    <Form.Control as='textarea' type="text" placeholder="Enter mitigation." />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} xs={12} md={6} controlId="formGridEmail">
                    <Form.Label>Availability.</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Red</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} xs={12} md={6} controlId="formGridPassword">
                    <Form.Label>Integrity</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Green</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default Forms;