import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Text} from 'react-native';
import HomePage from "../../ListPage/HomePage";
import { Ionicons } from '@expo/vector-icons';
const BtTab = createBottomTabNavigator();
function Abc(){
    return (
        <Text>abc</Text>
    )
}
export default function BottomTabs({navigation}){
    return (
        <BtTab.Navigator >
            <BtTab.Screen name='HomePage' component={HomePage} options={{
                tabBarIcon:(focus,color,size)=>{
                    return (
                        <Ionicons name="ios-home-sharp" size={24} color="black" />
                    )
                },
                headerShown:false
            }}/>
            <BtTab.Screen name='Abc' component={Abc} />
        </BtTab.Navigator>
    )
}
