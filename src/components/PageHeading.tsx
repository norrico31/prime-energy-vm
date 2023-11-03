import { Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { Button } from '.'

export default function PageHeading(props: { title: string }) {
    const { pathname } = useLocation()
    return <Row className='align-items-center mb-3'>
        <Col xs={2} sm={2} md={2} lg={2}>
            <h2 className='text-color-gray my-2'>{props.title} {(pathname.includes('form') || pathname.includes('edit') ? pathname.includes('edit') ? '-Edit ' : '- Create' : !(pathname !== '/swp' && pathname !== '/ogp') ? '' : '')}</h2>
        </Col>
        <Col className='d-flex justify-content-end gap-4' >
            <Button variant='primary' title='Print Report' className='btn-print-report' onClick={() => alert('download')}>Print Report - {props.title.toUpperCase()}</Button>
        </Col>
    </Row>
}