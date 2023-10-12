import { useQuery, useMutation as ReactQueryMutation, useQueries, useQueryClient } from "@tanstack/react-query"

type Return<D> = Awaited<ReturnType<typeof crudApi<D>>>

async function crudApi<T>(reqUrl: string, params?: ApiParams): Promise<T> {
    const url = urlParams(reqUrl, params)
    const res = await fetch(url, { method: params?.method })
    if (!res.ok) return Promise.reject(res.json()) as T
    return Promise.resolve(res.json())
}

export const useDataResource = <T, P>({ queryKey, urls, ...restProps }: Queries & Partial<ApiParams>) => {
    const { data, isLoading, ...restQueries } = useQuery<Return<T>>({
        queryKey: [queryKey, restProps],
        queryFn: (): Promise<Return<T>> => crudApi(urls.get, { ...restProps, method: 'GET' }),
    })

    const { mutate: createData, error: errorCreate, isLoading: loadingCreate } = useMutation<P | Partial<{ '_method': 'PUT' }>>({
        queryKey,
        mutationFn: async (data) => await crudApi(urls?.post ?? '', { method: 'POST', body: JSON.stringify(data) })
    })
    const { mutate: editData, error: errorEdit, isLoading: loadingEdit } = useMutation<P & Partial<{ id: string }>>({
        queryKey,
        mutationFn: async (data: P & Partial<{ id: string }>) => await crudApi(urls?.put + `/${data?.id}` ?? '', { method: 'POST', body: JSON.stringify(data) })
    })
    const { mutate: removeData, error: errorRemove, isLoading: loadingRemove } = useMutation<string>({
        queryKey,
        mutationFn: async (id: string) => await crudApi(`${urls?.delete}+${id}` ?? '', { method: 'POST', body: JSON.stringify(id) })
    })

    return { createData, editData, removeData, data, isLoading: isLoading || loadingCreate || loadingEdit || loadingRemove, ...restQueries, error: errorEdit || errorCreate || errorRemove as ApiError }
}

export const useParallelFetch = ({ urls, k }: ParallelFetch) => useQueries({
    queries: urls.map((url) => {
        return {
            queryKey: [k, url],
            queryFn: () => fetch(url),
        }
    }),
})

const useMutation = <T,>({ queryKey, mutationFn }: { queryKey: string, mutationFn: (d: T) => Promise<T> }) => {
    const queryClient = useQueryClient()
    const mutation = ReactQueryMutation(mutationFn, {
        onMutate: async () => {
            await queryClient.cancelQueries([queryKey])
            const prevData = queryClient.getQueryData([queryKey])
            queryClient.setQueryData([queryKey], prevData)
            return prevData
        },
        onSuccess: () => queryClient.invalidateQueries([queryKey])
    })
    return { ...mutation }
}

function urlParams(reqUrl: string, params?: ApiParams) {
    const url = new URL(reqUrl)
    params && Object.entries(params).forEach(([k, v]) => {
        k != undefined && v != undefined && url.searchParams.append(k, v + '')
    })
    return url.toString()
}