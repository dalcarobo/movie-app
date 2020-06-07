import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CoverCase = (props) => {
    const navigation = useNavigation();
    const { id } = props;
    return (
        <TouchableNativeFeedback onPress={() => navigation.navigate('Movie', { id })}>
            <View style={styles.container} >
                <Image 
                    style={styles.tinyLogo}
                    source={{
                        uri: props.cover,
                    }}
                />
                <View style={styles.containerText}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>

                <View style={styles.containerText}>
                    <Text style={styles.score}><Ionicons name="md-star" size={32} color="#FCC419" /> {props.score}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
    },
    tinyLogo: {
        width: 180,
        height: 290,
        borderRadius: 40,
    },
    containerText: {
        width: 200,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15
    },
    score: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default CoverCase;
