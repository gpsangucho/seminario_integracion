import { useEffect, useState } from "react";
import { Consulta } from "../interfaces/Consulta";
import { Mascota } from "../interfaces/Mascota";
import * as consultaService from "../services/consultaService";
import * as mascotaService from "../services/mascotaService";
import ConsultaForm from "../components/ConsultaForm";

export default function Consultas() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [mascotas, setMascotas] = useState<Mascota[]>([]);
  const [edit, setEdit] = useState<Consulta | null>(null);

  const load = async () => {
    setConsultas((await consultaService.getConsultas()).data);
    setMascotas((await mascotaService.getMascotas()).data);
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async (data: Consulta) => {
    edit
      ? await consultaService.updateConsulta(edit.id!, data)
      : await consultaService.createConsulta(data);
    setEdit(null);
    load();
  };

  return (
    <div>
      <h2>Consultas</h2>
      <ConsultaForm mascotas={mascotas} onSubmit={submit} consultaEdit={edit} />

      {consultas.map(c => (
        <div key={c.id}>
          Mascota #{c.mascota} - {c.fecha}
          <button onClick={() => setEdit(c)}>Editar</button>
          <button onClick={() => consultaService.deleteConsulta(c.id!).then(load)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}
