import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StoreProvider } from 'easy-peasy';
import store from './store';
import Home from './pages/Home';
import KodeBooking from './pages/KodeBooking';
import LapanganPenuh from './pages/LapanganPenuh';
import LapanganTersedia from './pages/LapanganTersedia';
import UserRegistration from './pages/UserRegistration';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="KodeBooking" component={KodeBooking} />
            <Stack.Screen name="LapanganPenuh" component={LapanganPenuh} />
            <Stack.Screen name="LapanganTersedia" component={LapanganTersedia} />
            <Stack.Screen name="UserRegistration" component={UserRegistration} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};


export default App;
