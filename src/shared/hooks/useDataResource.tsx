import { useQuery, useMutation as ReactQueryMutation, useQueries, useQueryClient } from "@tanstack/react-query"

type Return<D> = Awaited<ReturnType<typeof crudApi<D>>>

async function crudApi<T>(reqUrl: string, requestInit?: RequestInit): Promise<T> {
    //! INSERT TOKEN IN HEADERS
    const url = urlParams(reqUrl, requestInit)
    const res = await fetch(url, { ...requestInit, headers: { ...requestInit?.headers } })
    if (!res.ok) return Promise.reject(res.json()) as T
    return Promise.resolve(res.json())
}

// TODO: USE CONTEXT
export const useDataResource = <T, P>({ queryKey, paths, ...restProps }: Queries & Partial<RequestInit & ApiParams>) => {
    const { data, isLoading, ...restQueries } = useQuery<Return<T>>({
        queryKey: [queryKey, restProps],
        queryFn: (): Promise<Return<T>> => crudApi(paths.get, { ...restProps, method: 'GET' }),
    })

    const { mutate: createData, error: errorCreate, isLoading: loadingCreate } = useMutation<P & Partial<{ '_method': 'PUT' }>>({
        queryKey,
        mutationFn: async (data: P & Partial<{ '_method': 'PUT' }>) => await crudApi(paths?.post ?? '', { method: 'POST', body: JSON.stringify(data) })
    })
    const { mutate: editData, error: errorEdit, isLoading: loadingEdit } = useMutation<P & Partial<{ id: string }>>({
        queryKey,
        mutationFn: async (data: P & Partial<{ id: string }>) => await crudApi(paths?.put ?? '' + data.id, { method: 'POST', body: JSON.stringify(data) })
    })
    const { mutate: removeData, error: errorRemove, isLoading: loadingRemove } = useMutation<string>({
        queryKey,
        mutationFn: async (id: string) => await crudApi(paths?.delete + id, { method: 'POST', body: JSON.stringify(id) })
    })
    const download = () => crudApi(paths?.download ?? '', {
        headers: {
            'Content-Disposition': "attachment; filename=task_report.xlsx",
            "Content-Type": "application/json",
        },
    })

    return { createData, editData, removeData, data, isLoading: isLoading || loadingCreate || loadingEdit || loadingRemove, ...restQueries, error: errorEdit || errorCreate || errorRemove as ApiError, download }
}

export const useParallelFetch = ({ paths, k }: ParallelFetch) => useQueries({
    queries: paths.map((path) => {
        return {
            queryKey: [k, path],
            queryFn: () => fetch(path),
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

function urlParams(reqUrl: string, params?: RequestInit) {
    const url = new URL(reqUrl)
    params && Object.entries(params).forEach(([k, v]) => {
        k != undefined && v != undefined && url.searchParams.append(k, v + '')
    })
    return url.toString()
}