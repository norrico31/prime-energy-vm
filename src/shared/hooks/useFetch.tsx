import { useQuery, useQueries } from "@tanstack/react-query"
import { useNotifCtx } from "../contexts/Notification"

type Return<D> = Awaited<ReturnType<typeof fetchData<D>>>

async function fetchData<T>(reqUrl: string, params?: ApiParams): Promise<T> {
    const url = new URL(reqUrl)
    params && Object.entries(params).forEach(([k, v]) => {
        k != undefined && v != undefined && url.searchParams.append(k, v + '')
    })
    try {
        const res = await fetch(url.toString(), { method: 'GET' })
        const data = await res.json()
        return Promise.resolve(data.data ?? data satisfies T)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const useFetch = <T,>({ urls, ...restProps }: Fetch & Partial<ApiParams>) => {
    const { refetch, ...restQueries } = useQuery<Return<T>>({ queryKey: [urls.get, restProps], queryFn: () => fetchData(urls.get, restProps) })
    const { setType } = useNotifCtx()

    const createData = async <T extends FormData & Partial<{ '_method': 'PUT' }>>(data: T) => {
        try {
            const res = await fetch(urls?.post ?? '', { method: 'POST', body: JSON.stringify(data) })
            refetch()
            setType({ type: 'success', title: '', msg: '' })
            return await res.json()
        } catch (error) {
            return error
        }
    }

    const editData = async <T extends Partial<Common>>(data: T) => {
        try {
            const res = await fetch(urls?.put + `/${data?.id}` ?? '', { method: 'PUT', body: JSON.stringify(data) })
            setType({ type: 'update', title: '', msg: '' })
            refetch()
            return await res.json()
        } catch (error) {
            return error
        }
    }

    const deleteData = async (id: string) => {
        try {
            setType({ type: 'delete', title: '', msg: '' })
            refetch()
            return await fetch(urls?.delete ?? '', { method: 'DELETE', body: JSON.stringify(id) })
        } catch (error) {
            return error
        }
    }

    return { createData, editData, deleteData, ...restQueries }
}

export const useParallelFetch = ({ urls, k }: ParallelFetch) => useQueries({
    queries: urls.map((url) => {
        return {
            queryKey: [k, url],
            queryFn: () => fetchData(url),
        }
    }),
})