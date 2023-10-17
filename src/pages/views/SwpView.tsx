import { useParams } from 'react-router-dom'
import { MainHead } from '../../components'

export default function SwpView() {
    const { id } = useParams()
    return (
        <div className='px-4'>
            <MainHead to={`/swp/${id}/create`} />
        </div>
    )
}
