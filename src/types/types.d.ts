import { VNode } from "vue";
import { PermModules } from "./permission.enum";
import { CountryCode } from "libphonenumber-js";
import { ValidationRuleWithParams } from "@vuelidate/core";
import { TSkill } from "@/repositories/skill.repository";
import { TAcademic } from "@/repositories/academic.repository";
import { TJob } from "@/repositories/job.repository";
import { TStudy } from "@/repositories/study.repository";

export type SummaryMethodProps<T> = {
    columns: IColumns[];
    data: T[];
}

export type IFilter = {
    field: string;
    label: string;
    options: Record<any, any>;
}

export type IFilterDate = {
    field: string;
    label: string;
}

export type CommonFields = {
    _id: ObjectId;
    createdAt: Date;
    updatedAt: Date;
    createdBy: ObjectId;
    updatedBy: ObjectId;
    deletedAt?: Date;
    deletedBy?: ObjectId;
}


export type RowValue = string | number | boolean | Date | Record<string, string | number | boolean | Date>
export type GenericType = Record<string, RowValue>

export type MobileCol = {
    isMobileTitle?: boolean
    isMobileDescription?: boolean
    isMobileIcon?: boolean
    isMobileTag?: boolean,
    onlyMobile?: boolean
}

export type ColDefinition<T> = {
    key: keyof T;
    dataKey: string;
    title: string;
    width?: number | string;
    minWidth?: number | string;
    type?: 'default' | 'selection' | 'index' | 'expand';
    fixed?: "right" | "left" | true | undefined;
}

export type ColOption = {
    sortable?: boolean;
    summable?: boolean;
    hiddeable?: boolean;
    hide?: boolean;
    keepOriginalTitle?: boolean;
    preventExport?: boolean
}

export type ColMask = {
    masked?: boolean
    maskedPermission?: keyof PermModules
    unMaskedSide?: "left" | "right"
    unMaskedCount?: number
}
export type IColumns<T> = MobileCol & ColDefinition<T> & ColOption & ColMask & {
    filters?: Array<{ text: string, value: string }>;
    action?: Function;
    formatter?: (row: T, col: IColumns, value: RowValue) => string | number | VNode;
    align?: "left" | "center" | "right";
    sumAction?: (rows: Array<T>) => number | string | VNode
    exportFormatter?: (row: T, col: IColumns, value: RowValue) => string | number;
}

export type IToast = {
    type?:
    | "success"
    | "info"
    | "warn"
    | "error"
    | "secondary"
    | "contrast"
    | undefined;
    title?: string;
    message?: string;
    duration?: number;
}

export type INotification = {
    type?: "error" | "success" | "secondary" | "info" | "contrast" | "warn";
    title?: string;
    message?: string;
    duration?: number;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}



export type ISelectionAction = {
    label: string
    action: Function
    icon: string
    disabled?: boolean
    untranslate?: boolean
}


export type ParsedIssue = {
    employee: string
    icon: string
    color: string
    createdAt: string
    description: string
}


export type Address = {
    country: string
    city: string
    lat: number
    lng: number
    street: string
}

export type Step = {
    target: string
    title: string
    description: string
}

export type CurrentModal = {
    showId: string,
    modalName: string
}




export type Permission = ICommonField & {
    id: string
    name: string
    key: string
    label: string
    module: string
    origin: string
    userPermissionId: string
    rolePermissionId: string
}

export type APIResponse<T> = {
    count: number
    rows: T[]
    lastPage: number | null
    nextPage: number | null
    prevPage: number | null
    currentPage: number
}

export type Notification = {
    title: string;
    description: string;
    icon: string;
    color: string;
    route: string;
    read: number;
}

export type Rule = {
    required?: ValidationRuleWithParams,
    minLength?: ValidationRuleWithParams,
    maxLength?: ValidationRuleWithParams,
    isIn?: ValidationRuleWithParams,
    email?: ValidationRuleWithParams,
    isPhone?: ValidationRuleWithParams,
    minValue?: ValidationRuleWithParams,
    maxValue?: ValidationRuleWithParams,
    isValidDependency?: ValidationRuleWithParams
}



export type User = CommonFields & {
    email: string;
    password: string;
    username: string;
    avatar: string;
    role: UserRole;
}
export type QueryOperator = 'eq' | 'neq' | 'gt' | 'lt' | 'in' | 'gte' | 'lte' | '';

export type QueryJuntion = 'and' | 'or' | '';

// field:value:operator:junction
export type FilterString = `${string}:${string|number|boolean}:${QueryOperator}:${QueryJuntion}`;




export type QueryParams ={
    fields?: string;
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: SortOrder;
    search?: string;
    filters?: FilterString[];
    relations?: string;
}

export type Token = {
    _id: ObjectId;
    token: string;
    userId: ObjectId;
    createdAt: Date;
    expiresAt: Date;
}

export type Animal = CommonFields & {
    name: string;
    scientific_name: string;
    description: string;
    photos: string[];
    taxonomyId: ObjectId;
    habitatId: ObjectId;
    dietId: ObjectId;
    categoryId: ObjectId;
    predatorsId: ObjectId[];
    preysId: ObjectId[];
    reproductionId: ObjectId;
    status: AnimalStatus;
    status_source: string;
    status_reason: string;
    status_date: Date;
    relatedIds: ObjectId[];
    photos: string[];
    category?: Category;
}

export type Category = CommonFields & {
    name: string;
    description: string;
    image: string;
}

