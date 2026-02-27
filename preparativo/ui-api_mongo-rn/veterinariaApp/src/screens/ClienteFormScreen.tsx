import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { Cliente } from "../types/Cliente";
import { createCliente, updateCliente } from "../api/clienteService";

export default function ClienteFormScreen({ route, navigation }: any) {
  const cliente: Cliente | undefined = route.params?.cliente;

  const [nombre, setNombre] = useState<string>(cliente?.nombre || "");
  const [apellido, setApellido] = useState<string>(cliente?.apellido || "");
  const [telefono, setTelefono] = useState<string>(cliente?.telefono || "");
  const [email, setEmail] = useState<string>(cliente?.email || "");

  const handleSave = async () => {
    const data: Cliente = { nombre, apellido, telefono, email };

    if (cliente?.id) {
      await updateCliente(cliente.id, data);
    } else {
      await createCliente(data);
    }

    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Apellido" value={apellido} onChangeText={setApellido} />
      <TextInput placeholder="Telefono" value={telefono} onChangeText={setTelefono} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
}