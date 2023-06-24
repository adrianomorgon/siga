import * as React from "react";
import {
    Text, View, StyleSheet, FlatList
} from "react-native";
import commomStyles from "../../styles/commonStyles";
import RematriculaMateriaComponent from "./rematriculaMateriaComponent";

function RematriculaScreen({ navigation }) {
    const data = [{
        titulo: "Segunda-feira",
        primeiroHorario: "Programação Linear e Aplicações",
        segundoHorario: undefined,
    },
    {
        titulo: "Terça-feira",
        primeiroHorario: "Programação Orientada a objetos",
        segundoHorario: undefined,
    },
    {
        titulo: "Quarta-feira",
        primeiroHorario: "Sociedade e Tecnologia",
        segundoHorario: "Economia e Finanças",
    },
    {
        titulo: "Quinta-feira",
        primeiroHorario: "Estatística Aplicada",
        segundoHorario: undefined,
    },
    {
        titulo: "Sexta-feira",
        primeiroHorario: "Engenharia de Software III",
        segundoHorario: undefined,
    },
    ];

    const renderRematriculaComponent = ({ item }) => {
        return (<RematriculaMateriaComponent
            titulo={item.titulo}
            primeiroHorario={item.primeiroHorario}
            segundoHorario={item.segundoHorario}
        />
        )
    }


    return (
        <View >
            <Text style={commomStyles.title}>Rematricula</Text>
            <View style={styles.teste}>
                <FlatList
                    data={data}
                    renderItem={renderRematriculaComponent}
                    contentContainerStyle={{}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    teste: {
        marginLeft: 20,
    },
});

export default RematriculaScreen;