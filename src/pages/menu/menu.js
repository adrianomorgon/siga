import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from "react-native";
import AutoDimensionImage, {
  imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import MenuModal from '../menuModal/menuModal';

import colors from "../../styles/colors";

const numColumns = 2;

const Separator = () => {
  const { height } = useWindowDimensions();
  const separatorPercentHeight = height * 0.05;
  return <View style={{ height: separatorPercentHeight }} />;
};

function MenuScreen({navigation}) {
  const { height } = useWindowDimensions();
  const imagemPercentHeight = height * 0.12;

  const [modalConsultasVisible, setModalConsultasVisible] = useState(false);

  const handleOpenModalConsultas = () => {
    setModalConsultasVisible(true);
  };

  const handleCloseModalConsultas = () => {
    setModalConsultasVisible(false);
  };

  const [modalAgendaVisible, setModalAgendaVisible] = useState(false);

  const handleOpenModalAgenda = () => {
    setModalAgendaVisible(true);
  };

  const handleCloseModalAgenda = () => {
    setModalAgendaVisible(false);
  };

  const [modalSolicitacoesVisible, setModalSolicitacoesVisible] = useState(false);

  const handleOpenModalSolicitacoes = () => {
    setModalSolicitacoesVisible(true);
  };

  const handleCloseModalSolicitacoes = () => {
    setModalSolicitacoesVisible(false);
  };

  const handleNavigationPlanosDeEnsino = () => {
    navigation.navigate('PlanosDeEnsino')
  }

  const handleNavigationSeguranca = () => {
    navigation.navigate('Seguranca')
  }

  const handleNavigationRematricula = () => {
    navigation.navigate('Rematricula')
  }

  const data = [
    {
      id: "1",
      title: "Consultas",
      icon: require("../../../assets/icons/menu/consultas.png"),
      handleNavigation: handleOpenModalConsultas,
      modalIcons: [
        {
          id: "1.1",
          title: "Avisos",
          icon: require("../../../assets/icons/menu/consultas/avisos.png")
        },
        {
          id: "1.2",
          title: "Histórico",
          icon: require("../../../assets/icons/menu/consultas/historico.png")
        },
        {
          id: "1.3",
          title: "Horário",
          icon: require("../../../assets/icons/menu/consultas/horario.png")
        },
        {
          id: "1.4",
          title: "Notas",
          icon: require("../../../assets/icons/menu/consultas/notas.png")
        },
        {
          id: "1.5",
          title: "Faltas",
          icon: require("../../../assets/icons/menu/consultas/faltas.png")
        },
        {
          id: null,
          title: null,
          icon: null
        },
      ]
    },
    {
      id: "2",
      title: "Agenda",
      icon: require("../../../assets/icons/menu/agenda.png"),
      handleNavigation: handleOpenModalAgenda,
      modalIcons: [
        {
          id: "2.1",
          title: "Calendário de Provas",
          icon: require("../../../assets/icons/menu/agenda/calendario-de-provas.png")
        },
        {
          id: "2.2",
          title: "Calendário Acadêmico",
          icon: require("../../../assets/icons/menu/agenda/calendario-academico.png")
        },
      ]
    },
    {
      id: "3",
      title: "Solicitações",
      icon: require("../../../assets/icons/menu/solicitacoes.png"),
      handleNavigation: handleOpenModalSolicitacoes,
      modalIcons: [
        {
          id: "3.1",
          title: "Solicitação de Documentos",
          icon: require("../../../assets/icons/menu/solicitacoes/sol-documentos.png")
        },
        {
          id: "3.2",
          title: "Revisão de Notas/Faltas",
          icon: require("../../../assets/icons/menu/solicitacoes/sol-revisao-notas-faltas.png")
        },
      ]
    },
    {
      id: "4",
      title: "Planos de Ensino",
      icon: require("../../../assets/icons/menu/plano-de-ensino.png"),
      handleNavigation: handleNavigationPlanosDeEnsino,
    },
    {
      id: "5",
      title: "Segurança",
      icon: require("../../../assets/icons/menu/seguranca.png"),
      handleNavigation: handleNavigationSeguranca,
    },
    {
      id: "6",
      title: "Rematrícula",
      icon: require("../../../assets/icons/menu/rematricula.png"),
      handleNavigation: handleNavigationRematricula,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={item.handleNavigation}>
        <View style={styles.itemContent}>
          <AutoDimensionImage
            source={item.icon}
            dimensionType={imageDimensionTypes.HEIGHT}
            dimensionValue={imagemPercentHeight}
          />
          <Text style={styles.itemText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      />
      <MenuModal
        modalVisible={modalConsultasVisible}
        closeModal={handleCloseModalConsultas}
        modalTitle={"Consultas"}
        data={data[0].modalIcons}
      />
      <MenuModal
        modalVisible={modalAgendaVisible}
        closeModal={handleCloseModalAgenda}
        modalTitle={"Agenda"}
        data={data[1].modalIcons}
      />
      <MenuModal
        modalVisible={modalSolicitacoesVisible}
        closeModal={handleCloseModalSolicitacoes}
        modalTitle={"Solicitaçoes"}
        data={data[2].modalIcons}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  item: {
    flex: 1,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  itemContent: {
    alignItems: "center",
  },
  itemText: {
    marginTop: 10,
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    color: colors.mediumgrey,
  },
});

export default MenuScreen;
