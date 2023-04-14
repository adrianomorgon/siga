import * as React from "react";
import {
    Text, View, StyleSheet, FlatList, useWindowDimensions, ScrollView
} from "react-native";
import CollapseHorario from "../../shared/components/collapseHorario";
import commomStyles from "../../styles/commonStyles";

function HorarioScreen() {
    const data = [{
        id: "1",
        title: "Segunda-feira",
        disciplinas: [{
            id: "1.1",
            disciplina: "Prog. Linear e Aplicações",
            horario: "19:00 - 19:50"
        },
        {
            id: "1.2",
            disciplina: "Prog. Linear e Aplicações",
            horario: "19:50 - 20:40"
        },
        {
            id: "1.3",
            disciplina: "Prog. Linear e Aplicações",
            horario: "21:00 - 21:50"
        },
        {
            id: "1.4",
            disciplina: "Prog. Linear e Aplicações",
            horario: "21:50 - 22:30"
        }
        ]
    },
    {
        id: "2",
        title: "Terça-feira",
        disciplinas: [{
            id: "2.1",
            disciplina: "Algebra Linear",
            horario: "19:00 - 19:50"
        },
        {
            id: "2.2",
            disciplina: "Algebra Linear",
            horario: "19:50 - 20:40"
        },
        {
            id: "2.3",
            disciplina: "Algebra Linear",
            horario: "21:00 - 21:50"
        },
        {
            id: "2.4",
            disciplina: "Algebra Linear",
            horario: "21:50 - 22:30"
        }
        ]
    },
    {
        id: "3",
        title: "Quarta-feira",
        disciplinas: [{
            id: "3.1",
            disciplina: "Contabilidade",
            horario: "19:00 - 19:50"
        },
        {
            id: "3.2",
            disciplina: "Contabilidade",
            horario: "19:50 - 20:40"
        },
        {
            id: "3.3",
            disciplina: "Ética Profissional",
            horario: "21:00 - 21:50"
        },
        {
            id: "3.4",
            disciplina: "Ética Profissional",
            horario: "21:50 - 22:30"
        }
        ]
    },
    {
        id: "4",
        title: "Quinta-feira",
        disciplinas: [{
            id: "4.1",
            disciplina: "Trabalho de Conclusão",
            horario: "19:00 - 19:50"
        },
        {
            id: "4.2",
            disciplina: "Trabalho de Conclusão",
            horario: "19:50 - 20:40"
        },
        {
            id: "4.3",
            disciplina: "Estatística",
            horario: "21:00 - 21:50"
        },
        {
            id: "4.4",
            disciplina: "Estatística",
            horario: "21:50 - 22:30"
        }
        ]
    },
    {
        id: "5",
        title: "Sexta-feira",
        disciplinas: [{
            id: "5.1",
            disciplina: "Projeto Integrado",
            horario: "19:00 - 19:50"
        },
        {
            id: "5.2",
            disciplina: "Projeto Integrado",
            horario: "19:50 - 20:40"
        },
        {
            id: "5.3",
            disciplina: "Projeto Integrado",
            horario: "21:00 - 21:50"
        },
        {
            id: "5.4",
            disciplina: "Projeto Integrado",
            horario: "21:50 - 22:30"
        }
        ]
    },
    {
        id: "6",
        title: "Sábado",
        disciplinas: [{
            id: "6.1",
            disciplina: "Inglês",
            horario: "08:00 - 08:50"
        },
        {
            id: "6.2",
            disciplina: "Inglês",
            horario: "08:50 - 09:40"
        },
        {
            id: "6.3",
            disciplina: "Redes",
            horario: "10:00 - 10:50"
        },
        {
            id: "6.4",
            disciplina: "Redes",
            horario: "10:50 - 11:40"
        }
        ]
    }];

    const Separator = () => {
        const { height } = useWindowDimensions();
        const separatorPercentHeight = height * 0.03;
        return <View style={{ height: separatorPercentHeight }} />;
    };

    const renderCollapse = ({ item }) => {
        return (<CollapseHorario
            style={styles.collapse}
            title={item.title}
            body={item.disciplinas} />
        )
    }

    return (
            <View style={styles.collapse}>
                <Text style={commomStyles.title}>Horario</Text>
                <FlatList
                    data={data}
                    renderItem={renderCollapse}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={Separator}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
    },
    collapse: {
        width: "85%",
        alignSelf: "center",
        marginBottom: 20,
    },
});

export default HorarioScreen;