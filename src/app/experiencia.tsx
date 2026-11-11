// src/app/experiencia.tsx
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function ExperienciaScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Text style={estilos.tituloSeccion}>Experiencia y Proyectos</Text>
        <Text style={estilos.descripcionSeccion}>
          Trayectoria en desarrollo de software, proyectos formativos y colaboraciones.
        </Text>
      </View>

      <TarjetaExperiencia
        puesto="Desarrollador Full-Stack (Proyecto Formativo)"
        empresa="Sistema Web y Móvil IERD Duitama"
        periodo="2024 - Presente"
        descripcion="Diseño e implementación de arquitectura full-stack, modelado de base de datos relacional y desarrollo del sistema de gestión deportiva y académica."
      />

      <TarjetaExperiencia
        puesto="Desarrollador Frontend React / Expo"
        empresa="Proyectos Académicos SENA"
        periodo="2024"
        descripcion="Construcción de interfaces de usuario móviles con React Native, consumo de APIs RESTful y gestión de componentes reutilizables con TypeScript."
      />

      <TarjetaExperiencia
        puesto="Aprendiz en Desarrollo de Software"
        empresa="Centro de Gestión de Mercados, Logística y TIC - SENA"
        periodo="2024"
        descripcion="Aplicación de metodologías ágiles (Scrum), elaboración de diagramación UML, control de versiones con Git/GitHub y desarrollo de módulos backend con Node.js / Python."
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