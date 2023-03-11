import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../diceTask/style';
import moment from 'moment';


const Card = ({ item, index }) => {

    return (
        <View style={styles.cardContainer}>
            <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center', marginBottom: 20 }}>
                <View style={{ height: 80, width: 80, borderRadius: 10, marginLeft: 10, marginRight: 10 }}>
                    <Image source={{ uri: item.owner.avatar_url }} style={{ flex: 1, borderRadius: 10 }} />
                </View>
                <View style={{ width: '70%', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 19, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                    {/* <View style={{margin:10, alignItems:'center',justifyContent:'center', marginTop:15}}> */}
                    <Text style={{ color: 'black' }} numberOfLines={2}>{item.description}
                    </Text>
                    {/* </View> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, alignContent: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../assets/star.png')} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 5 }} />
                            <Text style={{ alignItems: 'center', color: 'black', fontSize: 15 }}>{item.stargazers_count}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                            <View style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: 'purple', marginRight: 5 }} />
                            <Text style={{ alignItems: 'center', color: 'black', fontSize: 15 }}>{item.language}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={styles.dateStyle}>Created at: {moment(item.created_at).format('MMM DD YYYY')}</Text>
                <Text style={styles.dateStyle}>Updated on: {moment(item.updated_at).format('MMM DD YYYY')}</Text>
            </View>
        </View>
    )
}

export default Card;