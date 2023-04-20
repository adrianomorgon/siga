import * as React from "react";
import {
    Text, View, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions, ScrollView, Modal, TouchableWithoutFeedback, Dimensions, Image
} from "react-native";
import AutoDimensionImage, {
    imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import {
    PieChart
} from 'react-native-chart-kit'
import commomStyles from "../../styles/commonStyles";
import CollapseFaltas from "./collpaseFaltasComponent";
import colors from "../../styles/colors";

LocaleConfig.locales['pt'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ],
    monthNamesShort: ['Jan.', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
    dayNames: ['Domingo', 'Segunda-feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: "Hoje"
};
LocaleConfig.defaultLocale = 'pt';

function FaltasScreen({ navigation }) {
    const data = [{
        disciplina: "Prog. Linear e Aplicações",
        presencas: 15,
        faltas: 5,
        detalhes: [{
            dia: "2023-02-06",
            aula: "Apresentação da disciplina",
            presencas: 3,
            faltas: 1,
        },
        {
            dia: "2023-02-13",
            aula: "Operações entre Matrizes",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-02-20",
            aula: "Exercícios de Matrizes",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-02-27",
            aula: "Introdução a Pesquisa Operacional",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-03-06",
            aula: "Áreas da PO",
            presencas: 3,
            faltas: 1,
        },
        {
            dia: "2023-03-13",
            aula: "Introdução a Programação Linear",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-03-20",
            aula: "Método de Solução Gráfica",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-03-27",
            aula: "Método Simplex",
            presencas: 2,
            faltas: 2,
        },
        {
            dia: "2023-04-03",
            aula: "Avaliação P1",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-04-10",
            aula: "Dualidade",
            presencas: 0,
            faltas: 4,
        },
        {
            dia: "2023-04-17",
            aula: "Modelos: Problema de Transporte",
            presencas: 4,
            faltas: 0,
        },
        ]
    },
    {
        disciplina: "Sociedade e Tecnologia",
        presencas: 15,
        faltas: 5,
        detalhes: [{
            dia: "2023-02-07",
            aula: "Apresentação da disciplina",
            presencas: 3,
            faltas: 1,
        },
        {
            dia: "2023-02-14",
            aula: "A Sociedade tecnológica",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-02-21",
            aula: "O Homem e o Meio",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-02-28",
            aula: "Sociedade Informação",
            presencas: 4,
            faltas: 2,
        },
        {
            dia: "2023-03-07",
            aula: "Avaliação",
            presencas: 0,
            faltas: 4,
        },
        {
            dia: "2023-03-14",
            aula: "Terceira Revolução Industrial",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-03-21",
            aula: "A Democratização do Acesso à Informação",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-03-28",
            aula: "A Difusão das Tecnologias de Informação",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-04-04",
            aula: "O Meio é a Mensagem",
            presencas: 2,
            faltas: 2,
        },
        {
            dia: "2023-04-11",
            aula: "A Galáxia de Gutenberg",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-04-18",
            aula: "Vivemos em uma Aldeia Global",
            presencas: 0,
            faltas: 4,
        },
        ]
    },
    {
        disciplina: "Programação Orientada a Objetos",
        presencas: 15,
        faltas: 5,
        detalhes: [{
            dia: "2023-02-08",
            aula: "Conceitos do paradigma POO",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-02-15",
            aula: "Abstração",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-02-22",
            aula: "Introdução a classes e objetos",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-03-01",
            aula: "Agregação e Composição de objetos",
            presencas: 4,
            faltas: 2,
        },
        {
            dia: "2023-03-08",
            aula: "Avaliação",
            presencas: 0,
            faltas: 4,
        },
        {
            dia: "2023-03-15",
            aula: "Encapsulamento",
            presencas: 2,
            faltas: 2,
        },
        {
            dia: "2023-03-22",
            aula: "Herança",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-03-29",
            aula: "Polimorfismo",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-04-05",
            aula: "Tratamento de Exceções",
            presencas: 4,
            faltas: 0,
        },
        {
            dia: "2023-04-12",
            aula: "Projeto Orientado a Objetos",
            presencas: 3,
            faltas: 1,
        },
        {
            dia: "2023-04-19",
            aula: "Teste de Software",
            presencas: 2,
            faltas: 2,
        },
        ]
    },
    {
        disciplina: "Economia e Finanças",
        presencas: 15,
        faltas: 5,
        detalhes: [{
            dia: "2023-02-09",
            aula: "Conceitos do paradigma POO",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-02-16",
            aula: "Abstração",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-02-23",
            aula: "Introdução a classes e objetos",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-03-02",
            aula: "Agregação e Composição de objetos",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-03-09",
            aula: "Avaliação",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-03-16",
            aula: "Encapsulamento",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-03-23",
            aula: "Herança",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-03-30",
            aula: "Polimorfismo",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-04-06",
            aula: "Tratamento de Exceções",
            presencas: 0,
            faltas: 2,
        },
        {
            dia: "2023-04-13",
            aula: "Projeto Orientado a Objetos",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-04-20",
            aula: "Teste de Software",
            presencas: 2,
            faltas: 0,
        },
        ]
    },
    {
        disciplina: "Gestão de Equipes",
        presencas: 15,
        faltas: 5,
        detalhes: [{
            dia: "2023-02-09",
            aula: "Conceitos do paradigma POO",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-02-16",
            aula: "Abstração",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-02-23",
            aula: "Introdução a classes e objetos",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-03-02",
            aula: "Agregação e Composição de objetos",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-03-09",
            aula: "Avaliação",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-03-16",
            aula: "Encapsulamento",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-03-23",
            aula: "Herança",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-03-30",
            aula: "Polimorfismo",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-04-06",
            aula: "Tratamento de Exceções",
            presencas: 0,
            faltas: 2,
        },
        {
            dia: "2023-04-13",
            aula: "Projeto Orientado a Objetos",
            presencas: 2,
            faltas: 0,
        },
        {
            dia: "2023-04-20",
            aula: "Teste de Software",
            presencas: 2,
            faltas: 0,
        },
        ]
    }
    ];

    const { height } = useWindowDimensions();
    const imagemPercentHeight = height * 0.05;
    const chartPercentHeight = height * 0.3;
    

    const [grid, setGrid] = React.useState(true);
    const [grafico, setGrafico] = React.useState(false);
    const [calendario, setCalendario] = React.useState(false);

    function gridSelecionado() {
        setGrid(true);
        setGrafico(false);
        setCalendario(false);
    }

    function graficoSelecionado() {
        setGrid(false);
        setGrafico(true);
        setCalendario(false);
    }

    function calendarioSelecionado() {
        setGrid(false);
        setGrafico(false);
        setCalendario(true);
    }

    const Separator = () => {
        const { height } = useWindowDimensions();
        const separatorPercentHeight = height * 0.03;
        return <View style={{ height: separatorPercentHeight }} />;
    };

    const renderCollapse = ({ item }) => {
        return (<CollapseFaltas
            data={item}
        />
        )
    }

    const renderModalContent = ({ item }) => {
        return (<View>

            <View>
                <Text style={styles.modalBodyTitle}>{item.disciplina}</Text>
                <View style={styles.row}>
                    <View style={{ flex: 2 }}></View>
                    <Text style={styles.rowTitle}>Presenças</Text>
                    <Text style={styles.rowTitle}>Faltas</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={[styles.modalBody, { flex: 2 }]}>{item.aula}</Text>
                    <Text style={[styles.modalBody, { flex: 1, textAlign: "center" }]}>{item.presencas}</Text>
                    <Text style={[styles.modalBody, { flex: 1, textAlign: "center" }]}>{item.faltas}</Text>
                </View>
            </View>
        </View>
        )
    }

    const [modalVisible, setModalVisible] = React.useState(false);

    const handleOpenModal = () => {
        detalharData(dataSelecionada);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    let dataSelecionada = "";

    function onChangeDataSelecionada(data) {
        dataSelecionada = data;
    }

    function mapearDatas() {
        const datasMapeadas = {};

        data.forEach(disciplina => {
            disciplina.detalhes.forEach(detalhe => {
                if (detalhe.faltas != 0)
                    datasMapeadas[detalhe.dia] = { selected: true, marked: true };
                else {
                    datasMapeadas[detalhe.dia] = { selected: false, marked: true };
                }
            });
        });

        return datasMapeadas;
    }

    const [selectedDateDetails, setSelectedDateDetails] = React.useState(null);

    function detalharData(dia) {
        const detalhes = [];

        data.forEach(disciplina => {
            disciplina.detalhes.forEach(detalhe => {
                if (detalhe.dia === dia) {
                    detalhes.push({
                        disciplina: disciplina.disciplina,
                        aula: detalhe.aula,
                        presencas: detalhe.presencas,
                        faltas: detalhe.faltas
                    });
                }
            });
        });

        setSelectedDateDetails({
            dia: dia,
            detalhes: detalhes
        });
    }

    function formatarData(dataString) {
        const meses = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
        ];

        const data = new Date(dataString);
        const dia = data.getDate();
        const mes = meses[data.getMonth()];
        const ano = data.getFullYear();

        return `${dia} de ${mes} de ${ano}`;
    }

    const testeGrafico = [
        {
            name: "Presenças",
            population: 44,
            color: colors.mediumgrey,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Faltas",
            population: 16,
            color: colors.red,
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
    ];

    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    }

    return (
        <View style={{ flex: 1 }}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={commomStyles.title}>Faltas</Text>
                {grid && (
                    <View style={styles.collapse}>
                        <FlatList
                            data={data}
                            renderItem={renderCollapse}
                            ItemSeparatorComponent={Separator}
                            contentContainerStyle={{ width: "100%", marginBottom: 30 }}
                            scrollEnabled
                        />
                    </View>
                )}

                {grafico && (
                    <View>
                        <Text style={styles.modalTitle}>Programação Orientada a Objetos</Text>
                        <View style={{
                            flex: 1,
                            alignContent: "center",
                            borderColor: "blue",
                            borderWidth: 2
                        }}>
                            <PieChart
                                data={testeGrafico}
                                width={Dimensions.get("window").width}
                                height={chartPercentHeight}
                                chartConfig={chartConfig}
                                accessor={"population"}
                                backgroundColor={"transparent"}
                                paddingLeft={"30"}
                                center={[0, 0]}
                                absolute
                                hasLegend={true}
                            />
                        </View>
                    </View>


                )}

                {calendario && (
                    <View>
                        <Calendar
                            onDayPress={day => {
                                onChangeDataSelecionada(day.dateString);
                                handleOpenModal();
                            }}
                            markedDates={mapearDatas()}
                            theme={{
                                backgroundColor: '#f0f0f0',
                                calendarBackground: '#f0f0f0',
                                todayTextColor: colors.red,
                                arrowColor: colors.red,
                                dotColor: colors.lightgrey,
                                selectedDayBackgroundColor: colors.red
                            }}
                        />
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={handleCloseModal}
                        >
                            <TouchableWithoutFeedback onPress={handleCloseModal}>
                                <View style={styles.background}>
                                    <View style={styles.modalContainer} onPress={(event) => event.stopPropagation()}>
                                        <Text style={styles.modalTitle}>{formatarData(selectedDateDetails?.dia) || ""}</Text>

                                        <FlatList
                                            data={selectedDateDetails?.detalhes || []}
                                            renderItem={renderModalContent}
                                            ItemSeparatorComponent={Separator}
                                            contentContainerStyle={{ width: "100%", marginBottom: 30 }}
                                            scrollEnabled
                                        />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>
                    </View>
                )}

            </ScrollView>

            <View style={{ flexDirection: "row", position: "absolute", bottom: 0, backgroundColor: "#f0f0f0", }}>
                <TouchableOpacity style={styles.item} onPress={gridSelecionado}>
                    <View style={styles.itemContent}>
                        <AutoDimensionImage
                            source={require("../../../assets/icons/faltas/grid.png")}
                            dimensionType={imageDimensionTypes.HEIGHT}
                            dimensionValue={imagemPercentHeight}
                            style={grid ? styles.iconSelected : styles.icon}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={graficoSelecionado}>
                    <View style={styles.itemContent}>
                        <AutoDimensionImage
                            source={require("../../../assets/icons/faltas/grafico.png")}
                            dimensionType={imageDimensionTypes.HEIGHT}
                            dimensionValue={imagemPercentHeight}
                            style={grafico ? styles.iconSelected : styles.icon}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={calendarioSelecionado}>
                    <View style={styles.itemContent}>
                        <AutoDimensionImage
                            source={require("../../../assets/icons/faltas/calendario.png")}
                            dimensionType={imageDimensionTypes.HEIGHT}
                            dimensionValue={imagemPercentHeight}
                            style={calendario ? styles.iconSelected : styles.icon}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    collapse: {
        width: "90%",
        alignSelf: "center",
        marginBottom: 60,
    },
    row: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: 10,
        marginBottom: 5
    },
    rowTitle: {
        flex: 1,
        textAlign: "right",
        fontFamily: "Roboto-Regular",
        fontSize: 14,
        color: colors.lightgrey,
    },
    item: {
        flex: 1,
        margin: 5,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    itemContent: {
        alignItems: "center",
    },
    iconSelected: {
        tintColor: colors.red
    },
    icon: {
        tintColor: colors.lightgrey
    },
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        fontFamily: "Roboto-Regular",
        fontSize: 24,
        color: colors.mediumgrey,
        textAlign: 'center',
        marginBottom: 20
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 30,
        borderWidth: 2,
        borderColor: colors.red,
        width: '90%',
    },
    modalBodyTitle: {
        fontFamily: "Roboto-Regular",
        fontSize: 18,
        color: colors.mediumgrey,
        marginVertical: 20,
    },
    modalBody: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: colors.mediumgrey,
    },
    modalTitleMuted: {
        flex: 1,
        fontFamily: "Roboto-Regular",
        textAlign: "center",
        fontSize: 14,
        color: colors.lightgrey,
        marginBottom: 10,
    },
});

export default FaltasScreen;