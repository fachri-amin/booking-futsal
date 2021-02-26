import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Button } from 'react-native-paper';

const KodeBooking = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Kode Booking Anda :</Text>
            <Text style={{ fontSize: 72, marginVertical: 30 }}>AAEEOO</Text>
            <Text style={{ fontSize: 10 }}>*Silahkan disimpan atau di screenshot</Text>
            <Text style={{ fontSize: 10 }}>dan tunjukan saat transaksi</Text>

            <Button color="#157347" style={{ marginTop: 30 }} onPress={() => navigation.navigate('Home')}>Kemabli ke Home</Button>
        </View>
    )
}

export default KodeBooking;