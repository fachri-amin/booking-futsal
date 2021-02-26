import { useStoreState, useStoreActions } from 'easy-peasy';
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Button, DataTable } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import NavBar from '../../components/NavBar/index,';

const StatusLapangan = (props) => {
    const lapangan = props.lapangan;
    if (lapangan == 4) {
        return (
            <DataTable.Cell numeric>Booked</DataTable.Cell>
        )
    }
    else {
        return (
            <DataTable.Cell numeric>Tersedia</DataTable.Cell>
        )
    }
}

const BtnBooked = (props) => {
    const lapangan = props.lapangan;
    if (lapangan == 4) {
        return (
            <DataTable.Cell numeric>
                <Text> - </Text>
            </DataTable.Cell>
        )
    }
    else {
        return (
            <DataTable.Cell numeric>
                <Button style={styles.btnPesan} onPress={() => props.navigation.navigate('KodeBooking')} color="#0B5ED7" mode="contained">Pesan</Button>
            </DataTable.Cell>
        )

    }
}

const LapanganTersedia = ({ navigation }) => {
    const data = useStoreState(state => state.user);
    const listJam = useStoreState(state => state.listJam);

    const setTanggal = useStoreActions(actions => actions.setTanggal);
    const setBulan = useStoreActions(actions => actions.setBulan);
    const setTahun = useStoreActions(actions => actions.setTahun);
    const setLapangan = useStoreActions(actions => actions.setLapangan);

    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false);

    const getDate = (event, tanggal) => {
        const currentDate = tanggal || date;
        setDate(currentDate);
        setTanggal(currentDate.getDate());
        setBulan(currentDate.getMonth(data.bulan) + 1);
        setTahun(currentDate.getFullYear());
        setShow(Platform.OS === 'ios' ? true : false);
    }

    const showDatepicker = () => {
        setShow(true);
    };

    if (data.lapangan === '' || data.lapangan == 5) {
        setLapangan(1)
    }

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Lapangan tersedia</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginTop: 20, marginLeft: 20 }}>Ketersediaan tanggal : {data.tanggal} - {data.bulan} - {data.tahun}</Text>
                <Button color="#157347" onPress={showDatepicker} style={{ marginTop: 11 }}>Ganti Tanggal</Button>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={getDate}
                    />
                )}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginLeft: 20, marginTop: 10 }}>Lapangan : {data.lapangan}</Text>
                <Button color="#157347" onPress={() => setLapangan(data.lapangan + 1)} style={{ marginTop: 11 }}>Lapangan Lain</Button>
            </View>
            <DataTable style={styles.table}>
                <DataTable.Header>
                    <DataTable.Title>Jam</DataTable.Title>
                    <DataTable.Title numeric>Status</DataTable.Title>
                    <DataTable.Title numeric>Aksi</DataTable.Title>
                </DataTable.Header>

                {listJam.map((item, index) => (
                    <DataTable.Row>
                        <DataTable.Cell>{item}</DataTable.Cell>
                        <StatusLapangan lapangan={data.lapangan} />
                        <BtnBooked lapangan={data.lapangan} navigation={navigation} />
                    </DataTable.Row>
                ))}
            </DataTable>
            <View style={{ margin: 50, marginTop: 50, flexDirection: 'row', justifyContent: 'center' }}>
                {/* <View>
                        <Button color="#157347" onPress={showDatepicker} mode="contained">Cari Tanggal Lain</Button>
                    </View> */}
            </View>
            {/* <NavBar navigation={navigation} /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#61DAFB',
        padding: 10,
    },
    headerText: {
        fontSize: 25
    },
    table: {
        marginTop: 20
    },
    btnPesan: {

    }
});

export default LapanganTersedia;