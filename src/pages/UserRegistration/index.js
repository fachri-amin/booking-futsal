import React from 'react';
import {
    View,
    Text
} from 'react-native';
import NavBar from '../../components/NavBar/index,';

const UserRegistration = ({ navigation }) => {
    return (
        <View>
            <Text>Ini UserRegistration</Text>
            <NavBar navigation={navigation} />
        </View>
    )
}

export default UserRegistration;