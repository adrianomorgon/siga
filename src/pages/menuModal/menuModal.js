import React from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback, Text, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native';
import AutoDimensionImage, {
    imageDimensionTypes,
} from "react-native-auto-dimensions-image";
import colors from "../../styles/colors";

const MenuModal = (props) => {
    const { modalVisible, closeModal, modalTitle, data } = props;
    const numColumns = 3;
    const { height } = useWindowDimensions();
    const imagemPercentHeight = height * 0.06;

    const renderItem = ({ item }) => {
        if(item.id === null){
            return <View style={styles.emptyItem} />;
        }
        return (
            <TouchableOpacity style={styles.item}>
                <View style={styles.itemContent}>
                    <AutoDimensionImage
                        source={item.icon}
                        dimensionType={imageDimensionTypes.HEIGHT}
                        dimensionValue={imagemPercentHeight}
                    />
                    <Text style={styles.itemText}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const Separator = () => {
        const { height } = useWindowDimensions();
        const separatorPercentHeight = height * 0.05;
        return <View style={{ height: separatorPercentHeight }} />;
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.background}>
                    <View style={styles.modalContainer} onPress={(event) => event.stopPropagation()}>
                        <Text style={styles.modalTitle}>{modalTitle}</Text>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            numColumns={numColumns}
                            columnWrapperStyle={styles.row}
                            ItemSeparatorComponent={Separator}
                            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitle: {
        fontFamily: "Roboto-Regular",
        fontSize: 24,
        color: colors.lightgrey,
        textAlign: 'center',
        marginBottom: 20
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 30,
        borderWidth: 2,
        borderColor: colors.red,
        width: '80%',
    },
    itemText: {
        marginTop: 5,
        textAlign: 'center',
        fontFamily: "Roboto-Regular",
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
    row: {
        flex: 1,
        justifyContent: "space-between",
    },
    emptyItem: {
        width: '33%',
      },
});

export default MenuModal;
