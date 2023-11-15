import { useState, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Modal, Col, Row, Container } from 'react-bootstrap'
import { useDataResource } from '../../shared/utils/fetch'
import { Table, Button, ButtonActions, ListViewHeader } from '../components'

const reducerState: ReducerState = {
    view: false,
    disable: false,
    selectedData: undefined,
    currentPage: 1,
    pageSize: 10,
}

const MODAL_VIEW = 'MODAL_VIEW'
const MODAL_DELETE = 'MODAL_DELETE'
const CURRENT_PAGE = 'CURRENT_PAGE'
const PAGE_SIZE = 'PAGE_SIZE'
const ON_HIDE = 'ON_HIDE'

function reducer<T>(state: ReducerState, action: Action<T>) {
    switch (action.type) {
        case MODAL_VIEW: {
            return {
                ...state,
                view: true,
                selectedData: action.payload
            }
        }
        case MODAL_DELETE: {
            return {
                ...state,
                disable: true,
                selectedData: action.payload
            }
        }
        case CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case PAGE_SIZE: {
            // TODO
            // const pageSizeStorage = localStorage.getItem('pageSize')
            return {
                ...state,
                pageSize: action.payload
            }
        }
        case ON_HIDE: {
            return {
                ...state,
                view: false,
                disable: false,
                selectedData: undefined
            }
        }
        default: throw Error('Unknown action: ' + action);
    }
}

const url = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'
const urlPost = 'https://hrportal.redcoresolutions.com/passthru/api/backend/time_keepings/whos/in?date=2023-10-05'


export default function SwpView() {
    const { swpId } = useParams()
    const navigate = useNavigate()
    // const [search, searchVal, inputChange] = useDebounceSearch()
    const [{ currentPage, pageSize, }, dispatch] = useReducer((state: typeof reducerState, action: Action<AuditLogs>) => reducer(state, action), reducerState)
    const { data, isLoading } = useDataResource<ApiSuccess<AuditLogs[]>, { id: string }>({ queryKey: 'getWhos', paths: { get: url, post: urlPost }, page: currentPage, limit: pageSize })
    const [selectedData, setSelectedData] = useState<AuditLogs | undefined>(undefined)

    const paginationProps: PageProps = {
        active: data?.data?.current_page ?? 0,
        total: data?.data?.total ?? 0,
        perPage: data?.data?.per_page ?? 0,
        lastPage: data?.data?.last_page ?? 0,
        setCurrentPage: (payload: number) => dispatch({ type: CURRENT_PAGE, payload })
    }

    // const pageSizeChange = (v: React.ChangeEvent<HTMLSelectElement>) => {
    //     dispatch({ type: CURRENT_PAGE, payload: 1 })
    //     dispatch({ type: PAGE_SIZE, payload: isNaN(+v.target.value) ? 10 : parseInt(v.target.value) })
    // }

    const onHide = () => {
        dispatch({ type: ON_HIDE })
        setSelectedData(undefined)
    }

    return (
        <>
            <ListViewHeader
                handleCreate={() => navigate(`/swp/${swpId}/form`)}
            />
            <Table
                loading={false}
                pageProps={paginationProps}
            >
                {data?.data.data.map((d, idx) => {
                    return <tr key={d.id}>
                        {/* <td >{d.user.full_name}</td> */}
                        <td >sample - {idx}</td>
                        <td >{d.date}</td>
                        <td >{d.account_type}</td>
                        <td >{d.action}</td>
                        <td className='d-flex justify-content-center gap-1'>
                            <ButtonActions
                                loading={isLoading}
                                viewData={() => setSelectedData(d)} // DISPLAY IN MODAL
                                editData={() => navigate(`/swp/${swpId}/edit/${d.id}`)}
                                disabled={() => alert('DISABLE SELECTED SWP')}
                            />
                        </td>
                    </tr>
                })}
            </Table>
            <ModalView
                show={!!selectedData}
                selectedData={selectedData}
                onHide={onHide}
            />
        </>
    )
}


function ModalView({ selectedData, ...restProps }: { show: boolean; onHide: () => void; selectedData: AuditLogs | undefined }) {
    return (
        <Modal {...restProps} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    SWP - View
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="grid-example">
                <Container>
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
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={restProps.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}