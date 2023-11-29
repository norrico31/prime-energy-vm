import { useEffect, useState } from "react"
import { Col, Container, Row, Form } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import useWindowSize from "../../shared/hooks/useWindowResize"
import { Button } from "."

import { GET } from '../../shared/utils/fetch'

type Props = Partial<ListViewColEndProps> & {
    data?: null
}
// TODO: REFACTOR STYLES TO ANTD
export default function ListViewHeader(props: Props) {
    const params = useParams()
    const [equipment, setequipment] = useState<TEquipment | undefined>(undefined);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            try {
                const res = await GET<ApiData<TEquipment>>('/equipments/' + params?.equipmentId, controller.signal)
                setequipment(res.data)
            } catch (error) {
                return error
            }
        })()

        return () => {
            controller.abort()
        }
    }, []);

    return <Container>
        <Row>
            <Col xs={4}>
                <Form.Group as={Row} className="mb-3 d-flex " controlId="formPlaintextEquipmentTags">
                    <Form.Label column xs="4" style={{ padding: 0 }}>
                        Equipment Tags
                    </Form.Label>
                    <Col xs="8">
                        <Form.Control plaintext readOnly style={{ border: '1px solid #000', padding: '3px 11px' }} value={equipment?.equipment_tag} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex " controlId="formPlaintextEqupmentname">
                    <Form.Label column xs="4" style={{ padding: 0 }}>
                        Equipment Name
                    </Form.Label>
                    <Col xs="8">
                        <Form.Control plaintext readOnly style={{ border: '1px solid #000', padding: '3px 11px' }} value={equipment?.name} />
                    </Col>
                </Form.Group>
            </Col>
            <Col xs={4}>
                <Form.Group as={Row} className="mb-3 d-flex " controlId="formPlaintextSystems">
                    <Form.Label column xs="4" style={{ padding: 0 }}>
                        Systems
                    </Form.Label>
                    <Col xs="8">
                        <Form.Control plaintext readOnly style={{ border: '1px solid #000', padding: '3px 11px' }} value={equipment?.system.name} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 d-flex " controlId="formPlaintextEqupmentname">
                    <Form.Label column xs="4" style={{ padding: 0 }}>
                        Location
                    </Form.Label>
                    <Col xs="8">
                        <Form.Control plaintext readOnly style={{ border: '1px solid #000', padding: '3px 11px' }} value={equipment?.system?.site.name} />
                    </Col>
                </Form.Group>
            </Col>
            <ListViewColEnd
                handlePrint={props?.handlePrint ?? (() => null)}
                handleCreate={props?.handleCreate ?? (() => null)}
            />
            <Form.Group className="mb-3 d-flex gap-3 align-items-center" controlId="formPlaintextEqupmentname" style={{ padding: 0 }}>
                <Form.Label style={{ padding: 0 }}>
                    Description
                </Form.Label>
                <Col xs="7">
                    <Form.Control plaintext readOnly style={{ border: '1px solid #000', padding: '3px 11px' }} value={equipment?.description} />
                </Col>
            </Form.Group>
            {/* xs={2 && 10} */}

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
    return <Col xs={width > 768 ? 4 : 10} className={`d-flex justify-content-end  align-items-end ${width > 768 ? 'flex-column' : ''} gap-3`}>
        <Button variant='primary' onClick={() => navigate(-1)}>Close</Button>
        <Button variant='primary' onClick={props.handlePrint}>Print</Button>
        <Button variant='primary' onClick={props.handleCreate}>Add New</Button>
    </Col>
}