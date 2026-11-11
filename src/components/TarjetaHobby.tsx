// src/components/TarjetaHobby.tsx
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  titulo: string;
  categoria: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
};

const TarjetaHobby = ({ titulo, categoria, nombreIcono, onPress }: Props) => {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress} activeOpacity={0.7}>
      <View style={estilos.iconoContenedor}>
        <Ionicons name={nombreIcono} size={24} color="#2563eb" />
      </View>
      <View style={estilos.textoContenedor}>
        <Text style={estilos.titulo}>{titulo}</Text>
        <Text style={estilos.categoria}>{categoria}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
    </TouchableOpacity>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  iconoContenedor: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#eef2ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textoContenedor: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
  },
  categoria: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 2,
  },
});