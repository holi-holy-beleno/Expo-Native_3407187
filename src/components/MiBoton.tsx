// src/components/MiBoton.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface MiBotonProps {
  titulo: string;
  icono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

export default function MiBoton({ titulo, icono, onPress }: MiBotonProps) {
  return (
    <TouchableOpacity style={estilos.boton} onPress={onPress} activeOpacity={0.8}>
      <Ionicons name={icono} size={20} color="#ffffff" style={estilos.icono} />
      <Text style={estilos.textoBoton}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  icono: {
    marginRight: 8,
  },
  textoBoton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});