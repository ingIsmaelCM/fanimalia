import { VNode } from "vue";
import { PermModules } from "./permission.enum";
import { CountryCode } from "libphonenumber-js";
import { ValidationRuleWithParams } from "@vuelidate/core";
import { TSkill } from "@/repositories/skill.repository";
import { TAcademic } from "@/repositories/academic.repository";
import { TJob } from "@/repositories/job.repository";
import { TStudy } from "@/repositories/study.repository";
import { AnimalStatus, DietType, HabitatClimate, HabitatType, ReproductionType, UserRole } from "./enums";

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

export type IAuth = {
    username: string;
    password: string;
    rememberMe: boolean;
}

export type IRegister = Omit<IAuth, 'rememberMe'> & {
    name: string;
    email: string;
    role: UserRole;
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



export type Step = {
    target: string
    title: string
    description: string
}

export type CurrentModal = {
    showId: string,
    modalName: string
}




export type APIResponse<T> = {
    currentPage: 0,
    lastPage: 0,
    nextPage: 0,
    prevPage: 0,
    count: 0,
    pageSize: 0,
    inThisPage: 0,
    rows: T[]

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
    _id?: any,
    required?: ValidationRuleWithParams,
    minLength?: ValidationRuleWithParams,
    maxLength?: ValidationRuleWithParams,
    isIn?: ValidationRuleWithParams,
    email?: ValidationRuleWithParams,
    isPhone?: ValidationRuleWithParams,
    minValue?: ValidationRuleWithParams,
    maxValue?: ValidationRuleWithParams,
    isValidDependency?: ValidationRuleWithParams,
    $each?: Rule
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
export type FilterString = `${string}:${string | number | boolean}:${QueryOperator}:${QueryJuntion}`;




export type QueryParams = {
    fields?: string;
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: SortOrder;
    search?: string;
    filters?: FilterString[];
    relations?: string;
    inFilter?: string;
}

export type Token = {
    _id: ObjectId;
    token: string;
    userId: ObjectId;
    createdAt: Date;
    expiresAt: Date;
}

export type User = CommonFields & {
    email: string;
    password: string;
    username: string;
    avatar: string;
    role: UserRole;
}

export type Token = {
    _id: ObjectId;
    token: string;
    userId: ObjectId;
    createdAt: Date;
    expiresAt: Date;
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


export type User = CommonFields & {
    email: string;
    password: string;
    username: string;
    avatar: string;
    role: UserRole;
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
    image: string;
    photos: Photo[];
    habitat: Habitat;
    diet: Diet;
    taxonomy: Taxonomy;
    reproduction: Reproduction;
    categoryId: ObjectId;
    status: AnimalStatus;
    status_source: string;
    status_reason: string;
    status_date: Date;
    preysId: ObjectId[];
    predatorsId: ObjectId[];
    relatedIds: ObjectId[];
    likes: ObjectId[];
    category: Category;
}




export type Photo = {
    name: string;
    size: number;
    extension: string;
    url: string;
}

export type Category = CommonFields & {
    name: string;
    description: string;
    image: string;
}

export type Taxonomy = {
    _id: string;
    phylum: string;
    class: string;
    order: string;
    family: string;
    genus: string;
    specie: string;
}

export type Habitat = {
    _id: string;
    name: string;
    description: string;
    location: string;
    climate: HabitatClimate;
    type: HabitatType;
    elevation_range: [number, number];
    image: string;
}

export type Diet = {
    _id: string;
    type: DietType;
    food_items: string[];
    feeding_behavior: string;
}

export type Reproduction = {
    _id: string;
    type: ReproductionType;
    gestation_period: string;
    matting_season: Season;
    offspring_per_birth: number;
    parental_care: string
}


type AnimalKeys = {
    [K in keyof Animal]: Animal[K] extends object ? keyof Animal[K] : never;
};


type Selectable<T> = {
    value: T;
    label: string;
}