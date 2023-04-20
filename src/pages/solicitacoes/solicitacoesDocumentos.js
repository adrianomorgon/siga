import * as React from "react";
import {
    Text,
    View,
    StyleSheet,
    useWindowDimensions,
    ScrollView
} from "react-native";
import SolicitacoesDocumentosCollapse from "./solicitacoesDocumentosCollapseComponent";
import commomStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";
import { Alert } from "react-native";
import { FlatList } from "react-native";

function SolicitacoesDocumentosScreen({ navigation }) {
    const { height } = useWindowDimensions();
    const heightPercent = height * 0.04;

    const renderCollapse = (item) => {
        <SolicitacoesDocumentosCollapse
            titulo={item.titulo}
        />
    }

    const data = [{
        titulo: "Atestado de Matricula Simples"
    },
    {
        titulo: "Atestado de Matrícula com Disciplinas"
    },
    {
        titulo: "Atestado de Matrícula com Disciplinas"
    },
    {
        titulo: "Atestado de Matrícula com Disciplinas"
    },
    {
        titulo: "Atestado de Matrícula com Disciplinas"
    },
    {
        titulo: "Atestado de Matrícula com Disciplinas"
    },
    {
        titulo: "Atestado de Matrícula com Disciplinas"
    },
    ]

    const Separator = () => {
        const { height } = useWindowDimensions();
        const separatorPercentHeight = height * 0.03;
        return <View style={{ height: separatorPercentHeight }} />;
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={commomStyles.title}>Solicitação de Documentos</Text>
            <View style={styles.body}>
                <View style={styles.marginBottom}>
                    <SolicitacoesDocumentosCollapse
                        titulo={"Atestado de Matricula Simples"}
                    />
                </View>
                <View style={styles.marginBottom}>
                    <SolicitacoesDocumentosCollapse
                        titulo={"Atestado de Matrícula com Disciplinas"}
                    />
                </View>
                <View style={styles.marginBottom}>
                    <SolicitacoesDocumentosCollapse
                        titulo={"Atestado de Período"}
                    />
                </View>
                <View style={styles.marginBottom}>
                    <SolicitacoesDocumentosCollapse
                        titulo={"Atestado de Frequência"}
                    />
                </View>
                <View style={styles.marginBottom}>
                    <SolicitacoesDocumentosCollapse
                        titulo={"Atestado de Previsão de Conclusão"}
                    />
                </View>
                <View style={styles.marginBottom}>
                    <SolicitacoesDocumentosCollapse
                        titulo={"Histórico do Aluno"}

                    />
                </View>
                <View style={styles.marginBottom}>
                    <SolicitacoesDocumentosCollapse
                        titulo={"Atestado de Período Estágio"}

                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        width: "90%",
        alignSelf: "center"
    },
    marginBottom: {
        marginBottom: 20,
    },
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

export default SolicitacoesDocumentosScreen;