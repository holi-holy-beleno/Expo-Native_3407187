// src/app/hobbies.tsx
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function HobbiesScreen() {
  const mostrarDetalleHobby = (nombre: string, detalle: string) => {
    Alert.alert(`Detalles de ${nombre}`, detalle, [{ text: "Entendido", style: "default" }]);
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
        titulo="Desarrollo de Software"
        categoria="Tecnología & Aprendizaje"
        nombreIcono="code-slash-outline"
        onPress={() =>
          mostrarDetalleHobby(
            "Desarrollo de Software",
            "Me apasiona explorar nuevas tecnologías, librerías del ecosistema de JavaScript/TypeScript y construir proyectos móviles y web funcionales."
          )
        }
      />

      <TarjetaHobby
        titulo="Videojuegos"
        categoria="Entretenimiento"
        nombreIcono="game-controller-outline"
        onPress={() =>
          mostrarDetalleHobby(
            "Videojuegos",
            "Disfruto juegos de estrategia y rol de plataformas como Hoyoverse y títulos multijugador para despejar la mente."
          )
        }
      />

      <TarjetaHobby
        titulo="Ilustración Digital y Diseño"
        categoria="Arte & Creatividad"
        nombreIcono="brush-outline"
        onPress={() =>
          mostrarDetalleHobby(
            "Ilustración Digital",
            "Creación de conceptos visuales, diseño de personajes y exploración estética de paletas de colores en entornos digitales."
          )
        }
      />

      <TarjetaHobby
        titulo="Lectura y Práctica de Idiomas"
        categoria="Crecimiento Personal"
        nombreIcono="book-outline"
        onPress={() =>
          mostrarDetalleHobby(
            "Idiomas",
            "Práctica continua del idioma inglés (nivel B1-B2) enfocado en vocabulario técnico para desarrollo de software."
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