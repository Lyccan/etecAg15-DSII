import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Cadastro de Evento" }} />
      <Stack.Screen name="resumo" options={{ title: "Resumo do Evento" }} />
    </Stack>
  );
}
