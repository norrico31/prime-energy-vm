import { TablePaginationConfig, notification } from "antd"

const GET = async <D,>(path: string, signal: AbortSignal, params?: TableParams<TablePaginationConfig>): Promise<D> => {
    try {
        return Promise.resolve(await crudApi(path, { method: 'GET', signal }, params))
    } catch (error) {
        return Promise.reject(error)
    }
}

const POST = async <D, R>(path: string, data: D, headers?: RequestInit) => {
    try {
        const res = await crudApi<R>(path, { method: 'POST', body: JSON.stringify(data), ...headers })
        const message = (res as { message?: string })?.message
        notification.open({
            message: 'Create Successfully',
            description: message,
        });
        return Promise.resolve(res)
    } catch (error) {
        return Promise.reject(error)
    }
}

const PUT = async <D, R>(path: string, data: D, headers?: RequestInit) => {
    try {
        const res = await crudApi<R>(path + data.id, { method: 'PUT', body: JSON.stringify(data), ...headers })
        const message = (res as { message?: string })?.message
        notification.open({
            message: 'Update Successfully',
            description: message,
        });
        return Promise.resolve(res)
    } catch (error) {
        return Promise.reject(error)
    }
}

const DELETE = async (path: string) => {
    try {
        const res = await crudApi(path, { method: 'DELETE' })
        const message = (res as { message?: string })?.message
        notification.open({
            message: 'Delete Successfully',
            description: message,
        });
        return Promise.resolve(res)
    } catch (error) {
        return Promise.reject(error)
    }
}

export { GET, POST, PUT, DELETE }


// const { data, isLoading, ...restQueries } = useQuery<Return<T>>({
//     queryKey: [queryKey, tableParams],
//     queryFn: async (): Promise<Return<T>> => {
//         const res = await crudApi<T>(paths.get, { method: 'GET' }, { ...restProps, ...tableParams })
//         const data = res as T as ApiSuccess<T>
//         setTableParams({
//             pagination: {
//                 ...tableParams?.pagination,
//                 total: data.data?.total,
//                 current: data.data?.current_page,
//             },
//         })
//         return res
//     },
// })

// const { mutate: createData, error: errorCreate, isLoading: loadingCreate, status: statusCreate } = useMutation<P & Partial<{ '_method': 'PUT' }>>({
//     queryKey,
//     mutationFn: async (data: P & Partial<{ '_method': 'PUT' }>) => await crudApi(paths.post!, { method: 'POST', body: JSON.stringify(data) }),
// })

// const { mutate: editData, error: errorEdit, isLoading: loadingEdit, status: statusEdit } = useMutation<P & Partial<{ id: string }>>({
//     queryKey,
//     mutationFn: async (data: P & Partial<{ id: string }>) => await crudApi(paths.put + data.id!, { method: 'PUT', body: JSON.stringify(data) })
// })
// const { mutate: removeData, error: errorRemove, isLoading: loadingRemove } = useMutation<string>({
//     queryKey,
//     mutationFn: async (id: string) => await crudApi(paths.delete + id, { method: 'DELETE', body: JSON.stringify(id) })
// })
// const download = () => crudApi(paths?.download ?? '', {
//     headers: {
//         'Content-Disposition': "attachment; filename=task_report.xlsx",
//         "Content-Type": "application/json",
//     },
// })
// const tableChange = (pagination: TablePaginationConfig) => setTableParams({ ...tableParams, pagination: { current: pagination?.current, pageSize: pagination.pageSize! } })

// return { ...restQueries, createData, editData, removeData, data, isLoading: (isLoading || loadingCreate || loadingEdit || loadingRemove), error: (errorEdit || errorCreate || errorRemove) as ApiError, download, statusCreate, statusEdit, tableParams, tableChange }


async function crudApi<T>(reqPath: string, requestInit?: RequestInit, params?: TableParams<TablePaginationConfig>): Promise<T> {
    const url = urlParams(reqPath, params)
    const res = await fetch(url, { ...requestInit, headers: { ...requestInit?.headers } })
    if (!res.ok) return Promise.reject(res.json()) as T
    return Promise.resolve(res.json())
}



function urlParams(path: string, params?: TableParams<TablePaginationConfig>) {
    const url = path.toString().toLocaleLowerCase().includes('download')
    path = appUrl(path, url ? 'DOWNLOAD' : 'CORE')
    const baseUrl = new URL(path)
    params && Object.entries(params).forEach(([k, v]) => {
        k != undefined && v != undefined && baseUrl.searchParams.append(k, v + '')
    })
    return baseUrl.toString()
}


function appUrl(path: string, baseUrl: 'CORE' | 'DOWNLOAD' = 'CORE'): string {
    const APP_VERSION = 'v1'
    const APP_URL: Record<string, string> = {
        'CORE': `https://vms.redcoresolutions.com/passthru/api/${APP_VERSION}`,
        'DOWNLOAD': `https://hrportal.redcoresolutions.com/passthru/api/backend`
    }
    return APP_URL[baseUrl] + path
}
