import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styles from './styles'
import search from '../../../assets/data/search'
import { useNavigation } from '@react-navigation/core'

const DestinationSearch = () => {

    const [inputText, setInputText] = useState('')
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder='Where Are You Going?'
                value={inputText}
                onChangeText={setInputText}
            />
            <FlatList 
                data={search}
                renderItem={({item}) => (
                    <Pressable style={styles.row} onPress={() => navigation.navigate('Guests')}>
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    )
}

export default DestinationSearch
