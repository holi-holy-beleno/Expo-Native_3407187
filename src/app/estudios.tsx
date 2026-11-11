// src/app/estudios.tsx
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function EstudiosScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Text style={estilos.tituloSeccion}>Historial Académico</Text>
        <Text style={estilos.descripcionSeccion}>
          Formación profesional, tecnológica y técnica acumulada hasta la fecha.
        </Text>
      </View>

      {/* 1. Tecnología en ADSO en el SENA (En curso) */}
      <TarjetaEstudio
        titulo="Tecnología en Análisis y Desarrollo de Software (ADSO)"
        institucion="Servicio Nacional de Aprendizaje - SENA"
        anio="2024 - Presente"
        enCurso={true}
      />

      {/* 2. Educación Media / Bachiller */}
      <TarjetaEstudio
        titulo="Bachiller Académico"
        institucion="Institución Educativa Distrital / Municipal"
        anio={2023}
        enCurso={false}
      />

      {/* 3. Curso / Técnico complementario */}
      <TarjetaEstudio
        titulo="Técnico en Programación de Software"
        institucion="SENA / Centro de Idiomas"
        anio={2023}
        enCurso={false}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  contenido: {
    padding: 20,
  },
  encabezado: {
    marginBottom: 16,
  },
  tituloSeccion: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },
  descripcionSeccion: {
    fontSize: 14,
    color: "#64748b",
  },
});