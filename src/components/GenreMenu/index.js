import React from 'react'
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'

const GenreMenu = () => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.buttonGenres}>
                <Text style={styles.textButtonGenres}>Ação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGenres}>
                <Text style={styles.textButtonGenres}>Comédia</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGenres}>
                <Text style={styles.textButtonGenres}>Drama</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGenres}>
                <Text style={styles.textButtonGenres}>Suspense</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGenres}>
                <Text style={styles.textButtonGenres}>Animação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGenres}>
                <Text style={styles.textButtonGenres}>Terror</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    buttonGenres: {
        borderRadius: 20,
        borderColor: '#dddddd',
        borderWidth: 2,
        marginLeft: 20,
        height: 45,
        paddingHorizontal: 20,
        paddingVertical: 8
    },
    textButtonGenres: {
        color: '#12153D',
        fontSize: 16
    }
});

export default GenreMenu;
