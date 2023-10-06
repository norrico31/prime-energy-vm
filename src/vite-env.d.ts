/// <reference types="vite/client" />
declare global {
    type Window = {
        fetch: (input: RequestInfo, init: RequestInit) => Promise<Response>;
    }

}

// ================================
// ================================
//* Fetch API
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
// ================================
// ================================

type WhosInOut = {
    id: string;
    user_id: string;
    type: string;
    date: string;
    time_keeping_date: string;
    time_keeping_time: string;
    lat: string;
    long: string;
    img_url: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    schedule_id: string;
    scheduled_time: string;
    location_id?: string;
    is_client_site: number;
    overtime_date: string;
    user: User;
    schedule: Schedule;
}

type Schedule = {
    id: string;
    name: string;
    time_in: string;
    time_out: string;
    is_active: string;
    description: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    full_sched: string;
}

type User = {
    id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    internal: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
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
}

type Team = {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    description: string;
    department_id: string;
    laravel_through_key: string;
    department: Department;
}

type Department = {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    description: string;
}

type Role = {
    id: string;
    name: string;
    description: string;
    can_approve: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    position_type_id?: string;
}


// ================================
// ================================
//* Elements
type ButtonProps = PropsWithChildren<{

}>;

type TableColHead = {
    colHead: string
}[]


// ================================
// ================================