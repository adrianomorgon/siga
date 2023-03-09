import * as React from "react";
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

import colors from "../../styles/colors";

const data = [
  {
    id: "1",
    title: "Consultas",
    icon: require("../../../assets/icons/menu/consultas.png"),
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

const imageSize = 80;
const numColumns = 2;

const Separator = () => {
  const { height } = useWindowDimensions();
  const separatorPercentHeight = height * 0.05;
  return <View style={{ height: separatorPercentHeight }} />;
};

function MenuScreen() {
  const { height } = useWindowDimensions();
  const imagemPercentHeight = height * 0.12;

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item}>
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
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      columnWrapperStyle={styles.row}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    borderWidth: 1,
    borderColor: "blue",
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   row: {
//     flexDirection: "row",
//     height: "30%",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "pink",
//   },
//   column: {
//     flexDirection: "column",
//     borderWidth: 2,
//     borderColor: "green",
//     width: "50%",
//   },
//   botao: {
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 2,
//     borderColor: "black",
//   },
//   font: {
//     marginTop: 10,
//     fontFamily: "Roboto-Regular",
//     fontSize: 18,
//     color: colors.mediumgrey,
//   },
// });

export default MenuScreen;
