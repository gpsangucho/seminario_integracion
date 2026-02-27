import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { Mascota } from "../types/Mascota";
import { getMascotas, deleteMascota } from "../api/mascotaService";

type Props = NativeStackScreenProps<RootStackParamList, "Mascotas">;

export default function MascotasScreen({ navigation }: Props) {
  const [mascotas, setMascotas] = useState<Mascota[]>([]);

  const loadMascotas = async () => {
    const data = await getMascotas();
    setMascotas(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadMascotas);
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      <Button
        title="Agregar Mascota"
        onPress={() => navigation.navigate("MascotaForm",{})}
      />

      <FlatList
        data={mascotas}
        keyExtractor={(item) => item.id!}
        renderItem={({ item }) => (
          <View>
            <Text>
              {item.nombre} - {item.especie} ({item.edad} años)
            </Text>

            <Button
              title="Editar"
              onPress={() =>
                navigation.navigate("MascotaForm", { mascota: item })
              }
            />

            <Button
              title="Eliminar"
              onPress={async () => {
                await deleteMascota(item.id!);
                loadMascotas();
              }}
            />
          </View>
        )}
      />
    </View>
  );
}