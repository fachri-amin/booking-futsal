import React from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import NavBar from '../../components/NavBar/index,';

const LapanganPenuh = ({ navigation }) => {
    return (
        <View>
            <Text>Ini LapanganPenuh</Text>
            <NavBar navigation={navigation} />
        </View>
    )
}

export default LapanganPenuh;