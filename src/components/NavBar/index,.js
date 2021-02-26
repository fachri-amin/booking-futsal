import React from 'react';
import {
    View,
    Button,
} from 'react-native';

const NavBar = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Go to KodeBooking"
                onPress={() => navigation.navigate('KodeBooking')}
            />
            <Button
                title="Go to LapanganPenuh"
                onPress={() => navigation.navigate('LapanganPenuh')}
            />
            <Button
                title="Go to LapanganTersedia"
                onPress={() => navigation.navigate('LapanganTersedia')}
            />
            <Button
                title="Go to UserRegistration"
                onPress={() => navigation.navigate('UserRegistration')}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default NavBar;