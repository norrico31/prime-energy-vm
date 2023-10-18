import { useLocation } from 'react-router-dom'

export default function PageHeading(props: { title: string }) {
    const { pathname } = useLocation()
    return <h2 className='text-color-gray my-2'>{props.title} {(pathname.includes('form') || pathname.includes('edit') ? pathname.includes('edit') ? '-Edit ' : '- Create' : '')}</h2>
}
