import { Row } from 'react-bootstrap'
import { CardList } from '../../components'

// TODO: FETCH DATA HERE
export default function PipelineLists() {
    const data = [
        {
            title: 'WELL',
            id: '1',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list 1 ' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list 2 ' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list 3' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'unavail', text: 'well list' },
                { id: '5', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list last' },
            ]
        },
        {
            title: 'WELL1',
            id: '2',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'affected', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '5', statusAvailability: 'unavail', statusIntegrity: 'unavail', text: 'well list' },
            ]
        },
    ]
    return (
        <Row className='card-list'>
            <CardList data={data} to='/swp' />
        </Row>
    )
}
