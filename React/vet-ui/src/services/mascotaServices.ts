import { api } from "../api/axios";
import { Mascota } from "../interfaces/Mascota";

export const getMascotas = () => api.get<Mascota[]>("mascotas/");
export const createMascota = (data: Mascota) => api.post("mascotas/", data);
export const updateMascota = (id: number, data: Mascota) =>
  api.put(`mascotas/${id}/`, data);
export const deleteMascota = (id: number) =>
  api.delete(`mascotas/${id}/`);
