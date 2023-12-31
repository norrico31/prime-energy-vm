import { useState, useEffect } from 'react'
import { Space, Row, Tag, Skeleton } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthUser } from '../../shared/contexts/AuthUser'
import { ColumnsType } from 'antd/es/table'
import dayjs, { Dayjs } from 'dayjs'
import { Table, ButtonActions, ListViewHeader } from '../components'
import { GET, DELETE } from '../../shared/utils/fetch'

export default function OgpView() {
    const { equipmentId } = useParams()
    const { mapPermission } = useAuthUser()
    const navigate = useNavigate()
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

    const deleteData = (id: string) => DELETE('/ogp/' + id).finally((fetchData))
    const editNavigate = (id: string) => navigate(`/ogp/${equipmentId}/edit/${id}`)

    const columns = renderTableColumns({ loading, deleteData, navigate: editNavigate, hasUserDelete, hasUserEdit })

    return loading ? <Skeleton /> : (
        <>
            <Row className='mb-4'>
                <h3>OGP</h3>
            </Row>
            <ListViewHeader
                handleCreate={() => navigate(`/ogp/${equipmentId}/form`)}
                equipmentId={equipmentId!}
            />
            <Table<TTransaction<Dayjs>> loading={loading} columns={columns} dataSource={dataSource} isSizeChanger />
        </>
    )
}

export const renderTableColumns = ({ loading, navigate, deleteData, hasUserEdit, hasUserDelete }: { loading: boolean; navigate: (id: string) => void; deleteData: (id: string) => Promise<unknown>; hasUserEdit?: boolean; hasUserDelete?: boolean }) => {
    const columns: ColumnsType<TTransaction<Dayjs>> = [
        {
            title: 'Ref No.',
            dataIndex: 'ref_no',
            key: 'ref_no',
            // width: 120
        },
        {
            title: 'Date Raised',
            dataIndex: 'date_raised',
            key: 'date_raised',
            render: (_, rec) => dayjs(rec?.date_raised).format('YYYY-MM-DD')
            // width: 200,
        },
        {
            title: 'Vulnerability Title',
            dataIndex: 'vulnerability_title',
            key: 'vulnerability_title',
            // width: 200,
        },
        {
            title: 'Availability',
            dataIndex: 'availability',
            key: 'availability',
            align: 'center',
            render: (_, rec) => <Tag bordered={false} style={{ borderRadius: 0, color: '#fff', background: rec?.availability.name.toLocaleLowerCase() === 'green' ? '#009c15' : rec?.availability.name.toLocaleLowerCase() === 'yellow' ? '#f69a22' : 'red', width: 60, textAlign: 'center' }}>{rec?.availability?.name}</Tag>,
            // width: 200,
        },
        {
            title: 'Integrity',
            dataIndex: 'integrity',
            key: 'integrity',
            align: 'center',
            render: (_, rec) => <Tag bordered={false} style={{ borderRadius: 0, color: '#fff', background: rec?.integrity.name.toLocaleLowerCase() === 'green' ? '#009c15' : rec?.integrity.name.toLocaleLowerCase() === 'yellow' ? '#f69a22' : 'red', width: 60, textAlign: 'center' }}>{rec?.integrity?.name}</Tag>,
            // width: 200,
        },
        {
            title: 'Threat Classification',
            dataIndex: 'threat_classification',
            key: 'threat_classification',
            render: (_, rec) => (rec.is_longterm === '1' ? 'Long' : 'Short') + ' Term'
            // width: 200,
        },
        {
            title: 'Threat Owner',
            dataIndex: 'threat_owner',
            key: 'threat_owner',
            render: (_, rec) => rec?.threat_owner.label
            // width: 200,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, rec) => rec?.status?.name
            // width: 200,
        },
        (hasUserDelete || hasUserEdit ? {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <Space>
                    <div></div>
                    <ButtonActions
                        loading={loading}
                        editData={hasUserEdit ? () => navigate(record.id) : false}
                        deleteData={hasUserDelete ? () => deleteData(record?.id) : false}
                        dataTitle={record?.name ?? record.equipment?.name}
                        dataDescription={record?.risk_description}
                    />
                </Space>
            ),
        } : {}),
    ]
    return columns
}