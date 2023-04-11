import React from 'react';
import { Modal, View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native';

const MenuModal = (props) => {
    const { modalVisible, closeModal, modalContent } = props;
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.background}>
                    <View style={styles.modalContainer}>
                        <Text>{modalContent}</Text>
                        <View style={styles.modalContent}>{props.children}</View>
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
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalContent: {
        alignItems: 'center',
    },
});

export default MenuModal;
