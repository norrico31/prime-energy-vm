import { Table } from "react-bootstrap"
import { Button } from "./components"

export default function Pipelines() {
    return <div>
        <Table responsive="lg" bordered size='sm' variant={undefined} className="table-headings-bg">
            <thead className="text-center">
                <tr>
                    <th rowSpan={3}>Severity</th>
                    <th colSpan={4}>CONSEQUENCES</th>
                    <th colSpan={5}>INCREASE LIKEHOOD</th>
                </tr>
                <tr>
                    <th colSpan={1} rowSpan={2}>People</th>
                    <th colSpan={1} rowSpan={2}>Assets</th>
                    <th colSpan={1} rowSpan={2}>Community</th>
                    <th colSpan={1} rowSpan={2}>Environment</th>

                    <th colSpan={0}>A</th>
                    <th colSpan={0}>B</th>
                    <th colSpan={0}>C</th>
                    <th colSpan={0}>D</th>
                    <th colSpan={0}>E</th>
                </tr>
                <tr>
                    <th colSpan={1} rowSpan={3} className="table-td-text-sm">Never heard of in the industry</th>
                    <th colSpan={1} rowSpan={3} className="table-td-text-sm">heard of in the industry</th>
                    <th colSpan={1} rowSpan={3} className="table-td-text-sm">Has happened in the Organization or more than once per year in the industry</th>
                    <th colSpan={1} rowSpan={3} className="table-td-text-sm">Has happened at the Location or more than once per year in the Organization</th>
                    <th colSpan={1} rowSpan={3} className="table-td-text-sm">Has happened more than once per year at the Location</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td >0</td>
                    <td >No injury or health effect</td>
                    <td >No damage</td>
                    <td >No effect</td>
                    <td >No impact</td>
                    <td className='bg-light-blue'>0*</td>
                    <td className='bg-light-blue'>0*</td>
                    <td className='bg-light-blue'>0*</td>
                    <td className='bg-light-blue'>0*</td>
                    <td className='bg-light-blue'>0*</td>
                </tr>
                <tr>
                    <td >1</td>
                    <td >Slight injury or health effect</td>
                    <td >Slight damage</td>
                    <td >Slight effect</td>
                    <td >Slight impact</td>
                    <td className='bg-light-blue'>0</td>
                    <td className='bg-light-blue'>1</td>
                    <td className='bg-blue'>0</td>
                    <td className='bg-blue'>1</td>
                    <td className='bg-blue'>0</td>
                </tr>
                <tr>
                    <td >2</td>
                    <td >Minor injury or health effect</td>
                    <td >Minor damage</td>
                    <td >Minor effect</td>
                    <td >Minor impact</td>
                    <td className='bg-light-blue'>0</td>
                    <td className='bg-blue'>1</td>
                    <td className='bg-blue'>0</td>
                    <td className='bg-yellow'>1</td>
                    <td className='bg-yellow'>0</td>
                </tr>
                <tr>
                    <td >3</td>
                    <td >Major injury or health effect</td>
                    <td >Moderate damage</td>
                    <td >Moderate effect</td>
                    <td >Moderate impact</td>
                    <td className='bg-blue'>0</td>
                    <td className='bg-blue'>0</td>
                    <td className='bg-yellow'>0</td>
                    <td className='bg-yellow'>0</td>
                    <td className='bg-red'>0</td>
                </tr>
                <tr>
                    <td >4</td>
                    <td >PTD or up to 3 fatalities</td>
                    <td >Major damage</td>
                    <td >Major effect</td>
                    <td >Major impact</td>
                    <td className='bg-blue'>0</td>
                    <td className='bg-yellow'>2</td>
                    <td className='bg-yellow'>0</td>
                    <td className='bg-red'>0</td>
                    <td className='bg-red'>0</td>
                </tr>
                <tr>
                    <td >5</td>
                    <td >More than 3 fatalities</td>
                    <td >Massive damage</td>
                    <td >Massive effect</td>
                    <td >Massive impact</td>
                    <td className='bg-yellow'>0</td>
                    <td className='bg-yellow'>2</td>
                    <td className='bg-red'>0</td>
                    <td className='bg-red'>0</td>
                    <td className='bg-red'>0</td>
                </tr>
            </tbody>
        </Table>
        <div className="pipelines-table-actions d-flex justify-content-center w-50 m-auto mt-5 gap-3">
            <Button variant="outline-dark" onClick={() => alert('ahahahaha')}>View RAM Priority</Button>
            <Button variant="outline-dark" onClick={() => alert('ahahahaha')}>View Combined RAM Priority</Button>
            <Button variant="outline-dark" onClick={() => alert('ahahahaha')}>View Top 15 RAM Priority</Button>
        </div>
    </div>
}
