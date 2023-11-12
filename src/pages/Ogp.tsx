import { Outlet } from 'react-router-dom'
import { PageHeading } from './components'

export default function Ogp() {
    return <>
        <PageHeading title='OGP' onClick={() => alert('print report ogp')} />
        <Outlet />
    </>
}
