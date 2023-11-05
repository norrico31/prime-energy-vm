import React from 'react'
import { Col, Form } from 'react-bootstrap';

type Props = {
    value: string | number
    onChange: (v: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function PageSize({ value, onChange }: Props) {
    return (
        <Form.Group as={Col} xs={10} sm={6} md={4} lg={4} xl={3} controlId="formGridSelect">
            <Form.Label>Page Size</Form.Label>
            <Form.Select aria-label="Default select example" value={value} onChange={onChange}>
                {[10, 25, 50, 100].map(p => (
                    <option key={p} value={p}>{p}</option>
                ))}
            </Form.Select>
        </Form.Group>
    )
}
