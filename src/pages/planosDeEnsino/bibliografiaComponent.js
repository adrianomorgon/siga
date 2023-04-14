import * as React from "react";
import {
    Text, View, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions
} from "react-native";
import AutoDimensionImage, {
    imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import commomStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

function BibliografiaComponentScreen({ route, navigation }) {
    const { conteudo } = route.params;

    const renderItem = ({ item }) => {
        return (
            <View>
                <Text style={styles.text}><Text style={styles.textTitle}>{item.autor}. </Text>{item.obra}. {item.cidade}: {item.editora}, {item.ano}</Text>
            </View>
        );
    };

    const Separator = () => {
        const { height } = useWindowDimensions();
        const separatorPercentHeight = height * 0.05;
        return <View style={{ height: separatorPercentHeight }} />;
    };

    return (
        <View>
            <Text style={commomStyles.title}>Bibliografia</Text>
            <FlatList
                data={conteudo}
                renderItem={renderItem}
                numColumns={1}
                ItemSeparatorComponent={Separator}
                contentContainerStyle={styles.row}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    textTitle: {
        color: colors.red
    },
    text: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: colors.mediumgrey,
    },
    row: {
        alignSelf: "center",
        padding: 10,
        width: "90%"
    },
});

export default BibliografiaComponentScreen;