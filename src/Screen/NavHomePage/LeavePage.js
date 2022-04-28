import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import {Colors,
    NavigationColors,
    FontSize,
    MetricsSizes,
    FontWeight,
    ContainerFlexStart,
    ContainerFlexCenter,
    ContainerColumn} from '../../Style/Color'
export default function LeavePage({navigation}){
    return (
        <SafeAreaView >
          <View>
              
              <View style={{paddingHorizontal:MetricsSizes.large,backgroundColor:'#5fbce1',paddingVertical:MetricsSizes.small}}>
                <View style={ContainerFlexStart}>
                <AntDesign name="arrowleft" size={24} color={Colors.white} onPress={()=>navigation.goBack()}/>
                <Text style={{marginLeft:90,color:Colors.white,fontSize:FontSize.regular}}>Leave Request</Text>
                </View>
                <View style={ContainerFlexCenter}>
                    <View >
                        <Text style={{textAlign:'center',color:Colors.white,fontSize:FontSize.regular}}>32</Text>
                        <Text style={{color:Colors.white,fontSize:FontSize.regular}}>Remaining</Text>
                    </View>
                    <View>
                        <Text style={{textAlign:'center',color:Colors.white,fontSize:FontSize.regular}}>18</Text>
                        <Text style={{color:Colors.white,fontSize:FontSize.regular}}>Taken</Text>
                    </View>
                    <View>
                        <Text style={{textAlign:'center',color:Colors.white,fontSize:FontSize.regular}}>50</Text>
                        <Text style={{color:Colors.white,fontSize:FontSize.regular}}>Total</Text>
                    </View>
                </View>
              </View>
              <View>
                  <View style={ContainerFlexCenter}> 
                  <Feather name="filter" size={24} color="black" />
                  <Text style={{color:'blue'}}>All</Text>
                  <Text>Annual</Text>
                  <Text>Personal</Text>
                  <Text>Sick</Text>
                  </View>
                  <ScrollView >

                  </ScrollView>
              </View>
          </View>
        </SafeAreaView>
    )
}