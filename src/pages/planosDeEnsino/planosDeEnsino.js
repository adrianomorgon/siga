import * as React from "react";
import {
    Text, View, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions
} from "react-native";
import AutoDimensionImage, {
    imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import commomStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

function PlanosDeEnsinoScreen({ navigation }) {
    const data = [
        {
            id: "1",
            disciplina: "Gestão de Equipes",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png"),
        },
        {
            id: "2",
            disciplina: "Economia e Finanças",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "3",
            disciplina: "Sociedade e Tecnologia",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "4",
            disciplina: "Engenharia de Software II",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "5",
            disciplina: "Programação Orient Objetos",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "6",
            disciplina: "Sistemas Operacionais II",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "7",
            disciplina: "Estatística Aplicada",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "8",
            disciplina: "Programação Linear",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: null,
            disciplina: null,
            icon: null
        },
    ];

    const handleNavigationPlanoDeEnsino = () => {
        navigation.navigate('Plano de Ensino', {
            titulo: "teste"
        })
      }

    const { height } = useWindowDimensions();
    const imagemPercentHeight = height * 0.10;

    const renderItem = ({ item }) => {
        if(item.id === null){
            return <View style={styles.emptyItem} />;
        }
        return (
            <TouchableOpacity style={styles.item} onPress={handleNavigationPlanoDeEnsino()}>
                <View style={styles.itemContent}>
                    <AutoDimensionImage
                        source={item.icon}
                        dimensionType={imageDimensionTypes.HEIGHT}
                        dimensionValue={imagemPercentHeight}
                    />
                    <Text style={styles.itemText}>{item.disciplina}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const numColumns = 3

    const Separator = () => {
        const { height } = useWindowDimensions();
        const separatorPercentHeight = height * 0.05;
        return <View style={{ height: separatorPercentHeight }} />;
    };

    return (
        <View>
            <Text style={commomStyles.title}>Planos de Ensino</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                ItemSeparatorComponent={Separator}
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            />
        </View>
    )
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
        fontSize: 16,
        color: colors.mediumgrey,
        textAlign: "center",
    },
    emptyItem: {
        width: '33%',
      },
});

export default PlanosDeEnsinoScreen;