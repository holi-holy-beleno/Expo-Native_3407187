// src/components/TarjetaExperiencia.tsx
import { StyleSheet, Text, View } from "react-native";

type Props = {
  puesto: string;
  empresa: string;
  periodo: string;
  descripcion: string;
};

const TarjetaExperiencia = ({ puesto, empresa, periodo, descripcion }: Props) => {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.puesto}>{puesto}</Text>
      <Text style={estilos.empresa}>{empresa} • <Text style={estilos.periodo}>{periodo}</Text></Text>
      <Text style={estilos.descripcion}>{descripcion}</Text>
    </View>
  );
};

export default TarjetaExperiencia;

const estilos = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  puesto: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },
  empresa: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563eb",
    marginBottom: 6,
  },
  periodo: {
    fontSize: 12,
    color: "#64748b",
    fontWeight: "normal",
  },
  descripcion: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },
});