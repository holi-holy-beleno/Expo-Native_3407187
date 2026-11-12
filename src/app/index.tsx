// src/app/index.tsx
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import MiBoton from "../components/MiBoton";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function HomeScreen() {
  // Función para copiar texto al portapapeles
  const copiarAlPortapapeles = async (texto: string, tipo: string) => {
    await Clipboard.setStringAsync(texto);
    Alert.alert("¡Copiado!", `${tipo} copiado al portapapeles: ${texto}`, [
      { text: "OK", style: "default" },
    ]);
  };

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      {/* Sección de Encabezado / Perfil */}
      <View style={estilos.tarjetaPerfil}>
        <View style={estilos.avatarContainer}>
          <Ionicons name="person" size={50} color="#2563eb" />
        </View>
        <Text style={estilos.nombre}>Juan Camilo Beleño Yate</Text>
        <Text style={estilos.rol}>Aprendiz ADSO • Desarrollador de Software</Text>
        <Text style={estilos.bio}>
          Apasionado por la tecnología, el desarrollo web y móvil con React Native, y la creación de soluciones eficientes.
        </Text>
      </View>

      {/* Sección de Contacto con Copiado Rápido */}
      <View style={estilos.seccion}>
        <Text style={estilos.tituloSeccion}>Contacto e Información</Text>
        <Text style={estilos.subtituloSeccion}>
          Toca cualquier botón para copiar la información directamente.
        </Text>

        <MiBoton
          titulo="Copiar Correo Electrónico"
          icono="mail-outline"
          onPress={() => copiarAlPortapapeles("senabeleno.hola@gmail.com", "Correo electrónico")}
        />

        <MiBoton
          titulo="Copiar Número de Teléfono"
          icono="call-outline"
          onPress={() => copiarAlPortapapeles("+57 314 2476162", "Teléfono")}
        />

        <MiBoton
          titulo="Copiar enlace de GitHub"
          icono="logo-github"
          onPress={() => copiarAlPortapapeles("https://github.com/holi-holy-beleno/Expo-Native_3407187", "Enlace de GitHub")}
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
  tarjetaPerfil: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  nombre: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
    textAlign: "center",
  },
  rol: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563eb",
    marginBottom: 12,
    textAlign: "center",
  },
  bio: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 20,
  },
  seccion: {
    marginBottom: 20,
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 4,
  },
  subtituloSeccion: {
    fontSize: 13,
    color: "#64748b",
    marginBottom: 12,
  },
});