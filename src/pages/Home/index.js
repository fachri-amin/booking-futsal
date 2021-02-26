import React from 'react';
import {
    View,
    Text,
    Button as Btn,
    Platform,
    StyleSheet
} from 'react-native';
import {
    TextInput,
    Menu,
    Button,
} from 'react-native-paper';
import { useStoreState, useStoreActions } from 'easy-peasy';
import DateTimePicker from '@react-native-community/datetimepicker';
import { set } from 'react-native-reanimated';

const Home = ({ navigation }) => {
    const setNama = useStoreActions(actions => actions.setNama);

    const tanggal = useStoreState(state => state.user.tanggal);
    const setTanggal = useStoreActions(actions => actions.setTanggal);
    const bulan = useStoreState(state => state.user.bulan);
    const setBulan = useStoreActions(actions => actions.setBulan);
    const tahun = useStoreState(state => state.user.tahun);
    const setTahun = useStoreActions(actions => actions.setTahun);
    // const jam = useStoreState(state => state.user.jam);
    // const setJam = useStoreActions(actions => actions.setJam);

    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false);

    const getDate = (event, tanggal) => {
        const currentDate = tanggal || date;
        setDate(currentDate);
        setTanggal(currentDate.getDate());
        setBulan(currentDate.getMonth(bulan) + 1);
        setTahun(currentDate.getFullYear());
        setShow(Platform.OS === 'ios' ? true : false);
    }

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>My Futsal.id</Text>
            </View>
            <View>
                <Text style={styles.myText}>Data Pesanan :</Text>
                <TextInput
                    label="Nama"
                    onChangeText={namanya => setNama(namanya)}
                    textAlign={'center'}
                    style={styles.myText}
                />
                <View style={styles.datePickerWrapper}>
                    <View>
                        <Button color="#61DAFB" onPress={showDatepicker} mode="contained">Pilih tanggal Booking</Button>
                        <Text style={styles.myText}>{tanggal} - {bulan} - {tahun}</Text>
                    </View>
                </View>
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
            <View style={styles.btnCekWrapper}>
                <Button mode="contained" color='#157347' onPress={() => navigation.navigate('LapanganTersedia')}>Cek Ketersediaan Lapangan</Button>
            </View>
        </View>
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
    button: {
        width: 150,
    },
    datePickerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 50,
        height: 50,
        alignContent: 'center'
    },
    myText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 25
    },
    jam: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        borderTopWidth: 3,
        borderTopColor: 'black',
        paddingTop: 20
    },
    btnCekWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 50,
        height: 50,
        alignContent: 'center',
    },
})

export default Home;