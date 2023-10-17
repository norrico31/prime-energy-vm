import { Outlet } from 'react-router-dom'
import { MainHead } from '../components'

export default function Swp() {
    const data = [
        {
            title: 'WELL',
            id: '1',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'tulala 1 ' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'tulala 2 ' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala 3' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'unavail', text: 'tulala' },
                { id: '5', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala last' },
            ]
        },
        {
            title: 'WELL1',
            id: '2',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { id: '2', statusAvailability: 'affected', statusIntegrity: 'avail', text: 'tulala' },
                { id: '3', statusAvailability: 'avail', statusIntegrity: 'affected', text: 'tulala' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { id: '5', statusAvailability: 'unavail', statusIntegrity: 'unavail', text: 'tulala' },
            ]
        },
        {
            title: 'WELL2121212',
            id: '3',
            lists: [
                { id: '1', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                { id: '2', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'tulala' },
                { id: '3', statusAvailability: 'unavail', statusIntegrity: 'avail', text: 'tulala' },
                { id: '4', statusAvailability: 'avail', statusIntegrity: 'avail', text: 'tulala' },
                // { id: '',statusAvailability: 'affected', statusIntegrity: 'unavail', text: 'tulala' },
                // { id: '',statusAvailability: 'avail', statusIntegrity: 'affected', text: 'tulala' },
            ]
        },
    ]
    return <>
        <h2 className='text-color-gray my-2'>SWP</h2>
        <Outlet context={{ data: data as typeof data }} />
    </>
}
