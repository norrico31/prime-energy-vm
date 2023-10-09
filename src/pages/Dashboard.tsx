import { CardList } from '../components'

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
    return <CardList
        data={data}
    />
}
