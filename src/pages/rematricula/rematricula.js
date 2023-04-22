import * as React from "react";
import {
    Text, View, StyleSheet
} from "react-native";
import commomStyles from "../../styles/commonStyles";
import RematriculaMateriaComponent from "./rematriculaMateriaComponent";

function RematriculaScreen({ navigation }) {
    return (
        <View >
            <Text style={commomStyles.title}>Rematricula</Text>
            <View style={styles.teste}>
                <RematriculaMateriaComponent
                    titulo={"Segunda-feira"}
                    cardUm={"Programação Linear e Aplicações"}
                />
                <RematriculaMateriaComponent
                    titulo={"Terça-feira"}
                    cardUm={"Sociedade e Tecnologia"}
                    cardDois={"Contabilidade"}
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