import * as React from "react";
import {
    Text, View, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions
} from "react-native";
import AutoDimensionImage, {
    imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import commomStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

function PlanoDeEnsinoComponentScreen({route, navigation}) {
    const { titulo, conteudo } = route.params;
    const data = [
        {
            id: "1",
            disciplina: "Apresentação",
            icon: require("../../../assets/icons/planos-de-ensino/apresentacao.png"),
            handleNavigation: handleNavigationApresentacao,
        },
        {
            id: "2",
            disciplina: "Aulas",
            icon: require("../../../assets/icons/planos-de-ensino/aulas.png")
        },
        {
            id: "3",
            disciplina: "Avaliações",
            icon: require("../../../assets/icons/planos-de-ensino/avaliacoes.png")
        },
        {
            id: "4",
            disciplina: "Extra-Classe",
            icon: require("../../../assets/icons/planos-de-ensino/extra-classe.png")
        },
        {
            id: "5",
            disciplina: "Material de Estudo",
            icon: require("../../../assets/icons/planos-de-ensino/material-de-estudo.png"),
            handleNavigation: handleNavigationMaterialDeEstudo,
        },
        {
            id: "6",
            disciplina: "Bibliografia",
            icon: require("../../../assets/icons/planos-de-ensino/bibliografia.png"),
            handleNavigation: handleNavigationBibliografia,
        },
    ];

    function handleNavigationApresentacao(){
        navigation.navigate('Apresentacao', {
            conteudo: conteudo.apresentacao
        });
    }

    function handleNavigationMaterialDeEstudo(){
        navigation.navigate('Material de Estudo', {
            conteudo: conteudo.material_de_estudo
        });
    }

    function handleNavigationBibliografia(){
        navigation.navigate('Bibliografia', {
            conteudo: conteudo.bibliografia
        });
    }

    const { height } = useWindowDimensions();
    const imagemPercentHeight = height * 0.10;

    const renderItem = ({ item }) => {
        if(item.id === null){
            return <View style={styles.emptyItem} />;
        }
        return (
            <TouchableOpacity style={styles.item} onPress={item.handleNavigation}>
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
            <Text style={commomStyles.title}>{titulo}</Text>
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

export default PlanoDeEnsinoComponentScreen;