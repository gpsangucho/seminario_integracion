import { useState, useEffect } from "react";
import { Consulta } from "../interfaces/Consulta";
import { Mascota } from "../interfaces/Mascota";

interface Props {
  mascotas: Mascota[];
  onSubmit: (data: Consulta) => void;
  consultaEdit?: Consulta | null;
}

export default function ConsultaForm({ mascotas, onSubmit, consultaEdit }: Props) {
  const [form, setForm] = useState<Consulta>({
    mascota: 0,
    fecha: "",
    motivo: "",
    observaciones: "",
  });

  useEffect(() => {
    if (consultaEdit) setForm(consultaEdit);
  }, [consultaEdit]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={submit}>
      <select name="mascota" onChange={handleChange} value={form.mascota}>
        <option value="">Seleccione mascota</option>
        {mascotas.map(m => (
          <option key={m.id} value={m.id}>{m.nombre}</option>
        ))}
      </select>

      <input type="date" name="fecha" value={form.fecha} onChange={handleChange} />
      <input name="motivo" value={form.motivo} onChange={handleChange} placeholder="Motivo" />
      <input name="observaciones" value={form.observaciones} onChange={handleChange} placeholder="Observaciones" />

      <button type="submit">Guardar</button>
    </form>
  );
}
