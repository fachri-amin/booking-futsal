import { createStore, action } from 'easy-peasy'

const store = createStore({
    user: {
        nama: '',
        tanggal: '',
        bulan: '',
        tahun: '',
        jam: '',
        lapangan: '',
        kodeBooking: ''
    },
    listJam: [
        "09.00-10.00",
        "10.00-11.00",
        "11.00-12.00",
        "13.00-14.00",
        "14.00-15.00",
        "15.00-16.00",
        "16.00-17.00",
        "17.00-18.00",
        "19.00-20.00",
        "20.00-21.00",
        "21.00-22.00",
        "22.00-23.00",
    ],
    setNama: action((state, payload) => {
        state.user.nama = payload;
    }),
    setTanggal: action((state, payload) => {
        state.user.tanggal = payload;
    }),
    setBulan: action((state, payload) => {
        state.user.bulan = payload;
    }),
    setTahun: action((state, payload) => {
        state.user.tahun = payload;
    }),
    setJam: action((state, payload) => {
        state.user.jam = payload;
    }),
    setLapangan: action((state, payload) => {
        state.user.lapangan = payload;
    }),
});

export default store;