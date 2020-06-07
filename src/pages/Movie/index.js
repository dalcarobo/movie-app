import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'

import HeaderMovie from '../../components/HeaderMovie'

const Movie = (props) => {
    const { id } = props.route.params;
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjlkNGUwMDhhYTc1NDc4N2M4MzBmMzljYmVkYzExMiIsInN1YiI6IjVlZDE0MzExNWMwNzFiMDAxZTJkMGY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYvgSHyUS--P5sCfovZfOhMG2p7bUbpnDURq8ui5y9E';
    const [movie, setMovie] = useState({});

    async function getMovie() {
        await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        }).then(res => {
            const { backdrop_path, title, overview, vote_average, vote_count, genres, popularity, release_date, runtime } = res.data;
            data.push({ backdrop_path, title, overview, vote_average, vote_count, genres, popularity, release_date, runtime });
            setMovie({ backdrop_path, title, overview, vote_average, vote_count, genres, popularity, release_date, runtime });
        }).catch(err => {
            console.log(err);
        });
    }
    const data = [];
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <HeaderMovie backdrop_path={movie.backdrop_path} vote_average={movie.vote_average} vote_count={movie.vote_count} popularity={movie.popularity} />
                <View>
                    <Text style={{ fontSize: 25 }}>{movie.title}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 30,
        color: '#12153D'
    },
});

export default Movie;
