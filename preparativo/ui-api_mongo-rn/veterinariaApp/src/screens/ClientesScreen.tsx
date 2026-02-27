import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { Cliente } from "../types/Cliente";
import { getClientes, deleteCliente } from "../api/clienteService";

export default function ClientesScreen({ navigation }: any) {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const loadClientes = async () => {
    const data = await getClientes();
    setClientes(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadClientes);
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Button
        title="Agregar Cliente"
        onPress={() => navigation.navigate("ClienteForm")}
      />

      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <View>
            <Text>{item.nombre} - {item.telefono}</Text>
            <Button
              title="Editar"
              onPress={() =>
                navigation.navigate("ClienteForm", { cliente: item })
              }
            />
            <Button
              title="Eliminar"
              onPress={async () => {
                await deleteCliente(item.id!);
                loadClientes();
              }}
            />
          </View>
        )}
      />
    </View>
  );
}