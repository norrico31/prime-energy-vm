import { Row } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom'
import { CardList } from '../../components'

export default function PipelineLists() {
    const { data } = useOutletContext<{ data: CardData }>()
    return (
        <Row className='card-list px-5'>
            {/* <MainHead to='/swp/form' /> */}
            <CardList data={data} to='/swp' />
        </Row>
    )
}
