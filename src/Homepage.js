import {View ,Text, SafeAreaView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons, FontAwesome } from '@expo/vector-icons';
const BottomTabs = createBottomTabNavigator();
import NotificationPage from './Component/Module/NotificationPage';
import ProfilePage from './Component/Module/ProfilePage';
import Home from './Component/Module/Home';
import { Badge } from 'native-base';
import {  Colors,
    NavigationColors,
    FontSize,
    MetricsSizes,
    FontWeight,
    ContainerFlexStart,
    ContainerFlexCenter,
    ContainerColumn} from './Style/Color'
export default function HomePage(){
  
    return (
        <BottomTabs.Navigator >
            <BottomTabs.Screen name='Home' component={Home} options={{
                headerShown:false,
                tabBarIcon:({focused})=>{
                    return (
                        <Entypo name="home" size={24} color={focused ? '#3089f1' :'#d8d8d8'} />
                    )
                }
            }}/>
            <BottomTabs.Screen name='NotificationPage' component={NotificationPage} options={{
                headerShown:false,
                tabBarIcon:({focused})=>{
                    return (
                        <Ionicons name="ios-notifications" size={24} color={focused ? '#3089f1' :'#d8d8d8'} />
                    )
                },
                tabBarBadge: 3,
                tabBarBadgeStyle:{
                   backgroundColor:'#2bd584',
                   color:'#ffffff'
                }
            }} />
            <BottomTabs.Screen name='ProfilePage' component={ProfilePage}  options={{
                headerShown:false,
                tabBarIcon:({focused})=>{
                    return (
                        
                       
                        <FontAwesome name="user" size={24} color={focused ? '#3089f1' :'#d8d8d8'} />
                    )
                },
              
            }}/>
        </BottomTabs.Navigator>
    )
}