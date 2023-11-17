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
type ApiMethods = {
    paths: {
        get: string
    } & Partial<{
        post: string
        put: string
        delete: string
        download: string
    }>
}
type ParallelFetch = {
    paths: string[]
    k: string
}
type ApiParams = {
    search?: string
    page?: number
    limit?: number
}
type RequestBody<T> = Record<string | number, string | number> & Partial<T>
type WithId<T> = T extends { id: infer U } ? { id: U } : never;
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
type TableParams<T> = Partial<{
    pagination: T
    filters: Record<string, FilterValue | null>
    sortField: string
    sortOrder: string
    order: string
    field: string
    search: string
}>
type PageProps = {
    active: number;
    total: number;
    perPage: number;
    lastPage: number;
    setCurrentPage: (payload: number) => void
}
type CardList = {
    data: { id: string; title: string; lists: CardItem[] }[]
}
type CardItem = {
    id: string
    statusAvailability: string
    statusIntegrity: string
    text: string
    to: string
}
type ButtonActionProps = {
    loading: boolean
    editData?: () => void
    viewData?: () => void
    download?: () => void
    disabled?: () => void
} & Partial<{
    deleteData: () => void
    dataTitle: string
    dataDescription: string
}>
// ================================
// ================================


// ================================
// ================================
//* Modules
type TCredentials = {
    data: { token: string; user: TUser }
    message: string
}
type Common = {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    is_active: string
    name: string
}

type TUser = {
    // activity_logs:[{…}]
    department: string | null
    email: string
    first_name: string
    full_name: string
    id: string
    is_active: string
    is_admin: true
    job_level: string | null
    last_name: string
    middle_name: string
    position: null
    role: TRole
}

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

type CardData = {
    title: string;
    id: string;
    lists: {
        id: string;
        statusAvailability: string;
        statusIntegrity: string;
        text: string;
    }[];
}
// LOCATION SETTINGS
type TLocation = {
    created_at: string
    description: string | null
    id: string
    name: string
    updated_at: string
}
type TSystems = {
    equipments: TEquipment[]
    sequence_no: number
    site: TLocation
    site_id: string
} & Common
type TEquipment = {
    description: string
    equipment_id: string
    equipment_tag: string
    id: string
    is_active: string
    is_critical: string
    name: string
    system: TSystems
} & Common
// SYSTEM SETTINGS
type TPhase = {
    is_active: string
    name: string
    updated_at: string
    description: string | null
} & Common
type TAvailability = {
    is_active: string
    name: string
    updated_at: string
    description: string | null
} & Common
type TIntegrity = {
    is_active: string
    name: string
    updated_at: string
    description: string | null
} & Common
type TInitialRamRating = {
    is_active: string
    name: string
    updated_at: string
    description: string | null
} & Common
type TRamPriority = {
    is_active: string
    name: string
    updated_at: string
    description: string | null
} & Common
type TReAssesRamRating = {
    is_active: string
    name: string
    updated_at: string
    description: string | null
} & Common
type TStatus = {
    is_active: string
    name: string
    updated_at: string
    description: string | null
} & Common
// ADMIN SETTINIGS
type TRoles = {
    is_active: string
    name: string
    updated_at: string
    description: string | null
} & Common
// ================================
// ================================




// ================================
// ================================
//*  STATES
type ReducerState = {
    view: boolean;
    disable: boolean
    selectedData?: AuditLogs,
    currentPage: number,
    pageSize: number,
}
type Action<T> =
    | { type: 'MODAL_VIEW'; payload: T }
    | { type: 'MODAL_DELETE'; payload: T }
    | { type: 'CURRENT_PAGE'; payload: number }
    | { type: 'PAGE_SIZE'; payload: number }
    | { type: 'ON_HIDE' };