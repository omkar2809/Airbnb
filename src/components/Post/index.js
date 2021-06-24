import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles.js'

const Post = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg' }}
            />
            <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
            <Text style={styles.description} numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut!</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$6 </Text>
                <Text style={styles.price}> $30 </Text>
                / night
            </Text>
            <Text style={styles.totalPrice}>$ 230 total</Text>
        </View>
    )
}

export default Post
