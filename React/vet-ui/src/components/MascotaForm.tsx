import { useState, useEffect } from "react";
import Mascota from "../interfaces/Mascota";

interface Props {
  onSubmit: (data: Mascota) => void;
  mascotaEdit?: Mascota | null;
}

export default function MascotaForm({ onSubmit, mascotaEdit }: Props) {
  const [form, setForm] = useState<Mascota>({
    nombre: "",
    especie: "",
    raza: "",
    edad: 0,
  });

  useEffect(() => {
    if (mascotaEdit) setForm(mascotaEdit);
  }, [mascotaEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ nombre: "", especie: "", raza: "", edad: 0 });
  };

  return (
    <form onSubmit={submit}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      <input name="especie" value={form.especie} onChange={handleChange} placeholder="Especie" />
      <input name="raza" value={form.raza} onChange={handleChange} placeholder="Raza" />
      <input name="edad" type="number" value={form.edad} onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
}
