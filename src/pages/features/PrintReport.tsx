import React from 'react'
import { Row, Col } from 'antd'
import { Button } from '../components'
import { Table } from 'react-bootstrap'

type Props = {
    title: string
}

export default function PrintReport({ title }: Props) {
    return (
        <>
            <h3>{title} Print Reports</h3>
            <hr />
            <Row justify='end'>
                <Col>
                    <Button variant='primary'>Export SWP Print Report</Button>
                </Col>
            </Row>
            <div className='mt-3'>
                <Table responsive="lg" bordered size='sm' variant={undefined}>
                    <thead className="text-center">
                        <tr>
                            <th >Ref No.</th>
                            <th >Date Added</th>
                            <th >Vulnerability Title</th>
                            <th >Availability</th>
                            <th >Integrity</th>
                            <th >Threat Owner</th>
                            <th >Status</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td >SWP0010</td>
                            <td >2023/10/11</td>
                            <td >Vulnerability Title</td>
                            <td >Red</td>
                            <td >Yellow</td>
                            <td>Denn Arriola</td>
                            <td>Open</td>
                        </tr>
                        <tr>
                            <td >SWP0010</td>
                            <td >2023/10/11</td>
                            <td >Vulnerability Title</td>
                            <td >Red</td>
                            <td >Yellow</td>
                            <td>Denn Arriola</td>
                            <td>Open</td>
                        </tr>
                        <tr>
                            <td >SWP0010</td>
                            <td >2023/10/11</td>
                            <td >Vulnerability Title</td>
                            <td >Red</td>
                            <td >Yellow</td>
                            <td>Denn Arriola</td>
                            <td>Open</td>
                        </tr>
                        <tr>
                            <td >SWP0010</td>
                            <td >2023/10/11</td>
                            <td >Vulnerability Title</td>
                            <td >Red</td>
                            <td >Yellow</td>
                            <td>Denn Arriola</td>
                            <td>Open</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}
