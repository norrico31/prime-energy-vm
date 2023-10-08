import { Container, Row } from 'react-bootstrap'
import { CardList } from '../components'

export default function Dashboard() {
    return <div>
        <Container fluid className='px-5' >
            <Row className='mb-4'>
                <h2 className='text-color-gray'>Dashboard</h2>
            </Row>
            <CardList
                data={{
                    title: 'WELL',
                    data: [
                        { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala malala' },
                        { statusAvailability: 'unavail', statusIntegrity: 'affected', text: 'tulala malala again' },
                        { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala malala again again' },
                        { statusAvailability: 'affected', statusIntegrity: 'unavail', text: 'tulala malala again again again' },
                        { statusAvailability: 'avail', statusIntegrity: 'affected', text: 'tulala malala again again again' },
                        { statusAvailability: 'unavail', statusIntegrity: 'affected', text: 'tulala malala again again again' },
                    ]
                }}
            />
        </Container>
    </div>
}
