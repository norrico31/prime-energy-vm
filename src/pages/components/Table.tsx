import { PropsWithChildren } from 'react'
import BootstrapTable from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import { Pagination } from '.'

type Table = {
    loading: boolean
    columns?: TableColHead
    pageProps: PageProps
}


const mainColumns: TableColHead = [
    {
        colHead: 'Ref No.',
    },
    {
        colHead: 'Data Added',
    },
    {
        colHead: 'Vulnerability Title',
    },
    {
        colHead: 'Availability',
    },
    {
        colHead: 'Integrity',
    },
    {
        colHead: 'Threat Classification',
    },
    {
        colHead: 'Threat Owner',
    },
    {
        colHead: 'Status',
    },
    {
        colHead: 'Action',
    },
]

export default function Table({ columns, loading, pageProps, children }: PropsWithChildren<Table>) {
    const renderCols = columns !== undefined ? columns : mainColumns
    return loading ? <Spinner animation="border" />
        : <div className='text-center'>
            <BootstrapTable responsive="sm" size='sm' variant={undefined} className='table-component-bg mt-3'>
                <thead>
                    <tr>
                        {renderCols.map((c, idx) => (
                            <th key={idx}>{c.colHead}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </BootstrapTable>
            <Pagination {...pageProps} />
        </div>
}
