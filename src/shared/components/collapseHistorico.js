import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { AntDesign } from '@expo/vector-icons'; 
import colors from '../../styles/colors';

const CollapseHistorico = ({ disciplina }) => {
    let icone = disciplina.aprovado ? "checkcircle" : "closecircle";

    return (
        <View style={styles.container}>
            <Collapse>
                <CollapseHeader>
                    <View>
                        <Text style={styles.title}>{disciplina.titulo}</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody style={{marginTop: 15}}>
                    <Text style={styles.textLable}>Média final: <Text style={styles.textContent}>{disciplina.media}</Text></Text>
                    <Text style={styles.textLable}>Faltas/Frequencia: <Text style={styles.textContent}>{disciplina.faltasFrequencia}</Text></Text>
                    <Text style={styles.textLable}>Aprovado por nota e frequencia: <AntDesign name={icone} size={16} color={colors.red} /></Text>
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
        padding: 15,
    },
    title: {
        fontFamily: "Roboto-Regular",
        fontSize: 20,
        color: colors.mediumgrey,
        textAlign: "center",
    },
    textLable: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: colors.lightgrey,
        marginBottom: 5,
    },
    textContent: {
        fontFamily: "Roboto-Medium",
        color: colors.stronggrey
    }
});

export default CollapseHistorico;