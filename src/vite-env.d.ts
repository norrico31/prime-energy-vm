/// <reference types="vite/client" />
declare global {
    type Window = {
        fetch: (input: RequestInfo, init: RequestInit) => Promise<Response>;
    }
}

// ================================
// ================================
//* Fetch API
type FetchResponse<T> = {
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
} | undefined;
type Fetch = {
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
    search?: string
    page?: number
    pageSize?: number
}
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
}
type PageProps = {
    active: number;
    total: number;
    perPage: number;
    lastPage: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
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

type WhosInOut = {
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
} & Common

type Schedule = {
    name: string;
    time_in: string;
    time_out: string;
    is_active: string;
    description: string;
    full_sched: string;
} & Common

type User = {
    first_name: string;
    middle_name: string;
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

type Role = {
    name: string;
    description: string;
    can_approve: number;
    position_type_id?: string;
} & Common
// ================================
// ================================
