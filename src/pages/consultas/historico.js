import * as React from "react";
import {
    Text, View, StyleSheet, FlatList, useWindowDimensions, ScrollView, TouchableOpacity, Button, Alert
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import CollapseHistorico from "../../shared/components/collapseHistorico";
import commomStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

function HistoricoScreen() {
    const semesters = [
        { id: 1, name: 'Semestre 1', courses: ['Matemática', 'Física'] },
        { id: 2, name: 'Semestre 2', courses: ['Química', 'Biologia'] },
        { id: 3, name: 'Semestre 3', courses: ['História', 'Geografia'] },
    ];

    const semesters2 = [
        { id: 1, name: '1° Semestre', disciplinas: [
            {
                titulo: "Administração Geral",
                media: 8.2,
                faltasFrequencia: "4/90%",
                aprovado: true 
            },
            {
                titulo: "Engenharia de Software I",
                media: 9.0,
                faltasFrequencia: "8/85%",
                aprovado: true 
            },
            {
                titulo: "Contabilidade",
                media: 7.3,
                faltasFrequencia: "0/100%",
                aprovado: true 
            },
            {
                titulo: "Empreendedorismo",
                media: 6.2,
                faltasFrequencia: "6/80%",
                aprovado: true 
            },
            {
                titulo: "Inglês I",
                media: 10.0,
                faltasFrequencia: "0/100%",
                aprovado: true 
            },
        ] },
        { id: 2, name: '2° Semestre', disciplinas: [
            {
                titulo: "Engenharia de Software II",
                media: 8.2,
                faltasFrequencia: "4/90%",
                aprovado: true 
            },
            {
                titulo: "Laboratório de Hardware",
                media: 5.2,
                faltasFrequencia: "4/90%",
                aprovado: false 
            },
            {
                titulo: "Programação Orientada a Objetos",
                media: 8.2,
                faltasFrequencia: "4/90%",
                aprovado: true 
            },
            {
                titulo: "Sistemas de Informação",
                media: 8.2,
                faltasFrequencia: "4/90%",
                aprovado: true 
            },
            {
                titulo: "Inglês II",
                media: 8.2,
                faltasFrequencia: "4/90%",
                aprovado: false 
            },
        ] },
        { id: 3, name: '3° Semestre', disciplinas: [
            {
                titulo: "Metodologia da Pesquisa Científico-Tecnológica",
                media: 8.2,
                faltasFrequencia: "4/90%",
                aprovado: true 
            },
            {
                titulo: "Engenharia de Software III",
                media: 8.2,
                faltasFrequencia: "4/90%",
                aprovado: true 
            },
            {
                titulo: "Sistemas Operacionais II",
                media: 8.2,
                faltasFrequencia: "4/90%",
                aprovado: false 
            },
            {
                titulo: "Redes de Computadores",
                media: 8.2,
                faltasFrequencia: "4/90%",
                aprovado: true 
            },
            {
                titulo: "Inglês III",
                media: 8.2,
                faltasFrequencia: "4/90%",
                aprovado: true 
            },
        ] },
    ];

    const disciplina = {
        titulo: "Cálculo",
        media: 8.2,
        faltasFrequencia: "4/90%",
        aprovado: true
    }

    const [currentSemester, setCurrentSemester] = React.useState(3);

    const renderTitle = ({ item }) => (
        <Text style={styles.tituloHistorico}>{item.name}</Text>
    );

    const renderItem = ({ item }) => (
        <View style={styles.collapse}>
            <FlatList
                data={item.disciplinas}
                renderItem={renderCollapse}
                keyExtractor={disciplina => disciplina.titulo}
                ItemSeparatorComponent={Separator}
            />
        </View>
    );

    const renderCollapse = ({item}) => (
        <CollapseHistorico
            disciplina={item} />
    )

    const Separator = () => {
        const { height } = useWindowDimensions();
        const separatorPercentHeight = height * 0.03;
        return <View style={{ height: separatorPercentHeight }} />;
    };

    return (
        <View >
            <Text style={commomStyles.title}>Histórico</Text>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity
                        onPress={() =>
                            setCurrentSemester(currentSemester => Math.max(currentSemester - 1, 1))
                        }
                    >
                        <AntDesign name="left" size={30} color={colors.red} />
                    </TouchableOpacity>
                    <FlatList
                        data={semesters2.filter(semester => semester.id === currentSemester)}
                        renderItem={renderTitle}
                        keyExtractor={semester => semester.id.toString()}
                        style={{}}
                    />
                    <TouchableOpacity
                        onPress={() =>
                            setCurrentSemester(currentSemester =>
                                Math.min(currentSemester + 1, semesters.length)
                            )
                        }
                    >
                        <AntDesign name="right" size={30} color={colors.red} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={semesters2.filter(semester => semester.id === currentSemester)}
                    renderItem={renderItem}
                    keyExtractor={semester => semester.id.toString()}
                    style={{marginTop: 35}}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tituloHistorico: {
        textAlign: 'center',
        fontFamily: 'Roboto-Medium',
        fontSize: 22,
        color: colors.red
    },
    listContainer: {
        width: "100%",
    },
    collapse: {
        width: "85%",
        alignSelf: "center",
        marginBottom: 20,
    },
});

export default HistoricoScreen;