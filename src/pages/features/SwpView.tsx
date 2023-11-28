import { useState, useEffect } from 'react'
import { Modal, Form, Row, Col } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import { Dayjs } from 'dayjs'
import { Table, Button, ListViewHeader } from '../components'
import { renderColumns } from './OgpView'
import { GET, DELETE } from '../../shared/utils/fetch'

export default function SwpView() {
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

    const deleteData = (id: string) => DELETE('/swp/' + id).finally((fetchData))
    const editNavigate = (id: string) => navigate(`/swp/${equipmentId}/edit/${id}`)

    const columns = renderColumns({ loading, deleteData, navigate: editNavigate })


    const onCancel = () => {
        setSelectedData(undefined)
        setIsModalShow(false)
    }

    return (
        <>
            <Row className='mb-4'>
                <h3>SWP</h3>
            </Row>
            <ListViewHeader
                handleCreate={() => navigate(`/swp/${equipmentId}/form`)}
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



type ModalProps = {
    open: boolean;
    onCancel: () => void
    selectedData?: TTransaction<Dayjs>
}
function ModalView({ open, onCancel, selectedData, }: ModalProps) {
    const [form] = Form.useForm()
    console.log(form)
    return (
        <Modal open={open} onCancel={onCancel} footer={null} title={`SWP - ${selectedData ? 'Edit' : 'Create'}`} forceRender>

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