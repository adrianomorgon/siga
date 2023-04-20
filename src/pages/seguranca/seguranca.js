import * as React from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    useWindowDimensions,
    TouchableOpacity
} from "react-native";
import commomStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";
import { Alert } from "react-native";

function SegurancaScreen({ navigation }) {
    const { height } = useWindowDimensions();
    const heightPercent = height * 0.04;

    return (
        <View>
            <Text style={commomStyles.title}>Segurança</Text>
            <View style={[styles.row]}>
                <Text style={[styles.text, { flex: 1 }]}>Usuário</Text>
                <Text style={[styles.text, { flex: 2 }]}>99.999.999-90</Text>
            </View>

            <View style={[styles.row]}>
                <Text style={[styles.text, { flex: 1 }]}>Senha antiga</Text>
                <TextInput
                    style={[styles.input, { height: heightPercent }]}
                />
            </View>

            <View style={[styles.row]}>
                <Text style={[styles.text, { flex: 1 }]}>Nova senha</Text>
                <TextInput
                    style={[styles.input, { height: heightPercent }]}
                />
            </View>

            <View style={[styles.row]}>
                <Text style={[styles.text, { flex: 1 }]}>Confirmar nova senha</Text>
                <TextInput
                    style={[styles.input, { height: heightPercent }]}
                />
            </View>

            <View style={{
                width: "100%",
                alignItems: "flex-end"
            }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert("Senha alterada!")}
                    title="Learn More"
                    color={colors.red}
                >
                    <View>
                            <Text style={styles.buttonTextWhite}>
                                Confirmar
                            </Text>
                        </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        width: "90%",
        marginBottom: 20,
    },
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: colors.red,
        borderWidth: 2,
        flex: 2
    },
    text: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: colors.mediumgrey,
    },
    button: {
        backgroundColor: colors.red,
        width: '60%',
        height: 35,
        margin: 10,
        borderRadius: 10,
        justifyContent: 'center'
    },
    buttonTextWhite: {
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        color: colors.white
    },
});

export default SegurancaScreen;