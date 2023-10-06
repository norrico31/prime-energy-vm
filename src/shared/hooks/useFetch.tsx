import { useQuery, useQueries } from "@tanstack/react-query"

type Return<D> = Awaited<ReturnType<typeof fetchData<D>>>

async function fetchData<T>(reqUrl: string, params?: ApiParams): Promise<T> {
    const url = new URL(reqUrl)
    if (params) {
        for (const param in params) {
            const [k, v] = param
            if (k != undefined && v != undefined) {
                url.searchParams.append(k, v + '')
            }
        }
    }
    try {
        const res = await fetch(url.toString(), { method: 'GET' })
        const data = await res.json()
        return Promise.resolve(data.data.data ?? data.data satisfies T)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const useFetch = <T,>({ urls, ...restProps }: Fetch & Partial<ApiParams>) => {
    const { refetch, ...restQueries } = useQuery<Return<T>>({ queryKey: [urls.get], queryFn: () => fetchData(urls.get, restProps) })

    const createData = async <T,>(data: T) => {
        try {
            const res = await fetch(urls?.post ?? '', { method: 'POST', body: JSON.stringify(data) })
            // Add Notif 
            return await res.json()
        } catch (error) {
            return error
        } finally {
            refetch()
        }
    }

    const editData = async <T extends Partial<Common>>(data: T) => {
        try {
            // Add Notif 
            const res = await fetch(urls?.put + `/${data?.id}` ?? '', { method: 'PUT', body: JSON.stringify(data) })
            return await res.json()
        } catch (error) {
            return error
        } finally {
            refetch()
        }
    }

    const deleteData = async (id: string) => {
        try {
            // Add Notif 
            return await fetch(urls?.delete ?? '', { method: 'DELETE', body: JSON.stringify(id) })
        } catch (error) {
            return error
        } finally {
            refetch()
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


// add parellel queries function here