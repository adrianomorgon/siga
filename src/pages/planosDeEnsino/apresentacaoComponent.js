import * as React from "react";
import {
    Text, View, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions
} from "react-native";
import AutoDimensionImage, {
    imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import commomStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

function ApresentacaoComponentScreen({ route, navigation }) {
    const { conteudo } = route.params;

    return (
        <View>
            <Text style={commomStyles.title}>Apresentação</Text>
            <View style={styles.row}>
                <Text style={styles.textTitle}>Ementa</Text>
                <Text style={[styles.text, {marginBottom: 20}]}>{conteudo.ementa}</Text>
                <Text style={styles.textTitle}>Objetivo</Text>
                <Text style={[styles.text, {marginBottom: 20}]}>{conteudo.objetivo}</Text>
                <Text style={styles.textTitle}>Cargas</Text>
                <Text style={styles.text}>Semanais: {conteudo.cargas.semanais}</Text>
                <Text style={styles.text}>Teóricas: {conteudo.cargas.teoricas}</Text>
                <Text style={styles.text}>Práticas: {conteudo.cargas.praticas}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    textTitle: {
        fontFamily: "Roboto-Medium",
        fontSize: 16,
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

export default ApresentacaoComponentScreen;