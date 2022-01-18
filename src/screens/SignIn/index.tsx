import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

import {ButtonIcon} from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        /* @ts-ignore */
        navigation.navigate('Home');
    }
    return(
        <Background>
            <View style={styles.container}>
                <Image source={IllustrationImg} style={styles.image} resizeMode='stretch'/>

                <View style={styles.content}>
                    <Text style={styles.title}>
                    Conecte-se{'\n'}e organize suas{'\n'}jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
                    </Text>

                    <ButtonIcon title='Entrar com Discord' onPress={handleSignIn}/>
                </View>

            </View>
        </Background>
    );
}

