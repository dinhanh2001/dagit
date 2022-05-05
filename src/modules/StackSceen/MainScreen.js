import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView ,Image, Button, useColorScheme,useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNtextinput from '../../templace/RNtextinput';
import { AntDesign } from '@expo/vector-icons';
import {TextRN,
  Title,
  Caption} from '../../templace/StyleText';
  import MenuMain from '../../components/MenuMain';
  import ColorVersion from '../../styles/color';
  import RNbutton from '../../templace/RNbutton';
  import Canlendar from '../../components/Canlendar';
  import LoginPage from '../../ListPage/LoginPage';
  import BottomTabs from './BottomTabs';
  import HomePage from '../../ListPage/HomePage';
const MainStack = createNativeStackNavigator();

export default function MainScreen({navigations}) {
    return (
    
         <NavigationContainer>
            <MainStack.Navigator >
                <MainStack.Screen options={{
                    headerShown:false
                }} name='LoginPage'  component={LoginPage }/>
                <MainStack.Screen options={{
                    headerShown:false
                }} name='BottomTabs'  component={BottomTabs }/>
            </MainStack.Navigator>
         </NavigationContainer>
      
    )
  }