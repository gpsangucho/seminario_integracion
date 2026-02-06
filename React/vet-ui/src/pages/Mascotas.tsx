import { useEffect, useState } from "react";
import { Mascota } from "../interfaces/Mascota";
import * as service from "../services/mascotaService";
import MascotaForm from "../components/MascotaForm";

export default function Mascotas() {
  const [mascotas, setMascotas] = useState<Mascota[]>([]);
  const [edit, setEdit] = useState<Mascota | null>(null);

  const load = () =>
    service.getMascotas().then(res => setMascotas(res.data));

  useEffect(load, []);

  const submit = async (data: Mascota) => {
    edit ? await service.updateMascota(edit.id!, data) 
         : await service.createMascota(data);
    setEdit(null);
    load();
  };

  return (
    <div>
      <h2>Mascotas</h2>
      <MascotaForm onSubmit={submit} mascotaEdit={edit} />

      {mascotas.map(m => (
        <div key={m.id}>
          {m.nombre}
          <button onClick={() => setEdit(m)}>Editar</button>
          <button onClick={() => service.deleteMascota(m.id!).then(load)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}
