import { useState, useEffect } from 'react'
import { Row, } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthUser } from '../../shared/contexts/AuthUser'
import { Dayjs } from 'dayjs'
import { ListViewHeader, Table } from '../components'
import { renderColumns } from './OgpView'
import { GET, DELETE } from '../../shared/utils/fetch'

export default function SwpView() {
    const { equipmentId } = useParams()
    const navigate = useNavigate()
    const { mapPermission } = useAuthUser()
    const [loading, setLoading] = useState(true)
    const [dataSource, setDataSource] = useState<TTransaction<Dayjs>[]>([])
    const hasUserEdit = mapPermission.has('Transactions Management - Allow Edit')
    const hasUserDelete = mapPermission.has('Transactions Management - Allow Delete')

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal)
        return () => controller.abort()
    }, [])

    async function fetchData(signal?: AbortSignal, params?: ApiParams) {
        setLoading(true)
        try {
            const res = await GET<ApiSuccess<TTransaction<Dayjs>[]>>('/transactions?equipment=' + equipmentId, signal!, params)
            setDataSource(res.data.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    const deleteData = (id: string) => DELETE('/swp/' + id).finally((fetchData))
    const editNavigate = (id: string) => navigate(`/swp/${equipmentId}/edit/${id}`)

    const columns = renderColumns({ loading, deleteData, navigate: editNavigate, hasUserEdit, hasUserDelete })

    return <>
        <Row className='mb-4'>
            <h3>SWP</h3>
        </Row>
        <ListViewHeader
            handleCreate={() => navigate(`/swp/${equipmentId}/form`)}
            equipmentId={equipmentId!}
        />
        <Table<TTransaction<Dayjs>> loading={loading} columns={columns} dataSource={dataSource} isSizeChanger />
    </>
}