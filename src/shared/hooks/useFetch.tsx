import { useQuery, useQueries } from "@tanstack/react-query"

type Return<D> = Awaited<ReturnType<typeof fetchData<D>>>

async function fetchData<T>(url: string): Promise<T> {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return Promise.resolve(data.data.data ?? data.data satisfies T)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const useFetch = <T,>({ urls }: Fetch) => {
    // TODO: POST PUT DELETE FUNC
    return { ...useQuery<Return<T>>({ queryKey: [urls.get], queryFn: () => fetchData(urls.get) }) }
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