import { Outlet } from 'react-router-dom'
import { PageHeading } from '../components'

export default function Swp() {
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
        {
            title: 'WELL212121212312312312',
            id: '3',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'well list' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'well list' },
            ]
        },
    ]
    return <>
        <PageHeading title='Swp' />
        <Outlet context={{ data: data as typeof data }} />
    </>
}
