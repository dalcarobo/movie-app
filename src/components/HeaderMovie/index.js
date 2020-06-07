import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Math.round(Dimensions.get('window').width);

const HeaderMovie = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.backdrop}>
                <Image style={{ width: screenWidth, height: 290, borderBottomLeftRadius: 50, marginTop: -60 }} source={{ uri: `https://image.tmdb.org/t/p/w400${props.backdrop_path}` }} />
            </View>
            <View style={styles.info} elevation={20}>
                <View style={styles.infoContainer}>
                    <Ionicons name="md-star" size={40} color="#FCC419" />
                    <Text style={styles.infoTextBold}>{props.vote_average}/10</Text>
                    <Text style={styles.infoTextSub}>{props.vote_count}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Ionicons name="md-star" size={40} color="#FCC419" />
                    <Text style={styles.infoTextBold}>Avalie</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.infoPopularBox}><Text style={{ color: 'white', fontWeight: 'bold' }}>{Math.round(props.popularity)}</Text></View>
                    <Text style={styles.infoTextBold}>Metascore</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 30,
        color: '#12153D',
    },
    backdrop: {
        position: "absolute",
        top: 0,
    },
    info: {
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingVertical: 10,
        flexDirection: 'row',
        position: 'absolute',
        height: 100,
        width: (screenWidth-40),
        backgroundColor: 'white',
        left: -(screenWidth/2.5),
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
    },
    infoContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    infoPopularBox: {
        height: 34,
        width: 34,
        marginTop: 6,
        backgroundColor: '#51CF66',
        paddingLeft: 9,
        paddingTop: 7
    },
    infoTextBold: {
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    infoTextSub: {
        fontSize: 12,
        color: 'gray',
        fontFamily: 'Roboto',
    }
});

export default HeaderMovie
