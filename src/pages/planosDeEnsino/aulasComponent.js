import * as React from "react";
import {
    Text, View, StyleSheet, FlatList, useWindowDimensions, ScrollView
} from "react-native";
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import commomStyles from "../../styles/commonStyles";
import colors from "../../styles/colors";

function AulasComponentScreen({ route }) {
    const { conteudo } = route.params;

    const Separator = () => {
        const { height } = useWindowDimensions();
        const separatorPercentHeight = height * 0.03;
        return <View style={{ height: separatorPercentHeight }} />;
    };

    const renderCollapse = ({ item }) => {
        return (
            <View style={styles.container}>
                <Collapse>
                    <CollapseHeader>
                        <View>
                            <Text style={styles.title}>{item.titulo}</Text>
                        </View>
                    </CollapseHeader>
                    <CollapseBody>
                        <View>
                            <Text style={styles.descricao}>{item.descricao}</Text>
                        </View>
                    </CollapseBody>
                </Collapse>
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={styles.collapse}>
                <Text style={commomStyles.title}>Aulas</Text>
                {<FlatList
                    data={conteudo}
                    renderItem={renderCollapse}
                    ItemSeparatorComponent={Separator}
                    contentContainerStyle={styles.listContainer}
                />}
            </View>
        </ScrollView>
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
    container: {
        flexGrow: 1,
        borderColor: colors.red,
        borderWidth: 2,
        borderRadius: 10,
    },
    title: {
        margin: 10,
        fontFamily: "Roboto-Medium",
        fontSize: 20,
        color: colors.mediumgrey,
        textAlign: "center",
    },
    descricao: {
        margin: 10,
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: colors.mediumgrey,
    },
});

export default AulasComponentScreen;