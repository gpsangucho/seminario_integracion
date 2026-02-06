import { http } from "./http";

export type Paginated<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type OperationOrder = {
  id: number;
  machine: number;
  machine_name?: string;
  product_name: string;
  quantity?: number;
  status: string;
  created_at?: string;
};

export async function listOperationOrderPublicApi() {
  const { data } = await http.get<Paginated<OperationOrder>>("/api/operation-order/");
  return data; // { ... , results: [] }
}

export async function listOperationOrderAdminApi() {
  const { data } = await http.get<Paginated<OperationOrder>>("/api/operation-order/");
  return data;
}

export async function createOperationOrderApi(payload: Omit<OperationOrder, "id">) {
  const { data } = await http.post<OperationOrder>("/api/operation-order/", payload);
  return data;
}

export async function updateOperationOrderApi(id: number, payload: Partial<OperationOrder>) {
  const { data } = await http.put<OperationOrder>(`/api/operation-order/${id}/`, payload);
  return data;
}

export async function deleteOperationOrderApi(id: number) {
  await http.delete(`/api/operation-order/${id}/`);
}