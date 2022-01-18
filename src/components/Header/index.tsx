import React, {ReactNode} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native'
import {Feather} from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({title, action} : Props) {
    const {secondary100, secondary40} = theme.colors;

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <LinearGradient colors={[secondary100, secondary40]} style={styles.container}>
            <BorderlessButton onPress={handleGoBack}>
                <Feather 
                    name='arrow-left'
                    size={24}
                    color={theme.colors.heading}
                />
            </BorderlessButton>

            <Text style={styles.title}>
                {title}
            </Text>

            {action &&
                <View>
                    {action}
                </View>
            }
            
        </LinearGradient>
    )
}
