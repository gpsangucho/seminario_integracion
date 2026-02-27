import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

import ClientesScreen from "../screens/ClientesScreen";
import ClienteFormScreen from "../screens/ClienteFormScreen";
import MascotasScreen from "../screens/MascotasScreen";
import MascotaFormScreen from "../screens/MascotaFormScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Clientes" component={ClientesScreen} />
      <Stack.Screen name="ClienteForm" component={ClienteFormScreen} />
      <Stack.Screen name="Mascotas" component={MascotasScreen} />
      <Stack.Screen name="MascotaForm" component={MascotaFormScreen} />
    </Stack.Navigator>
  );
}