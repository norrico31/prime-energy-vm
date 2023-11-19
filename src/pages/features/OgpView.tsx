import { useState, useEffect } from 'react'
import { Modal, Form, Space, Row, Col } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { Table, Button, ButtonActions, ListViewHeader } from '../components'
import { ColumnsType } from 'antd/es/table'

import { GET, DELETE } from '../../shared/utils/fetch'
export default function OgpView() {
    const { equipmentId } = useParams()
    const navigate = useNavigate()
    const [isModalShow, setIsModalShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const [selectedData, setSelectedData] = useState<TStatus | undefined>(undefined);
    const [dataSource, setDataSource] = useState<TStatus[]>([])

    useEffect(() => {
        const controller = new AbortController();
        fetchData(controller.signal)
        return () => controller.abort()
    }, [])

    async function fetchData(signal?: AbortSignal, params?: ApiParams) {
        setLoading(true)
        try {
            const res = await GET<ApiSuccess<TStatus[]>>('/ogp', signal!, params)
            setDataSource(res.data.data)
            return res
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    const columns: ColumnsType<TStatus> = [
        {
            title: 'Ref No.',
            dataIndex: 'ref_no',
            key: 'ref_no',
            // width: 120
        },
        {
            title: 'Data Added',
            dataIndex: 'data_added',
            key: 'data_added',
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
            // width: 200,
        },
        {
            title: 'Integrity',
            dataIndex: 'integrity',
            key: 'integrity',
            // width: 200,
        },
        {
            title: 'Threat Classification',
            dataIndex: 'threat_classification',
            key: 'threat_classification',
            // width: 200,
        },
        {
            title: 'Threat Owner',
            dataIndex: 'threat_owner',
            key: 'threat_owner',
            // width: 200,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
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
                        editData={() => {
                            setIsModalShow(true)
                            setSelectedData(record)
                        }}
                        deleteData={() => DELETE('/ogp/' + record.id).finally((fetchData))}
                        dataTitle={record.name}
                        dataDescription={record.description!}
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
            <Table<TStatus> loading={false} columns={columns} dataSource={dataSource} isSizeChanger />
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
    selectedData?: TStatus
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