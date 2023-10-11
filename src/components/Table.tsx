import { PropsWithChildren } from 'react'
import BootstrapTable from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'
import { Pagination } from '.'

type Table = {
    loading: boolean
    columns: TableColHead
    pageProps: PageProps
}

export default function Table({ loading, columns, pageProps, children }: PropsWithChildren<Table>) {
    return loading ? <Spinner animation="border" />
        : <div className='p-3 text-center'>
            <BootstrapTable responsive="sm" bordered size='sm' variant={undefined}>
                <thead>
                    <tr>
                        {columns.map((c, idx) => (
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
