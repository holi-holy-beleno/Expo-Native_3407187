// src/app/hobbies.tsx
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function HobbiesScreen() {
  const mostrarDetalleHobby = (nombre: string, detalle: string) => {
    Alert.alert(`Pasatiempo: ${nombre}`, detalle, [{ text: "¡Entendido!", style: "default" }]);
  };

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.encabezado}>
        <Text style={estilos.tituloSeccion}>Intereses y Hobbies</Text>
        <Text style={estilos.descripcionSeccion}>
          Actividades, pasatiempos y temas de interés personal. ¡Toca cualquier tarjeta para ver más detalles!
        </Text>
      </View>

      <TarjetaHobby
        titulo="Desarrollo de Software y Código"
        categoria="Tecnología & Programación"
        nombreIcono="code-slash-outline"
        onPress={() =>
          mostrarDetalleHobby(
            "Desarrollo de Software",
            "Me apasiona crear aplicaciones móviles con React Native, experimentar con arquitecturas full-stack y escribir código limpio y eficiente."
          )
        }
      />

      {/* Tarjeta de Videojuegos Actualizada */}
      <TarjetaHobby
        titulo="Videojuegos"
        categoria="Entretenimiento & Retos"
        nombreIcono="game-controller-outline"
        onPress={() =>
          mostrarDetalleHobby(
            "Videojuegos",
            "🎮 Disfruto al máximo de los videojuegos roguelike, de estrategia o de ritmo como The Binding of Isaac, Tower Defense Simulator y osu!mania. ¡Desafíos constantes de reflejos y táctica!"
          )
        }
      />

      <TarjetaHobby
        titulo="Ilustración y Creación de Personajes"
        categoria="Arte & Creatividad"
        nombreIcono="brush-outline"
        onPress={() =>
          mostrarDetalleHobby(
            "Ilustración Digital",
            "Diseño de personajes originales y exploración de paletas de colores vibrantes inspiradas en la estética digital y el arte moderno."
          )
        }
      />

      <TarjetaHobby
        titulo="Práctica y Aprendizaje de Inglés"
        categoria="Idiomas & Formación"
        nombreIcono="book-outline"
        onPress={() =>
          mostrarDetalleHobby(
            "Inglés Técnico",
            "Estudio continuo enfocado en el dominio técnico y gramatical para potenciar la lectura de documentación y el desarrollo profesional."
          )
        }
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