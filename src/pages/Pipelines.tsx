import { Outlet } from 'react-router-dom'
import { PageHeading } from './components'

export default function Pipelines() {
    return <>
        <PageHeading title='Pipelines' onClick={() => alert('print report pipelines')} />
        <Outlet />
    </>
}
