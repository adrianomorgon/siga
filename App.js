import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/pages/login/login";
import MenuScreen from "./src/pages/menu/menu";
import PlanosDeEnsinoScreen from "./src/pages/planosDeEnsino/planosDeEnsino";
import PlanoDeEnsinoComponentScreen from "./src/pages/planosDeEnsino/planoDeEnsinoComponent";
import ApresentacaoComponentScreen from "./src/pages/planosDeEnsino/apresentacaoComponent";
import AulasComponentScreen from "./src/pages/planosDeEnsino/aulasComponent";
import MaterialDeEstudoComponentScreen from "./src/pages/planosDeEnsino/materialDeEstudoComponent";
import BibliografiaComponentScreen from "./src/pages/planosDeEnsino/bibliografiaComponent";
import SegurancaScreen from "./src/pages/seguranca/seguranca";
import RematriculaScreen from "./src/pages/rematricula/rematricula";
import AvisosScreen from "./src/pages/consultas/avisos";
import HistoricoScreen from "./src/pages/consultas/historico";
import HorarioScreen from "./src/pages/consultas/horario";
import FaltasScreen from "./src/pages/consultas/faltasComponent";
import SolicitacoesDocumentosScreen from "./src/pages/solicitacoes/solicitacoesDocumentos";
import { useFonts } from "expo-font";
import { Ionicons, Fontisto } from "@expo/vector-icons";

import colors from "./src/styles/colors";

const LogoTitle = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginRight: 150 }}>
      <Image
        style={{ height: 40}}
        resizeMode="contain"
        source={require("./assets/icons/siga.png")}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BoldCondensed": require("./assets/fonts/Roboto-BoldCondensed.ttf"),
    "Roboto-BoldCondensedItalic": require("./assets/fonts/Roboto-BoldCondensedItalic.ttf"),
    "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Condensed": require("./assets/fonts/Roboto-Condensed.ttf"),
    "Roboto-CondensedItalic": require("./assets/fonts/Roboto-CondensedItalic.ttf"),
    "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log("Bell pressed")}>
              <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: colors.red,
          },
          headerTintColor: "white",
          headerMode: 'float',
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
        />
        <Stack.Screen
          name="PlanosDeEnsino"
          component={PlanosDeEnsinoScreen}
        />
        <Stack.Screen
          name="Seguranca"
          component={SegurancaScreen}
        />
        <Stack.Screen
          name="Rematricula"
          component={RematriculaScreen}
        />
        <Stack.Screen
          name="Avisos"
          component={AvisosScreen}
        />
        <Stack.Screen
          name="Historico"
          component={HistoricoScreen}
        />
        <Stack.Screen
          name="Horario"
          component={HorarioScreen}
        />
        <Stack.Screen
          name="Faltas"
          component={FaltasScreen}
        />
        <Stack.Screen
          name="Plano de Ensino"
          component={PlanoDeEnsinoComponentScreen}
        />
        <Stack.Screen
          name="Material de Estudo"
          component={MaterialDeEstudoComponentScreen}
        />
        <Stack.Screen
          name="Bibliografia"
          component={BibliografiaComponentScreen}
        />
        <Stack.Screen
          name="Apresentacao"
          component={ApresentacaoComponentScreen}
        />
        <Stack.Screen
          name="Aulas"
          component={AulasComponentScreen}
        />
        <Stack.Screen
          name="Solicitacao de Documentos"
          component={SolicitacoesDocumentosScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
