import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView ,Image} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather, Entypo   } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import HomePage from './src/Homepage';
const Drawers =createDrawerNavigator()
export default function App() {
  return (
       
      <NavigationContainer  >
        <Drawers.Navigator screenOptions={{
          
          headerShown:false
        }}>
       <Drawers.Screen name='HomePage' component={HomePage} />
       </Drawers.Navigator>
      </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
