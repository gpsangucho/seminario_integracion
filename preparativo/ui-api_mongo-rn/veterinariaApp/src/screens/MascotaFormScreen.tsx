import React, { useEffect, useState } from "react";
import { View, TextInput, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { Mascota } from "../types/Mascota";
import { Cliente } from "../types/Cliente";
import {
  createMascota,
  updateMascota,
} from "../api/mascotaService";
import { getClientes } from "../api/clienteService";

type Props = NativeStackScreenProps<RootStackParamList, "MascotaForm">;

export default function MascotaFormScreen({ route, navigation }: Props) {
  const mascota = route.params?.mascota;

  const [nombre, setNombre] = useState<string>(mascota?.nombre || "");
  const [especie, setEspecie] = useState<string>(mascota?.especie || "");
  const [edad, setEdad] = useState<string>(
    mascota?.edad ? mascota.edad.toString() : ""
  );
  const [clienteId, setClienteId] = useState<string>(
    mascota?.cliente_id || ""
  );

  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const loadClientes = async () => {
      const data = await getClientes();
      setClientes(data);
    };
    loadClientes();
  }, []);

  const handleSave = async () => {
    const data: Mascota = {
      nombre,
      especie,
      edad: Number(edad),
      cliente_id: clienteId,
    };

    if (mascota?.id) {
      await updateMascota(mascota.id, data);
    } else {
      await createMascota(data);
    }

    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Especie" value={especie} onChangeText={setEspecie} />
      <TextInput
        placeholder="Edad"
        keyboardType="numeric"
        value={edad}
        onChangeText={setEdad}
      />

      {/* Aquí podrías reemplazar por Picker */}
      <TextInput
        placeholder="Cliente ID"
        value={clienteId}
        onChangeText={setClienteId}
      />

      <Button title="Guardar" onPress={handleSave} />
    </View>
  );
}