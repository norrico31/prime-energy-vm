import { Row } from 'react-bootstrap'
import { DataLists } from '../components'

// TODO: FETCH DATA HERE
export default function CriticalEquipmentList() {
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
    ]
    return (
        <Row className='card-list'>
            <DataLists dataList={data} to='/critical-equipment' />
        </Row>
    )
}
