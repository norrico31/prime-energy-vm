import { useState, useEffect } from 'react'
import { Modal, Form, Space, Row, Col } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { Table, Button, ButtonActions, ListViewHeader } from '../components'
import { ColumnsType } from 'antd/es/table'

import { GET, DELETE } from '../../shared/utils/fetch'
import dayjs, { Dayjs } from 'dayjs'
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
            render: (_, rec) => rec?.availability?.name,
            // width: 200,
        },
        {
            title: 'Integrity',
            dataIndex: 'integrity',
            key: 'integrity',
            align: 'center',
            render: (_, rec) => rec?.integrity?.name,
            // width: 200,
        },
        {
            title: 'Threat Classification',
            dataIndex: 'threat_classification',
            key: 'threat_classification',
            render: (_, rec) => {
                return (rec.is_longterm ? 'Long' : 'Short') + ' Term'
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
                        editData={() => navigate(`/ogp/${equipmentId}/edit/${record.id}`)}
                        deleteData={() => DELETE('/ogp/' + record.id).finally((fetchData))}
                        dataTitle={record.name}
                    // dataDescription={record.!}
                    />
                </Space>
            ),
        },
    ]

    const onCancel = () => {
        setSelectedData(undefined)
        setIsModalShow(false)
    }

    return (
        <>
            <ListViewHeader
                handleCreate={() => navigate(`/ogp/${equipmentId}/form`)}
            />
            <Table<TTransaction<Dayjs>> loading={false} columns={columns} dataSource={dataSource} isSizeChanger />
            <ModalView
                open={isModalShow}
                selectedData={selectedData}
                onCancel={onCancel}
            />
        </>
    )
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