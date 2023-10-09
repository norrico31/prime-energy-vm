import { Container, Row } from 'react-bootstrap'
import { CardList } from '../components'
import Sample from './Sample'

export default function Dashboard() {
    const data = [
        {
            title: 'WELL',
            lists: [
                { statusAvailability: 'avail', statusIntegrity: 'affected', text: 'tulala' },
                { statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'unavail', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
            ]
        },
        {
            title: 'WELL 1',
            lists: [
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'affected', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'affected', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'unavail', statusIntegrity: 'unavail', text: 'tulala' },
            ]
        },
        {
            title: 'WELL 2',
            lists: [
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'affected', statusIntegrity: 'unavail', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'affected', text: 'tulala' },
            ]
        },
    ]
    return <Container fluid className='px-5' >
        <Row className='mb-4'>
            <h2 className='text-color-gray'>Dashboard</h2>
        </Row>
        <CardList
            data={data}
        />
        <Sample />
    </Container>
}
