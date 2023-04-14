import * as React from "react";
import {
    Text, View, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions
} from "react-native";
import AutoDimensionImage, {
    imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import commomStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

function PlanosDeEnsinoScreen({ navigation }) {
    const data = [
        {
            id: "1",
            disciplina: "Gestão de Equipes",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png"),
            conteudo: {
                apresentacao:
                {
                    ementa: "Comunicação e Informação – conceitos e implicações no mundo contemporâneo; Da Cultura de Massa à Cultura Digital – novas formas de socialização da informação e  novos desafios na comunicação. Tecnologia e Sociedade - Problemas humanos e sociais referentes à utilização da tecnologia da informação e da computação: aspectos humanos da segurança e privacidade das informações e aspectos econômicos e éticos da utilização dos computadores.",
                    objetivo: "Refletir sobre os impactos da Tecnologia da Informação na Sociedade Contemporânea.",
                    cargas: {
                        semanais: 2,
                        teoricas: 1,
                        praticas: 1
                    }
                },
                aulas: [
                    {
                        titulo: "Aula 1",
                        descricao: "Aula inaugural: Apresentação da disciplina. Introdução à Sociedade e Tecnologia. Aula inaugural: Apresentação da disciplina, critérios de avaliação, faltas e ementa. Aula expositiva."
                    },
                    {
                        titulo: "Aula 2",
                        descricao: "Aula inaugural: Apresentação da disciplina. Introdução à Sociedade e Tecnologia. Aula inaugural: Apresentação da disciplina, critérios de avaliação, faltas e ementa. Aula expositiva."
                    },
                    {
                        titulo: "Aula 3",
                        descricao: "Aula inaugural: Apresentação da disciplina. Introdução à Sociedade e Tecnologia. Aula inaugural: Apresentação da disciplina, critérios de avaliação, faltas e ementa. Aula expositiva."
                    }
                ],
                bibliografia: [
                    {
                        autor: "SANTAELLA, Lucia",
                        obra: "Culturas e Artes do Pós-humano: da Cultura das Mídias à Cibercultura",
                        cidade: "São Paulo",
                        editora: "Paulus",
                        ano: "2003",
                    },
                    {
                        autor: "SCHAF, Adam",
                        obra: "A Sociedade Informática",
                        cidade: "São Paulo",
                        editora: "Editora Brasiliense",
                        ano: "2001",
                    },
                    {
                        autor: "CASTELLS, Manuel",
                        obra: "A sociedade em Rede",
                        cidade: "São Paulo",
                        editora: "Editora Paz e Terra",
                        ano: "2005",
                    },
                    {
                        autor: "LOJKINE, Jean",
                        obra: "A Revolução informacional",
                        cidade: "São Paulo",
                        editora: "Editora Cortez",
                        ano: "2002",
                    },
                ],
                material_de_estudo: [
                    {
                        extensao: "pdf",
                        nome: "Aula 1 - Introdução a Sociedade e Tecnologia"
                    },
                    {
                        extensao: "doc",
                        nome: "Lista de Exercícios I"
                    }, {
                        extensao: "pdf",
                        nome: "Aula 2 - A Sociedade Informática"
                    }
                ]
            }
        },
        {
            id: "2",
            disciplina: "Economia e Finanças",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "3",
            disciplina: "Sociedade e Tecnologia",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "4",
            disciplina: "Engenharia de Software II",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "5",
            disciplina: "Programação Orient Objetos",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "6",
            disciplina: "Sistemas Operacionais II",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "7",
            disciplina: "Estatística Aplicada",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: "8",
            disciplina: "Programação Linear",
            icon: require("../../../assets/icons/planos-de-ensino/plano-ensino-generico.png")
        },
        {
            id: null,
            disciplina: null,
            icon: null
        },
    ];

    function handleNavigationPlanoDeEnsino(titulo, conteudo) {
        navigation.navigate('Plano de Ensino', {
            titulo: titulo,
            conteudo: conteudo
        });
    }

    const { height } = useWindowDimensions();
    const imagemPercentHeight = height * 0.10;

    const renderItem = ({ item }) => {
        if (item.id === null) {
            return <View style={styles.emptyItem} />;
        }
        return (
            <TouchableOpacity style={styles.item} onPress={() => handleNavigationPlanoDeEnsino(item.disciplina, item.conteudo)}>
                <View style={styles.itemContent}>
                    <AutoDimensionImage
                        source={item.icon}
                        dimensionType={imageDimensionTypes.HEIGHT}
                        dimensionValue={imagemPercentHeight}
                    />
                    <Text style={styles.itemText}>{item.disciplina}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const numColumns = 3

    const Separator = () => {
        const { height } = useWindowDimensions();
        const separatorPercentHeight = height * 0.05;
        return <View style={{ height: separatorPercentHeight }} />;
    };

    return (
        <View>
            <Text style={commomStyles.title}>Planos de Ensino</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                ItemSeparatorComponent={Separator}
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    item: {
        flex: 1,
        margin: 5,
        borderRadius: 5,
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
    },
    itemContent: {
        alignItems: "center",
    },
    itemText: {
        marginTop: 10,
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: colors.mediumgrey,
        textAlign: "center",
    },
    emptyItem: {
        width: '33%',
    },
});

export default PlanosDeEnsinoScreen;