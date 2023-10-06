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
        const res = await fetch(url.toString())
        const data = await res.json()
        return Promise.resolve(data.data.data ?? data.data satisfies T)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const useFetch = <T,>({ urls, ...restProps }: Fetch & Partial<ApiParams>) => {
    // TODO: POST PUT DELETE FUNC
    return { ...useQuery<Return<T>>({ queryKey: [urls.get], queryFn: () => fetchData(urls.get, restProps) }) }
}

export const useParallelFetch = ({ urls, k }: ParallelFetch) => {
    return useQueries({
        queries: urls.map((url) => {
            return {
                queryKey: [k, url],
                queryFn: () => fetchData(url),
            }
        }),
    })
}


// add parellel queries function here