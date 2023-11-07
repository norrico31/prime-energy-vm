import { Col, Container, Row, Form } from "react-bootstrap"
import useWindowSize from "../../shared/hooks/useWindowResize"
import { Button } from "."

export default function ListViewCols() {
    return <Container>
        <Row>
            <Col md lg>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEquipmentTags">
                    <Form.Label column xs="5">
                        Equipment Tags
                    </Form.Label>
                    <Col xs="7">
                        <Form.Control plaintext readOnly value="SAMPLE-TAG01" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEqupmentname">
                    <Form.Label column xs="5">
                        Equipment Name
                    </Form.Label>
                    <Col xs="7">
                        <Form.Control plaintext readOnly value="RCS-2023-(1)" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextSystems">
                    <Form.Label column xs="5">
                        Systems
                    </Form.Label>
                    <Col xs="7">
                        <Form.Control plaintext readOnly value="MACHINE-1" />
                    </Col>
                </Form.Group>
            </Col>
            <Col md lg>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEquipmentTags">
                    <Form.Label column xs="5">
                        Equipment ID
                    </Form.Label>
                    <Col xs="7">
                        <Form.Control plaintext readOnly value="SAMPLE-TAG01" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEqupmentname">
                    <Form.Label column xs="5">
                        Location
                    </Form.Label>
                    <Col xs="7">
                        <Form.Control plaintext readOnly value="RCS-2023-(1)" />
                    </Col>
                </Form.Group>
            </Col>
            {/* xs={2 && 10} */}
            <ListViewColEnd />
        </Row>
    </Container>
}

function ListViewColEnd() {
    const { width } = useWindowSize()
    return <Col xs={width > 768 ? 2 : 10} className={`d-flex align-items-end ${width > 768 ? 'flex-column' : ''} gap-3`}>
        {/* <Button variant='primary'>Close</Button> */}
        <Button variant='primary'>Print</Button>
        <Button variant='primary'>Add New</Button>
    </Col>
}