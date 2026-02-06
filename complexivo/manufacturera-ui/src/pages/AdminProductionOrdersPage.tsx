import { useEffect, useState } from "react";
import {
  Container, Paper, Typography, TextField, Button, Stack,
  Table, TableHead, TableRow, TableCell, TableBody, IconButton, Alert,
  FormControl, InputLabel, Select, MenuItem
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { type Machine, listMachinesApi } from "../api/Machines.api";
import { type OperationOrder, listoperation-ordersAdminApi, createOperationOrderApi, updateOperationOrderApi, deleteOperationOrderApi } from "../api/operation-orders.api";

export default function Adminoperation-ordersPage() {
  const [items, setItems] = useState<OperationOrder[]>([]);
  const [machines, setMachines] = useState<Machine[]>([]);
  const [error, setError] = useState("");

  const [editId, setEditId] = useState<number | null>(null);
  const [Machine, setMachine] = useState<number>(0);
  const [product_name, setproduct_name] = useState("");
  const [quantity, setquantity] = useState(2020);
  const [status, setstatus] = useState("");
  const [color, setColor] = useState("");

  const load = async () => {
    try {
      setError("");
      const data = await listoperation-ordersAdminApi();
      setItems(data.results); // DRF paginado
    } catch {
      setError("No se pudo cargar vehículos. ¿Login? ¿Token admin?");
    }
  };

  const loadMachines = async () => {
    try {
      const data = await listMachinesApi();
      setMachines(data.results); // DRF paginado
      if (!Machine && data.results.length > 0) setMachine(data.results[0].id);
    } catch {
      // si falla, no bloquea la pantalla
    }
  };

  useEffect(() => { load(); loadMachines(); }, []);

  const save = async () => {
    try {
      setError("");
      if (!Machine) return setError("Seleccione una Machine");
      if (!product_name.trim() || !status.trim()) return setError("product_name y status son requeridos");

      const payload = {
        Machine: Number(Machine),
        product_name: product_name.trim(),
        quantity: Number(quantity),
        status: status.trim(),
      };

      if (editId) await updateOperationOrderApi(editId, payload);
      else await createOperationOrderApi(payload as any);

      setEditId(null);
      setproduct_name("");
      setstatus("");
      setColor("");
      await load();
    } catch {
      setError("No se pudo guardar vehículo. ¿Token admin?");
    }
  };

  const startEdit = (v: OperationOrder) => {
    setEditId(v.id);
    setMachine(v.Machine);
    setProduct_name(v.product_name);
    setQuantity(v.quantity);
    setStatus(v.status);
  };

  const remove = async (id: number) => {
    try {
      setError("");
      await deleteOperationOrderApi(id);
      await load();
    } catch {
      setError("No se pudo eliminar vehículo. ¿Token admin?");
    }
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>Admin Vehículos (Privado)</Typography>

        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Stack spacing={2} sx={{ mb: 2 }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>

            <FormControl sx={{ width: 260 }}>
              <InputLabel id="Machine-label">Machine</InputLabel>
              <Select
                labelId="Machine-label"
                label="Machine"
                value={machine}
                onChange={(e) => setMachine(Number(e.target.value))}
              >
                {Machines.map((m) => (
                  <MenuItem key={m.id} value={m.id}>
                    {m.name} (#{m.id})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField label="product_name" value={product_name} onChange={(e) => setproduct_name(e.target.value)} fullWidth />
            <TextField label="Cantidad" type="number" value={quantity} onChange={(e) => setquantity(Number(e.target.value))} sx={{ width: 160 }} />
          </Stack>

          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <TextField label="status" value={status} onChange={(e) => setstatus(e.target.value)} sx={{ width: 220 }} />
            <TextField label="Color" value={color} onChange={(e) => setColor(e.target.value)} sx={{ width: 220 }} />

            <Button variant="contained" onClick={save}>{editId ? "Actualizar" : "Crear"}</Button>
            <Button variant="outlined" onClick={() => { setEditId(null); setproduct_name(""); setstatus(""); }}>Limpiar</Button>
            <Button variant="outlined" onClick={() => { load(); loadMachines(); }}>Refrescar</Button>
          </Stack>
        </Stack>

        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Machine</TableCell>
              <TableCell>product_name</TableCell>
              <TableCell>cantidad</TableCell>
              <TableCell>status</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((v) => (
              <TableRow key={v.id}>
                <TableCell>{v.id}</TableCell>
                <TableCell>{v.Machine_nombre ?? v.Machine}</TableCell>
                <TableCell>{v.product_name}</TableCell>
                <TableCell>{v.quantity}</TableCell>
                <TableCell>{v.status}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => startEdit(v)}><EditIcon /></IconButton>
                  <IconButton onClick={() => remove(v.id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}