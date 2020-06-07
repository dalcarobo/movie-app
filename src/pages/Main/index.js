import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

import CoverCase from '../../components/CoverCase';
import GenreMenu from '../../components/GenreMenu';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Main() {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjlkNGUwMDhhYTc1NDc4N2M4MzBmMzljYmVkYzExMiIsInN1YiI6IjVlZDE0MzExNWMwNzFiMDAxZTJkMGY4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYvgSHyUS--P5sCfovZfOhMG2p7bUbpnDURq8ui5y9E';
    const [trending, setTrending] = useState([]);
    const carouselRef = useRef(null);

    async function getTrending() {
        await axios.get('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        }).then(res => {
            const d = (res.data.results);

            d.map((item) => {
                const { id, original_title, poster_path, vote_average } = item;
                data.push({ id, original_title, poster_path, vote_average });
            });
            setTrending(data);
        });
    }
    const data = [];
    useEffect(() => {
        getTrending();
    }, []);

    const c = ({ item, index }) => {
        return (
            <CoverCase id={item.id} title={item.original_title} score={item.vote_average} cover={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
        )
    };



    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ height: 40, marginTop: 40, paddingHorizontal: 20 }} >
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Ionicons name="md-menu" size={32} color="#12153D" />
                    <Ionicons name="md-search" size={32} color="#12153D" />
                </View>
            </View>
            <View style={{ marginLeft: 20, fontFamily: 'Roboto' }}>
                <Text style={{ fontSize: 40, textAlign: 'left', color: '#12153D' }}>Week Trending</Text>
            </View>
            <View style={styles.container}>
                <View style={{ height: 80 }} >
                    <GenreMenu />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                    <Carousel
                        data={trending}
                        loop={true}
                        ref={carouselRef}
                        renderItem={c}
                        sliderWidth={screenWidth}
                        inactiveSlideOpacity={0.5}
                        parallax={true}
                        itemWidth={200}
                    />
                </View>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 30,
        fontFamily: 'Roboto',
        color: '#12153D'
    }
});
