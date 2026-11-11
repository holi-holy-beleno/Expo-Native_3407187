// src/app/index.tsx
import { Ionicons } from "@expo/vector-icons";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";

export default function InicioScreen() {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      {/* Sección Perfil / Avatar */}
      <View style={estilos.avatarContenedor}>
        <Ionicons name="person-circle" size={100} color="#2563eb" />
        <Text style={estilos.nombre}>Juan Camilo Beleño Yate</Text>
        <Text style={estilos.profesion}>Tecnólogo en ADSO</Text>
      </View>

      {/* Perfil Profesional */}
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
          Aprendiz del SENA apasionado por el desarrollo de aplicaciones móviles y web. Con habilidades en React Native, JavaScript, TypeScript, HTML5, CSS3, Python y gestión de bases de datos relacionales y no relacionales.
        </Text>
      </View>

      {/* Sección de Contacto e Interactividad */}
      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto y Enlaces</Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E8D464"
          onPress={() => Alert.alert("Contacto", "Correo: juancamilo.beleno@misena.edu.co")}
        />

        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#3b82f6"
          onPress={() => Alert.alert("Teléfono", "Número de Contacto: +57 300 123 4567")}
        />

        <MiBoton
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0284c7"
          onPress={() => Alert.alert("LinkedIn", "https://linkedin.com/in/juan-camilo-beleno")}
        />

        <MiBoton
          textoBoton="Repositorio GitHub"
          nombreIcono="logo-github"
          colorBoton="#334155"
          onPress={() => Alert.alert("GitHub", "https://github.com/holi-holy-beleno/proyecto-expo")}
        />
      </View>
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
  avatarContenedor: {
    alignItems: "center",
    marginBottom: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f172a",
    marginTop: 8,
  },
  profesion: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "600",
  },
  seccion: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 12,
  },
  parrafo: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 20,
  },
});