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
    data: T
    pagination: Pagination
}
type Pagination = {
    current_page: number
    from: number
    last_page: number
    per_page: number0
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
    signal?: AbortSignal
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
    id: string
    email: string
    first_name: string
    middle_name: string
    last_name: string
    full_name: string
    position: string | null,
    job_level: string | null,
    is_active: string
    department: string | null,
    role: TRole
}

type TUserOptions = {
    id: string
    label: string
    role: string
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
    extra: {
        'A': string;
        'I': string
    }
} & Common
type TTransaction<D> = {
    action_item1: null
    action_item2: null
    action_item3: null
    action_item4: null
    action_item5: null
    action_owner1: TUserOptions | null
    action_owner2: TUserOptions | null
    action_owner3: TUserOptions | null
    action_owner4: TUserOptions | null
    action_owner5: TUserOptions | null
    action_due_date1: D | null
    action_due_date2: D | null
    action_due_date3: D | null
    action_due_date4: D | null
    action_due_date5: D | null
    availability: TAvailability
    date_raised: string | D
    due_date: string | D
    equipment: TEquipment
    id: string
    integrity: TIntegrity
    is_longterm: string
    ref_no: string
    risk_description: string
    status: TStatus
    threat_owner: TUserOptions
    url: { id: string; url: string }[]
    vulnerability_description: string | null
    vulnerability_title: string | null
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