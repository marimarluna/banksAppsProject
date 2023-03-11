import React from 'react'
import { Dimensions, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { useStore } from '../store/index';

function ModalDetails() {
    const { showDetails, closeModal, details: { bankName, description, url, age } } = useStore()
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showDetails}
            onRequestClose={() => {
                closeModal();
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.contentInfo}>
                        <Image source={{ uri: url }} style={styles.imageBank} />
                        <View style={styles.contentData}>
                            <Text style={styles.titleModal}>{bankName}</Text>
                            <Text style={styles.desc}>{description}</Text>
                            <Text style={styles.desc}>Antiguedad: {age}</Text>
                        </View>
                    </View>
                    <Pressable
                        style={styles.button}
                        onPress={closeModal}>
                        <Text style={styles.textStyle}>Cerrar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}


const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        width: width - 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        minHeight: height / 4,
    },
    button: {
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#2196F3',
        width: "100%"
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleModal: {
        marginBottom: 10,
        textAlign: 'left',
        fontSize: 16,
        fontWeight: "600"
    },
    imageBank: {
        width: 80,
        resizeMode: "contain"
    },
    contentInfo: {
        gap: 10,
        flexDirection: "row",
        flex: 1,
    },
    desc: {
        marginBottom: 5,
        textAlign: "left"
    },
    contentData: {
        flex: 1,
    }
})

export default ModalDetails