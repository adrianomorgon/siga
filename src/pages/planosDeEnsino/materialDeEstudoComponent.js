import * as React from "react";
import {
    Text, View, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions
} from "react-native";
import AutoDimensionImage, {
    imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import commomStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

function MaterialDeEstudoComponentScreen({ route, navigation }) {
    const { conteudo } = route.params;
    const { height } = useWindowDimensions();
    const imagemPercentHeight = height * 0.08;

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.row}>
                <AutoDimensionImage
                    source={preencherIconeArquivo(item.extensao)}
                    dimensionType={imageDimensionTypes.HEIGHT}
                    dimensionValue={imagemPercentHeight}
                />
                <Text style={styles.itemText}>{item.nome}</Text>
            </TouchableOpacity>
        );
    };

    const Separator = () => {
        const separatorPercentHeight = height * 0.05;
        return <View style={{ height: separatorPercentHeight }} />;
    };

    return (
        <View style={styles.container}>
            <Text style={commomStyles.title}>Material de Estudo</Text>
            <FlatList
                data={conteudo}
                renderItem={renderItem}
                numColumns={1}
                ItemSeparatorComponent={Separator}
            />
        </View>
    )
}

function preencherIconeArquivo(extensao){
    switch (extensao) {
        case 'pdf':
            return require("../../../assets/icons/planos-de-ensino/pdfFile.png");
        case 'doc':
            return require("../../../assets/icons/planos-de-ensino/docFile.png");
        default:
            return require("../../../assets/icons/planos-de-ensino/pdfFile.png");
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    row: {
        flexDirection: "row",
        flexWrap: 'wrap',
        alignItems: "center",
        alignSelf: "center",
        borderColor: colors.red,
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        width: "85%"
    },
    itemText: {
        marginLeft: 20,
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: colors.mediumgrey,
        maxWidth: "70%",
    },
});

export default MaterialDeEstudoComponentScreen;