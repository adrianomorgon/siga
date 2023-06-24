import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Switch, TextInput } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { DataTable } from 'react-native-paper';
import colors from '../../styles/colors';

const SolicitacoesDocumentosCollapse = ({ titulo }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [solicitado, setSolicitado] = React.useState(false);
    const quantidade = "1";

    return (
        <View style={styles.container}>
            <Collapse>
                <CollapseHeader>
                    <View>
                        <Text style={[styles.title]}>{titulo}</Text>
                        {solicitado && <Text style={styles.titleRed}>solicitado</Text>}
                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={styles.row}>
                        <Text style={styles.textBody}>Portaria</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: colors.red }}
                            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            style={{
                                marginLeft: 10,
                            }}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.textBody}>Quantidade</Text>
                        <TextInput
                            style={styles.input}
                            value={quantidade}
                            keyboardType="numeric"
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            Alert.alert("Solicitação enviada!");
                            setSolicitado(true);
                    }}
                        color={colors.red}
                    >
                        <View>
                            <Text style={styles.buttonTextWhite}>
                                Confirmar
                            </Text>
                        </View>
                    </TouchableOpacity>
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
        padding: 15
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
    },
    title: {
        fontFamily: "Roboto-Regular",
        fontSize: 20,
        color: colors.mediumgrey,
        textAlign: "center",
    },
    titleRed: {
        fontFamily: "Roboto-Regular",
        fontSize: 15,
        color: colors.red,
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
    textBody: {
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        color: colors.intermediategrey,
    },
    titleDisciplinas: {
        flex: 2,
    },
    titleHorario: {
        flex: 1,
    },
    button: {
        backgroundColor: colors.red,
        width: '60%',
        height: 35,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: "flex-end"
    },
    buttonTextWhite: {
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        color: colors.white
    },
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: colors.red,
        borderWidth: 2,
      },
});

export default SolicitacoesDocumentosCollapse;