import { TablePaginationConfig, notification } from "antd"

const GET = async <D,>(path: string, signal?: AbortSignal, params?: TableParams<TablePaginationConfig>): Promise<D> => {
    try {
        return Promise.resolve(await crudApi(path, { method: 'GET', signal }, params))
    } catch (error) {
        return Promise.reject(error)
    }
}

const POST = async <D, R>(path: string, data?: D, headers?: RequestInit) => {
    try {
        const res = await crudApi<R>(path, { method: 'POST', body: data instanceof FormData ? data : JSON.stringify(data), ...headers })
        const message = (res as { message?: string })?.message
        if (typeof res === 'object') return Promise.resolve(res)
        if (message === 'Logout Successful' || message === 'Login Successful') return Promise.resolve(res)
        else {
            notification.open({
                message: 'Create Successfully',
                description: message,
            });
            return Promise.resolve(res)
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

const PUT = async <D,>(path: string, data: D, headers?: RequestInit) => {
    try {
        const res = await crudApi(path, { method: 'PUT', body: data instanceof FormData ? data : JSON.stringify(data), ...headers })
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
        'DOWNLOAD': `https://vms.redcoresolutions.com/core/api/v1`
    }
    return APP_URL[baseUrl] + path
}
