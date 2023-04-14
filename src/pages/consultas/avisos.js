import * as React from "react";
import {
    Text, StyleSheet, ScrollView, View, Image
} from "react-native";
import { DataTable } from "react-native-paper";
import colors from "../../styles/colors";
import commomStyles from "../../styles/commonStyles";

function AvisosScreen() {
    return (
        <ScrollView style={{padding: 20}}>
            <Text style={commomStyles.title}>Avisos</Text>
            <View style={styles.viewContainer}>
                <Text style={styles.textBold}>Email institucional</Text>
                <Text style={styles.text}>bojack.horseman@fatec.sp.gov.br</Text>
            </View>
            <View style={{borderColor: 'grey', borderWidth: 0.5}} />
            <View style={styles.viewContainer}>
                <Image style={styles.image} source={require("../../../assets/mobilidade-internacional.png")} />
                <Text style={styles.text}>Estão abertas as inscrições para o Programa de Mobilidade Acadêmica Internacional do Centro Paula Souza.</Text>
                <Text style={styles.textMuted}>Para maiores informações, acesse: https://www.cps.sp.gov.br/arinter/intercambios/</Text>
            </View>
            <View style={{borderColor: 'grey', borderWidth: 0.5}} />
            <View style={styles.viewContainer}>
                <Text style={styles.textBold}>Alterações de Rematrículas</Text>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title textStyle={styles.textMuted} style={{ flex: 1 }}>Data</DataTable.Title>
                        <DataTable.Title textStyle={styles.textMuted} style={{ flex: 3 }}>Curso</DataTable.Title>
                        <DataTable.Title textStyle={styles.textMuted} style={{ flex: 2 }}>Horário</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell style={{ flex: 1 }} textStyle={styles.text}>10/02</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 3 }} textStyle={styles.text}>ADS Noite</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 2 }} textStyle={styles.text}>19h as 21h</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell style={{ flex: 1 }} textStyle={styles.text}>11/02</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 3 }} textStyle={styles.text}>Proj. Noite</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 2 }} textStyle={styles.text}>19h as 21h</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell style={{ flex: 1 }} textStyle={styles.text}>12/02</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 3 }} textStyle={styles.text}>Proj Manhã</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 2 }} textStyle={styles.text}>9h30 as 12h</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell style={{ flex: 1 }} textStyle={styles.text}>12/02</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 3 }} textStyle={styles.text}>ADS Manhã</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 2 }} textStyle={styles.text}>9h30 as 12h</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell style={{ flex: 1 }} textStyle={styles.text}>12/02</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 3 }} textStyle={styles.text}>Mecatrônica</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 2 }} textStyle={styles.text}>13h30 as 16h</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell style={{ flex: 1 }} textStyle={styles.text}>13/02</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 3 }} textStyle={styles.text}>Fab Mecânica</DataTable.Cell>
                        <DataTable.Cell style={{ flex: 2 }} textStyle={styles.text}>9h30 as 12h</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 10,
        marginBottom: 10,
    },
    text: {
        fontFamily: "Roboto-Regular",
        fontSize: 15,
        color: colors.mediumgrey,
    },
    textMuted: {
        fontFamily: "Roboto-Light",
        fontSize: 15,
        color: colors.mediumgrey,
    },
    textBold: {
        fontFamily: "Roboto-Bold",
        fontSize: 15,
        color: colors.mediumgrey,
    },
    title: {
        margin: 50,
        fontFamily: "Roboto-Medium",
        fontSize: 24,
        color: colors.mediumgrey,
        textAlign: "center",
    },
    viewContainer: {
        marginTop: 20,
        marginBottom: 30,
    }
});

export default AvisosScreen;