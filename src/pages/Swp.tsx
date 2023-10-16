import { CardList } from "../components"

export default function Swp() {
    const data = [
        {
            title: 'WELL',
            id: '1',
            lists: [
                { statusAvailability: 'avail', statusIntegrity: 'affected', text: 'tulala' },
                { statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'unavail', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
            ]
        },
        {
            title: 'WELL1',
            id: '2',
            lists: [
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'affected', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'affected', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'unavail', statusIntegrity: 'unavail', text: 'tulala' },
            ]
        },
        {
            title: 'WELL2121212',
            id: '3',
            lists: [
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'tulala' },
                { statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                // { statusAvailability: 'affected', statusIntegrity: 'unavail', text: 'tulala' },
                // { statusAvailability: 'avail', statusIntegrity: 'affected', text: 'tulala' },
            ]
        },
    ]
    return <>
        <CardList
            to='/swp/create'
            data={data}
        />
    </>
}
