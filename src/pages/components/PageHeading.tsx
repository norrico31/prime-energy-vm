import { Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export default function PageHeading(props: { title: string; children: React.ReactNode }) {
    const { pathname } = useLocation()
    return <Row className='align-items-center mb-3'>
        <Col xs={3} sm={3} md={3} lg={3}>
            <h3 className='text-color-gray my-2'>{props.title} {(pathname.includes('form') || pathname.includes('edit') ? pathname.includes('edit') ? '-Edit ' : '- Create' : !(pathname !== '/swp' && pathname !== '/ogp') ? '' : '')}</h3>
        </Col>
        {props.children}
    </Row>
}