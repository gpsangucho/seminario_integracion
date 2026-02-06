import { useEffect, useState } from "react";
import {
  Container, Paper, Typography, TextField, Button, Stack,
  Table, TableHead, TableRow, TableCell, TableBody, IconButton, Alert
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { type machine, listmachinesApi, createmachineApi, updatemachineApi, deletemachineApi } from "../api/machines.api";

export default function AdminmachinesPage() {
  const [items, setItems] = useState<machine[]>([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  
  const [error, setError] = useState("");

  const load = async () => {
    try {
      setError("");
      const data = await listmachinesApi();
      setItems(data.results); // DRF paginado
    } catch {
      setError("No se pudo cargar machines. ¿Login? ¿Token admin?");
    }
  };

  useEffect(() => { load(); }, []);

  const save = async () => {
    try {
      setError("");
      if (!name.trim()) return setError("name requerido");

      if (editId) await updatemachineApi(editId, name.trim());
      else await createmachineApi(name.trim());

      setName("");
      setEditId(null);
      await load();
    } catch {
      setError("No se pudo guardar machine. ¿Token admin?");
    }
  };

  const startEdit = (m: machine) => {
    setEditId(m.id);
    setName(m.name);
  };

  const remove = async (id: number) => {
    try {
      setError("");
      await deletemachineApi(id);
      await load();
    } catch {
      setError("No se pudo eliminar machine. ¿Vehículos asociados? ¿Token admin?");
    }
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Admin machines (Privado)</Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
          <TextField label="name machine" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
          <Button variant="contained" onClick={save}>{editId ? "Actualizar" : "Crear"}</Button>
          <Button variant="outlined" onClick={() => { setName(""); setEditId(null); }}>Limpiar</Button>
          <Button variant="outlined" onClick={load}>Refrescar</Button>
        </Stack>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>name</TableCell>
              <TableCell>Active</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((m) => (
              <TableRow key={m.id}>
                <TableCell>{m.id}</TableCell>
                <TableCell>{m.name}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => startEdit(m)}><EditIcon /></IconButton>
                  <IconButton onClick={() => remove(m.id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}