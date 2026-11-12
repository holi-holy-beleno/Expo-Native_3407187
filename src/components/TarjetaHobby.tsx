// src/components/TarjetaHobby.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TarjetaHobbyProps {
  titulo: string;
  categoria: string;
  nombreIcono: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
}

export default function TarjetaHobby({ titulo, categoria, nombreIcono, onPress }: TarjetaHobbyProps) {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress} activeOpacity={0.7}>
      <View style={estilos.iconoContenedor}>
        <Ionicons name={nombreIcono} size={28} color="#2563eb" />
      </View>
      <View style={estilos.textoContenedor}>
        <Text style={estilos.titulo}>{titulo}</Text>
        <Text style={estilos.categoria}>{categoria}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconoContenedor: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  textoContenedor: {
    flex: 1,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 2,
  },
  categoria: {
    fontSize: 13,
    color: "#64748b",
  },
});