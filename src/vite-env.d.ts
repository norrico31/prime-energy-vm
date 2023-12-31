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
    editData?: boolean | (() => void);
    viewData?: boolean | (() => void);
    download?: boolean | (() => void);
    disabled?: boolean | (() => void);
    deleteData?: boolean | (() => void);
} & Partial<{
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
    activity_logs: TActivityLogs[]
    department: string | null
    email: "admin@example.com"
    first_name: "System"
    full_name: "System Administrator"
    id: "9955FFDE-C38C-449A-9A27-3EBAC65D405C"
    is_active: "1"
    is_admin: true
    job_level: null
    last_name: "Administrator"
    middle_name: "SA"
    position: string | null
    role: TRoles
}
type TActivityLogs = {
    causer: string
    created_at: string
    description: string
    event: string
    id: number
    log_name: string
    name: string | null
    properties: string
    remarks: string | null
    status: string | null
    timestamp: string
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
    availability: TAvailability
    date_raised: string | D
    due_date: string | D
    equipment: TEquipment
    id: string
    integrity: TIntegrity
    files?: TTransactionFile[]
    is_longterm: string
    ref_no: string
    risk_description: string
    status: TStatus
    threat_owner: TUserOptions
    actions: TTransactionActions
    url: TTransactionUrls
    vulnerability_description: string | null
    vulnerability_title: string | null
} & Common
type TTransactionFile = {
    file: string
    file_path: string
    file_type: string
    name: string
    type: string
    id: string
}
type TTransactionUrls = {
    id: string; url: string; description: string
}[]
type TTransactionActions = {
    id: string | null
    action_item: string | null
    action_owner: TUserOptions
    action_due_date: D | null
}[]
type TTransactionHistory = {
    action: string
    actor: TUserOptions
    date: string
    id: string
    properties: {
        attributes: Record<string, string | Record<string, string> | Record<string, string>[]>
        old?: Record<string, string | Record<string, string> | Record<string, string>[]>
    }
    transaction: Record<string, string>
}
type TPrintReport = {
    availability: string
    date_raised: string
    equipment: string
    integrity: string
    is_critical: string
    is_longterm: string
    ref_no: string
    status: string
    threat_owner: string
    vulnerability_title: string
}
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
    permissions: TPermisssion[]
} & Common
type TPermissions = {
    'Activity log Management': TPermisssion[]
    'Availability Management': TPermisssion[]
    'Dashboards Management': TPermisssion[]
    'DownloadTransactionEquipment Management': TPermisssion[]
    'DownloadTransactionPreview Management': TPermisssion[]
    'DownloadTransactionSite Management': TPermisssion[]
    'Equipments Management': TPermisssion[]
    'Integrity Management': TPermisssion[]
    'Permissions Management': TPermisssion[]
    'Profile Management': TPermisssion[]
    'Roles Management': TPermisssion[]
    'Roles Permissions Management': TPermisssion[]
    'Sites Management': TPermisssion[]
    'SsoLogin Management': TPermisssion[]
    'Status Management': TPermisssion[]
    'Statuses Management': TPermisssion[]
    'Systems Management': TPermisssion[]
    'Transactions Management': TPermisssion[]
    'Uploads Management': TPermisssion[]
    'Users Management': TPermisssion[]
    'Workflows Management': TPermisssion[]
}
type TPermission = {
    created_at: string
    deleted_at: string | null
    description: string
    id: string
    name: string
    permission_group: { id: string, name: string, description: string }
    permission_group_id: string
    route: string
    slug: string
    updated_at: string
}
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