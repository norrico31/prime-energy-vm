import { createElement } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { Button } from '.';

export default function PageHeading(props: { title: string; onClick: () => void }) {
    const { pathname } = useLocation()

    // TO CHANGE
    const title = createElement(pathname.includes('form') ? 'h4' : 'h3', { className: 'text-color-gray my-2' }, <>
        {props.title} {(pathname.includes('form') || pathname.includes('edit') ? pathname.includes('edit') ? ' (Edit) ' : ' (Create)' : !(pathname !== '/swp' && pathname !== '/ogp') ? '' : '')}
    </>)

    return <Row className='align-items-center mb-3'>
        <Col xs={7} sm={7} md={7} lg={7}>
            {title}
        </Col>
        {(!pathname.includes('form') && !pathname.includes('view')) && !pathname.includes('edit') &&
            <Col className='d-flex justify-content-end gap-4' >
                <Button variant='primary' title='Print Report' className='btn-print-report' onClick={props.onClick}>Print Report - {props.title}</Button>
            </Col>
        }
    </Row>
}