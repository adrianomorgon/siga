import * as React from "react";
import {
    Text, View, StyleSheet, useWindowDimensions, TouchableWithoutFeedback,
} from "react-native";
import commomStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";
import { Alert } from "react-native";

function RematriculaMateriaComponent({ titulo, primeiroHorario, segundoHorario }) {
    const [cardColorP, setCardColorP] = React.useState(colors.white);
    const [cardColorS, setCardColorS] = React.useState(colors.white);
    const [checkboxColorP, setCheckboxColorP] = React.useState(colors.white);
    const [checkboxColorS, setCheckboxColorS] = React.useState(colors.white);
    const [textColorP, setTextColorP] = React.useState(colors.mediumgrey);
    const [textColorS, setTextColorS] = React.useState(colors.mediumgrey);
    const [selecionado, setSelecionado] = React.useState(false);
    const [selecionadoP, setSelecionadoP] = React.useState(false);
    const [selecionadoS, setSelecionadoS] = React.useState(false);
    let umCard = false;
    let doisCards = false;

    if (segundoHorario !== undefined) {
        umCard = false;
        doisCards = true;
    } else {
        umCard = true;
        doisCards = false;
    }

    function animacaoUmCard() {
        setSelecionado(!selecionado);
        if (selecionado) {
            setCardColorP(colors.red);
            setCardColorS(colors.red);
            setCheckboxColorP(colors.red);
            setCheckboxColorS(colors.red);
            setTextColorP(colors.white);
            setTextColorS(colors.white);
        }
        else {
            setCardColorP(colors.white);
            setCardColorS(colors.white);
            setCheckboxColorP(colors.white);
            setCheckboxColorS(colors.white);
            setTextColorP(colors.mediumgrey);
            setTextColorS(colors.mediumgrey);
        }
    }

    function animacaoDoisCardsPrimeiroHorario() {
        setSelecionadoP(!selecionadoP);
        if (selecionadoP) {
            setCardColorP(colors.red);
            setCheckboxColorP(colors.red);
            setTextColorP(colors.white);
        }
        else {
            setCardColorP(colors.white);
            setCheckboxColorP(colors.white);
            setTextColorP(colors.mediumgrey);
        }
        
    }

    function animacaoDoisCardsSegundoHorario() {
        setSelecionadoS(!selecionadoS);
        if (selecionadoS) {
            setCardColorS(colors.red);
            setCheckboxColorS(colors.red);
            setTextColorS(colors.white);
        }
        else {
            setCardColorS(colors.white);
            setCheckboxColorS(colors.white);
            setTextColorS(colors.mediumgrey);
        }
        
    }

    const { height, width } = useWindowDimensions();
    const heightPercent = height * 0.04;
    const widthPercentCard = width * 0.6;


    return (
        <View style={{ marginBottom: 40 }}>
            <Text style={styles.title}>{titulo}</Text>
            <View style={{ flexDirection: "row" }} >
                <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                    <Text style={styles.horarios}>19:00</Text>
                    <Text style={styles.horarios}>20:50</Text>
                    <Text style={styles.horarios}>22:30</Text>
                </View>
                <View style={{ flexDirection: "column", marginLeft: 10, marginRight: 10, }}>
                    <View style={styles.line} />
                </View>
                <View style={{ flexDirection: "column" }}>
                    {umCard && (
                        <View>
                            <TouchableWithoutFeedback onPress={() => animacaoUmCard()}>
                                <View>
                                    <View style={[styles.squareIcon, { backgroundColor: checkboxColorP }]} />
                                    <View style={[styles.squareIcon, { backgroundColor: checkboxColorP }]} />
                                    <View style={[styles.squareIcon, { backgroundColor: checkboxColorP }]} />
                                    <View style={[styles.squareIcon, { backgroundColor: checkboxColorP }]} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    )}
                    {doisCards && (
                        <View>
                            <TouchableWithoutFeedback onPress={() => animacaoDoisCardsPrimeiroHorario()}>
                                <View>
                                    <View style={[styles.squareIcon, { backgroundColor: checkboxColorP }]} />
                                    <View style={[styles.squareIcon, { backgroundColor: checkboxColorP }]} />
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => animacaoDoisCardsSegundoHorario()}>
                                <View>
                                    <View style={[styles.squareIcon, { backgroundColor: checkboxColorS }]} />
                                    <View style={[styles.squareIcon, { backgroundColor: checkboxColorS }]} />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    )}
                </View>
                <View style={{ flexDirection: "column" }}>
                    {umCard && (
                        <View>
                            <TouchableWithoutFeedback onPress={() => animacaoUmCard()}>
                                <View style={[styles.card, { backgroundColor: cardColorP, marginBottom: 5, width: widthPercentCard }]}>
                                    <Text style={[styles.textMateria, { color: textColorP }]}>{primeiroHorario}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    )}
                    {doisCards && (
                        <View>
                            <TouchableWithoutFeedback onPress={() => animacaoDoisCardsPrimeiroHorario()}>
                                <View style={[styles.cardHalf, { backgroundColor: cardColorP, marginBottom: 5, width: widthPercentCard }]}>
                                    <Text style={[styles.textMateria, { color: textColorP }]}>{primeiroHorario}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => animacaoDoisCardsSegundoHorario()}>
                                <View style={[styles.cardHalf, { backgroundColor: cardColorS, width: widthPercentCard }]}>
                                    <Text style={[styles.textMateria, { color: textColorS }]}>{segundoHorario}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    )}

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    squareIcon: {
        width: 30,
        height: 30,
        borderRadius: 10,
        borderColor: colors.red,
        borderWidth: 2,
        marginBottom: 5,
    },
    line: {
        height: 140,
        borderColor: colors.mediumgrey,
        borderWidth: 1,
    },
    lineSeparator: {
        height: 2,
        width: 10,
        borderColor: colors.mediumgrey,
        borderWidth: 1,
    },
    card: {
        height: 140,
        borderColor: colors.red,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    cardHalf: {
        height: 65,
        borderColor: colors.red,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: colors.lightgrey,
        marginBottom: 20,
    },
    horarios: {
        textAlign: "right",
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        color: colors.lightgrey,
    },
    textMateria: {
        textAlign: "center",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: colors.mediumgrey,
        maxWidth: "99%",
    },
});

export default RematriculaMateriaComponent;