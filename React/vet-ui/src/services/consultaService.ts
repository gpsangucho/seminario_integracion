import { api } from "../api/axios";
import { Consulta } from "../interfaces/Consulta";

export const getConsultas = () => api.get<Consulta[]>("consultas/");
export const createConsulta = (data: Consulta) =>
  api.post("consultas/", data);
export const updateConsulta = (id: number, data: Consulta) =>
  api.put(`consultas/${id}/`, data);
export const deleteConsulta = (id: number) =>
  api.delete(`consultas/${id}/`);
