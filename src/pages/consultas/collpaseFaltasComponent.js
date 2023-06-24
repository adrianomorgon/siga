import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { DataTable } from 'react-native-paper';
import colors from '../../styles/colors';

const CollapseFaltas = ({ data }) => {

    const formatDate = (dateString) => {
        const [ano, mes, dia] = dateString.split('-');
        return `${dia}/${mes}/${ano.slice(-2)}`;
    };

    const renderRows = ({ item }) => {
        return (
            <View style={{flexDirection: "row", padding: 10}}>
                <Text style={[styles.textRows, { flex: 1 }]}>{formatDate(item.dia)}</Text>
                <Text style={[styles.textRows, { flex: 2, textAlign: "center" }]}>{item.aula}</Text>
                <Text style={[styles.textRows, { flex: 1, textAlign: "right" }]}>{item.presencas}</Text>
                <Text style={[styles.textRows, { flex: 1, textAlign: "right" }]}>{item.faltas}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Collapse>
                <CollapseHeader>
                    <View style={{flexDirection: "row",}}>
                        <Text style={[styles.title, {flex: 3 }]}>{data.disciplina}</Text>
                        <Text style={[styles.title, {flex: 1, textAlign: "right"}]}>{data.presencas}</Text>
                        <Text style={[styles.title, {flex: 1,  textAlign: "right"}]}>{data.faltas}</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                        <FlatList
                            data={data.detalhes}
                            renderItem={renderRows}
                            contentContainerStyle={{}}
                        />
                </CollapseBody>
            </Collapse>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: colors.red,
        borderWidth: 2,
        borderRadius: 10,
    },
    title: {
        margin: 10,
        fontFamily: "Roboto-Regular",
        fontSize: 20,
        color: colors.mediumgrey,
        textAlign: "center",
    },
    collapse: {
        width: "85%",
        alignSelf: "center",
        marginBottom: 20,
    },
    textHeader: {
        textAlign: "center",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: colors.mediumgrey,
    },
    textRows: {
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        color: colors.intermediategrey,
    },
    titleDisciplinas: {
        flex: 2,
    },
    titleHorario: {
        flex: 1,
    }
});

export default CollapseFaltas;