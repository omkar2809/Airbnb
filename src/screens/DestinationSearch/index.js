import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import styles from './styles'
import search from '../../../assets/data/search'

const DestinationSearch = () => {

    const [inputText, setInputText] = useState('')

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
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={'location-pin'} size={30} />
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default DestinationSearch
