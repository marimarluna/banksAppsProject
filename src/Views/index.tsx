import React, { useEffect } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ModalDetails from '../components/ModalDetails';

import { useStore } from '../store/index';

function App(): JSX.Element {
    const { init, list, setDetails } = useStore()
    useEffect(() => {
        init()
    }, [])

    console.log(list)
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                {list.map((item): any => {
                    const { bankName, url } = item
                    return (
                        <TouchableOpacity style={styles.cardContent} onPress={() => setDetails(item)}>
                            <Image source={{ uri: url }} style={{ width: 80, height: 80, resizeMode: "cover", borderRadius: 50 }} />
                            <Text style={styles.textName}>{bankName}</Text>
                            <Icon name="chevron-forward-outline" size={20} />
                        </TouchableOpacity>
                    )
                })} 
            </ScrollView>
            <ModalDetails />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    cardContent: {
        backgroundColor: "#ddd7d7",
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        gap: 15,
        alignItems: "center"
        // justifyContent: "space-between"
    },
    textName: {
        fontSize: 18,
        flex: 1,
    }
})

export default App