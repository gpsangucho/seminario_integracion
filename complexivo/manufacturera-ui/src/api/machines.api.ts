import { http } from "./http";

export type Paginated<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type Marca = { id: number; name: string };

export async function listMachinesApi() {
  const { data } = await http.get<Paginated<Marca>>("/api/machines/");
  return data; // { count, next, previous, results }
}

export async function createMachineApi(name: string) {
  const { data } = await http.post<Marca>("/api/machines/", { name, is_active });
  return data;
}

export async function updateMachineApi(id: number, name: string, is_active: boolean) {
  const { data } = await http.put<Marca>(`/api/machines/${id}/`, { name });
  return data;
}

export async function deleteMarcaApi(id: number) {
  await http.delete(`/api/marcas/${id}/`);
}