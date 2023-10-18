import { Row } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom'
import { CardList, MainHead } from '../../components'

export default function SwpLists() {
    const { data } = useOutletContext<{ data: CardData }>()
    return (
        <Row className='card-list px-5'>
            {/* <MainHead to='/swp/form' /> */}
            <CardList data={data} to='/swp' />
        </Row>
    )
}
