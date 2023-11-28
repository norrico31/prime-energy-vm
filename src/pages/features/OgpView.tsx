import { useState, useEffect } from 'react'
import { Modal, Form, Space, Row, Col, Tag, Skeleton } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { ColumnsType } from 'antd/es/table'
import dayjs, { Dayjs } from 'dayjs'
import { Table, Button, ButtonActions, ListViewHeader } from '../components'
import { GET, DELETE } from '../../shared/utils/fetch'

export default function OgpView() {
    const { equipmentId } = useParams()
    const navigate = useNavigate()
    const [isModalShow, setIsModalShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const [selectedData, setSelectedData] = useState<TTransaction<Dayjs> | undefined>(undefined);
    const [dataSource, setDataSource] = useState<TTransaction<Dayjs>[]>([])

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

    const columns = renderColumns({ loading, deleteData, navigate: editNavigate })

    const onCancel = () => {
        setSelectedData(undefined)
        setIsModalShow(false)
    }

    return loading ? <Skeleton /> : (
        <>
            <Row className='mb-4'>
                <h3>OGP</h3>
            </Row>
            <ListViewHeader
                handleCreate={() => navigate(`/ogp/${equipmentId}/form`)}
            />
            <Table<TTransaction<Dayjs>> loading={loading} columns={columns} dataSource={dataSource} isSizeChanger />
            <ModalView
                open={isModalShow}
                selectedData={selectedData}
                onCancel={onCancel}
            />
        </>
    )
}

export function renderColumns({ loading, navigate, deleteData }: { loading: boolean; navigate: (id: string) => void; deleteData: (id: string) => Promise<unknown> }) {
    const columns: ColumnsType<TTransaction<Dayjs>> = [
        {
            title: 'Ref No.',
            dataIndex: 'ref_no',
            key: 'ref_no',
            // width: 120
        },
        {
            title: 'Data Raised',
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
            render: (_, rec) => <Tag bordered={false} style={{ borderRadius: 0, color: '#fff', background: rec?.availability.name.toLocaleLowerCase() === 'green' ? '#009c15' : rec?.availability.name.toLocaleLowerCase() === 'yellow' ? '#ebfc05' : 'red', width: 60, textAlign: 'center' }}>{rec?.availability?.name}</Tag>,
            // width: 200,
        },
        {
            title: 'Integrity',
            dataIndex: 'integrity',
            key: 'integrity',
            align: 'center',
            render: (_, rec) => <Tag bordered={false} style={{ borderRadius: 0, color: '#fff', background: rec?.integrity.name.toLocaleLowerCase() === 'green' ? '#009c15' : rec?.integrity.name.toLocaleLowerCase() === 'yellow' ? '#ebfc05' : 'red', width: 60, textAlign: 'center' }}>{rec?.integrity?.name}</Tag>,
            // width: 200,
        },
        {
            title: 'Threat Classification',
            dataIndex: 'threat_classification',
            key: 'threat_classification',
            render: (_, rec) => {
                return (rec.is_longterm === '1' ? 'Long' : 'Short') + ' Term'
            }
            // width: 200,
        },
        {
            title: 'Threat Owner',
            dataIndex: 'threat_owner',
            key: 'threat_owner',
            render: (_, rec) => {
                console.log(rec)
                return rec?.threat_owner.label
            }
            // width: 200,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, rec) => rec?.status.name
            // width: 200,
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (_, record) => (
                <Space>
                    <div></div>
                    <ButtonActions
                        loading={loading}
                        editData={() => navigate(record.id)}
                        deleteData={() => deleteData(record?.id)}
                        dataTitle={record.name}
                    // dataDescription={record.!}
                    />
                </Space>
            ),
        },
    ]
    return columns
}


type ModalProps = {
    open: boolean;
    onCancel: () => void
    selectedData?: TTransaction<Dayjs>
}
function ModalView({ open, onCancel, selectedData, }: ModalProps) {
    const [form] = Form.useForm()
    console.log(form)
    return (
        <Modal open={open} onCancel={onCancel} footer={null} title={`OGP - ${selectedData ? 'Edit' : 'Create'}`} forceRender>

            <Row>
                <Col xs={12} md={8}>
                    {JSON.stringify(selectedData, null, 2)}
                </Col>
                {/* <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col> */}
            </Row>

            {/* <Row>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row> */}
            <Button variant='primary' onClick={onCancel}>Close</Button>
        </Modal>
    );
}