import { Outlet } from 'react-router-dom'
import { PageHeading } from './components'

export default function Swp() {
    return <>
        <PageHeading title='SWP' onClick={() => alert('print report swp')} />
        <Outlet />
    </>
}
