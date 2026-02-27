import API from "./api";
import { Cliente } from "../types/Cliente";

export const getClientes = async (): Promise<Cliente[]> => {
  const res = await API.get<Cliente[]>("clientes/");
  return res.data;
};

export const createCliente = async (data: Cliente): Promise<Cliente> => {
  const res = await API.post<Cliente>("clientes/crear/", data);
  return res.data;
};

export const updateCliente = async (
  id: string,
  data: Cliente
): Promise<Cliente> => {
  const res = await API.put<Cliente>(`clientes/${id}/`, data);
  return res.data;
};

export const deleteCliente = async (id: string): Promise<void> => {
  await API.delete(`clientes/${id}/eliminar/`);
};