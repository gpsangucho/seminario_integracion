import { Cliente } from "../types/Cliente";
import { Mascota } from "../types/Mascota";

export type RootStackParamList = {
  Clientes: undefined;
  ClienteForm: { cliente?: Cliente };
  Mascotas: undefined;
  MascotaForm: { mascota?: Mascota };
};