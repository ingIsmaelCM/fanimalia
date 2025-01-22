import { SortOrder } from "@/types/enums";
import { FilterString, QueryJuntion, QueryOperator, QueryParams } from "@/types/types";
import { ComputedRef, Ref, computed, ref } from "vue";



export interface IPagination {
  count: number;
  currentPage: number;
  lastPage: number | null;
  nextPage: number | null;
  prevPage: number | null;
}
export default class QueryService {
  private _params: Ref<QueryParams> = ref({
    fields: "*",
    filters: [],
    sortBy: "createdAt",
    sortOrder: SortOrder.asc,
    search: "",
    page: 0,
    pageSize: 1000,
    inFilter: ""
  });

  private _pagination: Ref<IPagination> = ref({
    count: 0,
    currentPage: 0,
    lastPage: null,
    nextPage: null,
    prevPage: null,
  });

  public persistPerPage: boolean = true;

  parsed: ComputedRef<string> = computed(() => {
    const parsedParams = Object.keys(this._params.value)
      .filter((k) => k !== "filter")
      .map((key) => {
        return `${key}=${(this._params.value as any)[key]}`;
      })
      .join("&");
    return "?" + parsedParams + "&" + this.parseFilter();
  });

  unParsed: ComputedRef<QueryParams> = computed(() => this._params.value);
  setPagination({
    count,
    currentPage,
    lastPage,
    nextPage,
    prevPage,
  }: IPagination) {
    this._pagination.value = {
      count,
      currentPage,
      lastPage,
      nextPage,
      prevPage,
    };
  }

  getPagination: ComputedRef<IPagination> = computed(
    () => this._pagination.value
  );

  order(order: string): QueryService {
    this._params.value = {
      ...this._params.value,
      sortBy: order,
      page: 1,
    };
    return this;
  }

  getOrder(): string {
    if (this._params.value.sortBy == undefined) return "";
    return this._params.value.sortBy;
  }
  desc(desc: boolean): QueryService {
    this._params.value = {
      ...this._params.value,
      sortOrder: desc ? SortOrder.desc : SortOrder.asc,
      page: 1,
    };
    return this;
  }

  getDesc(): boolean {
    if (this._params.value.sortOrder == undefined) return false;
    return this._params.value.sortOrder == SortOrder.desc;
  }
  fields(fields: string[]): QueryService {
    this._params.value.fields = fields.join(",");
    return this;
  }

  limit(limit?: number): QueryService {
    this._params.value = {
      ...this._params.value,
      pageSize: limit,
      page: 1,
    };
    return this;
  }


  page(page?: number): QueryService {
    this._params.value.page = page;
    return this;
  }
  perpage(perpage?: number): QueryService {
    this._params.value = {
      ...this._params.value,
      page: 1,
      pageSize: perpage,
    };
    return this;
  }


  filter(
    column: string,
    value: string | number | boolean,
    operator: QueryOperator = "eq",
    union: QueryJuntion = "and"
  ): QueryService {
    const filt: FilterString = `${column}:${value}:${operator}:${union}`;
    this._params.value.filters?.push(filt);
    return this;
  }

  inFilter(column: string, value: Array<string | number | boolean>): QueryService {
    const filt = `${column}:${value.join(",")}`;
    this._params.value.inFilter = filt;
    return this;

  }

  replaceFilter(
    column: string,
    value: FilterString,
    operator: QueryOperator = "eq",
    union: QueryJuntion = "and"
  ) {
    const filt: FilterString = `${column}:${value}:${operator}:${union}`;
    const filtered: FilterString[] = this._params.value.filters?.filter(
      (f) => !f.includes(column)
    ) || [];
    this._params.value.filters = [...filtered, filt];
    return this;
  }

  removeFilter(column: string) {
    const filtered: FilterString[] = this._params.value.filters?.filter(
      (f) => !f.includes(column)
    ) || [];
    this._params.value.filters = [...filtered];
    return this;
  }

  include(include: string): QueryService {
    this._params.value.relations = include;
    return this;
  }

  search(search: string | null): QueryService {
    this._params.value.search = search || "";
    this._params.value.page && (this._params.value.page = 1);
    return this;
  }

  private parseFilter(): string {
    return (
      this._params.value.filters?.map((item) => `filter[]=${item}`).join("&") ||
      ""
    );
  }
}