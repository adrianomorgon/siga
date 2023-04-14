import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { DataTable } from 'react-native-paper';
import colors from '../../styles/colors';

const CollapseHorario = ({ title, body }) => {

    const renderRows = ({ item }) => {
        return (
        <DataTable.Row>
            <DataTable.Cell style={{ flex: 2 }} textStyle={styles.textRows}>{item.disciplina}</DataTable.Cell>
            <DataTable.Cell style={{ flex: 1 }} textStyle={styles.textRows}>{item.horario}</DataTable.Cell>
        </DataTable.Row>
    )}

    return (
        <View style={styles.container}>
            <Collapse>
                <CollapseHeader>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title style={styles.titleDisciplinas} textStyle={styles.textHeader}>Disciplinas</DataTable.Title>
                            <DataTable.Title style={styles.titleHorario} textStyle={styles.textHeader}>Horário</DataTable.Title>
                        </DataTable.Header>
                        <FlatList
                            data={body}
                            renderItem={renderRows}
                            keyExtractor={(item) => item.id}
                            contentContainerStyle={{}}
                        />
                    </DataTable>
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
    body: {

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
        color: colors.lightgrey,
    },
    titleDisciplinas: {
        flex: 2,
    },
    titleHorario: {
        flex: 1,
    }
});

export default CollapseHorario;