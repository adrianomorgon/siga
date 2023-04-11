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

const data = [
  {
    id: "1",
    title: "Consultas",
    icon: require("../../../assets/icons/menu/consultas.png"),
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
    ]
  },
  {
    id: "2",
    title: "Agenda",
    icon: require("../../../assets/icons/menu/agenda.png"),
  },
  {
    id: "3",
    title: "Solicitações",
    icon: require("../../../assets/icons/menu/solicitacoes.png"),
  },
  {
    id: "4",
    title: "Plano de Ensino",
    icon: require("../../../assets/icons/menu/plano-de-ensino.png"),
  },
  {
    id: "5",
    title: "Segurança",
    icon: require("../../../assets/icons/menu/seguranca.png"),
  },
  {
    id: "6",
    title: "Rematrícula",
    icon: require("../../../assets/icons/menu/rematricula.png"),
  },
];

const numColumns = 2;

const Separator = () => {
  const { height } = useWindowDimensions();
  const separatorPercentHeight = height * 0.05;
  return <View style={{ height: separatorPercentHeight }} />;
};

function MenuScreen() {
  const { height } = useWindowDimensions();
  const imagemPercentHeight = height * 0.12;

  const [modalVisible, setModalVisible] = useState(false);

  // Função para abrir o modal
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={handleOpenModal}>
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
        columnWrapperStyle={styles.row}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      />
      <MenuModal
        modalVisible={modalVisible}
        closeModal={handleCloseModal}
        modalContent="Conteúdo do Modal"
        onPress={handleCloseModal}
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
