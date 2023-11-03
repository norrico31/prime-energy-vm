import { Row } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom'
import { CardList } from '../../components'

export default function OgpLists() {
    const { data } = useOutletContext<{ data: CardData }>()
    return (
        <Row className='card-list justify-content-center px-5'>
            <CardList data={data} to='/ogp' />
        </Row>
    )
}
