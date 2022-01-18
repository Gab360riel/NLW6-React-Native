import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';

import { styles } from './styles'
import { theme } from '../../global/styles/theme';
import { GuildIcon } from '../../components/GuildIcon';


export function AppointmentCreate() {
    const [category, setCategory] = useState('');

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    return (
        <Background>
            <Header title='Agendar Partida'
        />

        <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18}]}>
            Categoria
        </Text>

        <CategorySelect hasCheckBox categorySelected={category} setCategory={handleCategorySelect} />

        <View style={styles.form}>
            <RectButton>
                <View style={styles.select}>
                    {
                        //<View style={styles.image} />
                        <GuildIcon />
                    }

                    <View style={styles.selectBody}>
                        <Text style={styles.label}>
                            Selecione um servidor
                        </Text>
                    </View>

                    <Feather
                        name='chevron-right'
                        size={24}
                        color={theme.colors.highlight}
                    />

                </View>
            </RectButton>
        </View>

       
        </Background>
    )
}
