import API from "./api";
import { Mascota } from "../types/Mascota";

export const getMascotas = async (): Promise<Mascota[]> => {
  const res = await API.get<Mascota[]>("mascotas/");
  return res.data;
};

export const createMascota = async (data: Mascota): Promise<Mascota> => {
  const res = await API.post<Mascota>("mascotas/crear/", data);
  return res.data;
};

export const updateMascota = async (
  id: string,
  data: Mascota
): Promise<Mascota> => {
  const res = await API.put<Mascota>(`mascotas/${id}/`, data);
  return res.data;
};

export const deleteMascota = async (id: string): Promise<void> => {
  await API.delete(`mascotas/${id}/eliminar/`);
};