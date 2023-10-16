/// <reference types="vite/client" />
declare global {
    type Window = {
        fetch: (input: RequestInfo, init: RequestInit) => Promise<Response>;
    }
}

// ================================
// ================================
//* Fetch API
type ApiResponse<D> = {
    message: string
} & ApiSuccess<D>;
type ApiSuccess<R> = {
    data: ApiData<R>
}
type ApiError = {
    message: string
    errors: Record<string, string | string[]>
}
type ApiData<T> = {
    current_page: number
    data: T
    first_page_url: string
    from: number
    last_page: 6
    last_page_url: string
    links: { url: string; label: string; active: boolean }
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: string | null
    to: number
    total: number
}
type Queries = {
    queryKey: string
    urls: {
        get: string
        post?: string
        put?: string
        delete?: string
    }
}
type ParallelFetch = {
    urls: string[]
    k: string
}
type ApiParams = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    body?: string | FormData
    search?: string
    page?: number
    limit?: number
}
type RequestBody<T> = Record<string | number, string | number> & Partial<T>
// ================================
// ================================


// ================================
// ================================
//* Elements
type TableColHead = {
    colHead: string
}[]
// ================================
// ================================


// ================================
// ================================
//* Components
type ToastNotification = {
    type: 'success' | 'update' | 'delete' | 'info' | 'download' | null
    title: string
    msg: string;
    onClose: () => void
}
type PageProps = {
    active: number;
    total: number;
    perPage: number;
    lastPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}
type CardList = {
    data: { id: string; title: string; lists: CardItem[] }[]
}
type CardItem = {
    id: string
    statusAvailability: string
    statusIntegrity: string
    text: string
}
type ButtonActionProps = {
    loading: boolean
    editData?: () => void
    viewData?: () => void
    deleteData?: () => void
    download?: () => void
    disabled?: () => void
}
// ================================
// ================================


// ================================
// ================================
//* Modules
type Common = {
    id: string;
    user_id: string;
    date: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    user: User;
}

type WhosInOut = Common & {
    type: string;
    time_keeping_date: string;
    time_keeping_time: string;
    lat: string;
    long: string;
    img_url: string;
    schedule_id: string;
    scheduled_time: string;
    location_id?: string;
    is_client_site: number;
    overtime_date: string;
    schedule: Schedule;
}

type Schedule = Common & {
    name: string;
    time_in: string;
    time_out: string;
    is_active: string;
    description: string;
    full_sched: string;
}

type User = {
    first_name: string;
    middle_name: string;
    account_type: string
    last_name: string;
    email: string;
    internal: number;
    employee_id: string;
    is_active: number;
    role_id: string;
    department_id: string;
    team_id: string;
    full_name: string;
    department_name: string;
    role: Role;
    teams: Team[];
    department: Department;
} & Common

type AuditLogs = Common & {
    account_type: string
    action: string
    date: string
    id: string | null
    module_name: string
    payload: unknown
    user_full_name: string
    user_id: string
}

type Team = {
    name: string;
    description: string;
    department_id: string;
    laravel_through_key: string;
    department: Department;
} & Common

type Department = {
    name: string;
    description: string;
} & Common

type Role = Common & {
    name: string;
    description: string;
    can_approve: number;
    position_type_id?: string;
}
// ================================
// ================================
