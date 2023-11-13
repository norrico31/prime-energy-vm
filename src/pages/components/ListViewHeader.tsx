import { Col, Container, Row, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import useWindowSize from "../../shared/hooks/useWindowResize"
import { Button } from "."

type Props = Partial<ListViewColEndProps> & {
    data?: null
}

export default function ListViewHeader(props: Props) {

    return <Container>
        <Row>
            <Col md lg>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEquipmentTags">
                    <Form.Label column xs="5">
                        Equipment Tags
                    </Form.Label>
                    <Col xs="7">
                        <Form.Control plaintext readOnly style={{ border: '1px solid #000', padding: '3px 11px' }} value="SAMPLE-TAG01" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEqupmentname">
                    <Form.Label column xs="5">
                        Equipment Name
                    </Form.Label>
                    <Col xs="7">
                        <Form.Control plaintext readOnly style={{ border: '1px solid #000', padding: '3px 11px' }} value="RCS-2023-(1)" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextSystems">
                    <Form.Label column xs="5">
                        Systems
                    </Form.Label>
                    <Col xs="7">
                        <Form.Control plaintext readOnly style={{ border: '1px solid #000', padding: '3px 11px' }} value="MACHINE-1" />
                    </Col>
                </Form.Group>
            </Col>
            <Col md lg>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEquipmentTags">
                    <Form.Label column xs="5">
                        Equipment ID
                    </Form.Label>
                    <Col xs="7">
                        <Form.Control plaintext readOnly style={{ border: '1px solid #000', padding: '3px 11px' }} value="SAMPLE-TAG01" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex justify-content-center" controlId="formPlaintextEqupmentname">
                    <Form.Label column xs="5">
                        Location
                    </Form.Label>
                    <Col xs="7">
                        <Form.Control plaintext readOnly style={{ border: '1px solid #000', padding: '3px 11px' }} value="RCS-2023-(1)" />
                    </Col>
                </Form.Group>
            </Col>
            {/* xs={2 && 10} */}
            <ListViewColEnd
                handlePrint={props?.handlePrint ?? (() => null)}
                handleCreate={props?.handleCreate ?? (() => null)}
            />
        </Row>
    </Container>
}

type ListViewColEndProps = {
    handlePrint: () => void
    handleCreate: () => void
}

function ListViewColEnd(props: ListViewColEndProps) {
    const navigate = useNavigate()
    const { width } = useWindowSize()
    return <Col xs={width > 768 ? 2 : 10} className={`d-flex align-items-end ${width > 768 ? 'flex-column' : ''} gap-3`}>
        <Button variant='primary' onClick={() => navigate(-1)}>Close</Button>
        <Button variant='primary' onClick={props.handlePrint}>Print</Button>
        <Button variant='primary' onClick={props.handleCreate}>Add New</Button>
    </Col>
}