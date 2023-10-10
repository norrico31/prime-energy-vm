import { useQuery, useMutation, useQueries, useQueryClient } from "@tanstack/react-query"
import { useNotifCtx } from "../contexts/Notification"

type Return<D> = Awaited<ReturnType<typeof crudApi<D>>>

function crudApi<T>(reqUrl: string, params?: ApiParams): Promise<T> {
    const url = urlParams(reqUrl, params)
    return fetch(url, { method: params?.method }).then((res) => {
        if (!res.ok) return Promise.reject(res.json()) as T
        return Promise.resolve(res.json())
    })
}
export const useFetch = <T, R>({ queryKey, urls, ...restProps }: Fetch & Partial<ApiParams>) => {
    const queryClient = useQueryClient()
    const { data, isLoading, refetch, ...restQueries } = useQuery<Return<T>>({
        queryKey: [queryKey, restProps],
        queryFn: (): Promise<Return<T>> => crudApi(urls.get, { ...restProps, method: 'GET' }),
    })

    const { mutate, error, isLoading: updateLoading, isError } = useMutation(async (data: R) => await crudApi(urls?.post ?? '', { method: 'POST', body: JSON.stringify(data) }), {
        onMutate: async () => {
            await queryClient.cancelQueries([queryKey])
            const prevData = queryClient.getQueryData([queryKey])
            queryClient.setQueryData([queryKey], prevData)
            return prevData
        },
        // onSettled: ((data, err) => alert(err)),
        onSuccess: () => queryClient.invalidateQueries([queryKey])
    })

    console.log('mutation error: ', error, isError)
    const { setType } = useNotifCtx()

    const createData = async (data: R) => {
        // guard clause
        setType({ type: 'success', title: '', msg: '' })
        mutate(data)
    }

    const editData = async (data: RequestBody<R> & Partial<Common>) => {
        try {
            const res = await fetch(urls?.put + `/${data?.id}` ?? '', { method: 'PUT', body: JSON.stringify(data) })
            setType({ type: 'update', title: '', msg: '' })
            refetch()
            return res
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

    return { createData, editData, deleteData, data, isLoading: isLoading || updateLoading, ...restQueries, error: error as ApiError }
}

export const useParallelFetch = ({ urls, k }: ParallelFetch) => useQueries({
    queries: urls.map((url) => {
        return {
            queryKey: [k, url],
            queryFn: () => fetch(url),
        }
    }),
})

function urlParams(reqUrl: string, params?: ApiParams) {
    const url = new URL(reqUrl)
    params && Object.entries(params).forEach(([k, v]) => {
        k != undefined && v != undefined && url.searchParams.append(k, v + '')
    })
    return url.toString()
}