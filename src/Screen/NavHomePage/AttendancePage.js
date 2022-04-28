import {View, Text,Button, SafeAreaView, StyleSheet,DatePickerIOS, PickerIOS} from 'react-native';
import {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import ListDatePage from '../childAttendancePage/ListDatePage';
import DetailsMonth from '../childAttendancePage/DetailsMonth';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Colors,
    NavigationColors,
    FontSize,
    MetricsSizes,
    FontWeight,
    ContainerFlexStart,
    ContainerFlexCenter,
    ContainerColumn
  } from '../../Style/Color';
  import {   Select, Box, CheckIcon, Center, NativeBaseProvider} from 'native-base';
export default function AttendancePage({navigation}){
    const [listDate , setListDate]= useState(false);
    const [contentPage,setContentPage] = useState(false);
    let [service, setService] = useState("");
    function ListDate(){
        return(
          <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
              <View style={{width:80,height:30,borderRadius:10,backgroundColor:'#b6d6fd'}}>
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'stretch'}}>
                  <Text style={{color:Colors.white,top:8}}>2022</Text>
                <AntDesign name="caretdown" size={14} color="#ffffff" style={{top:8}} />
              </View>
              </View>
              <Text style={{color:Colors.white,fontSize:FontSize.small}}>May</Text>
              <Text style={{color:Colors.white,fontSize:FontSize.small}}>Jun</Text>
              <Text style={{color:Colors.white,fontSize:FontSize.small}}>Jul</Text>
              <Text style={{color:Colors.white,fontSize:FontSize.small}}>Aug</Text>
              <Text style={{color:Colors.white,fontSize:FontSize.small}}>Sep</Text>
          </View>
        )
    }
    return (
        <SafeAreaView>
        <View style={{backgroundColor:contentPage ? '#ffffff': '#f3f3f3'}}>
          <View style={{backgroundColor:Colors.backgroundTop}} >
                <View style={styles.headerTop}>
                <AntDesign name="arrowleft" size={24} color={Colors.white} onPress={()=>navigation.goBack()} />
                <Text style={{color:Colors.white,fontSize:FontSize.regular,marginLeft:120}}>Attendance</Text>
                </View>
                <View style={ContainerFlexCenter}>
                    <Text 
                     onPress={()=>{setListDate(false);setContentPage(false);}}
                    style={{
                        fontSize:FontSize.regular,
                        color:contentPage ? '#b6d6fd' : '#ffffff',
                        paddingVertical:MetricsSizes.regular,   
                       
                        }} >HISTORY</Text>
                        
                    <Text
                    onPress={()=>{setListDate(true);setContentPage(true) ;}}
                     style={{fontSize:FontSize.regular,color:contentPage ? '#ffffff' : '#b6d6fd',
                     paddingVertical:MetricsSizes.regular
                     
                     }}>CALENDAR</Text>
                </View>
               { listDate ? <View></View>: <ListDate />}
               <View style={styles.baner }>
                   <View style={{display:'flex',alignItems:'center'}}>
                       <Text style={{color:Colors.success,fontSize:FontSize.sm,fontWeight:FontWeight.sm}}>8</Text>
                       <Text style={{fontSize:FontSize.small,fontWeight:FontWeight.sm}}>Present</Text>
                   </View>
                   <View style={{display:'flex',alignItems:'center'}}>
                       <Text style={{color:Colors.warning,fontSize:FontSize.sm,fontWeight:FontWeight.sm}}>1</Text>
                       <Text style={{fontSize:FontSize.small,fontWeight:FontWeight.sm}}>Absert</Text>
                   </View>
                   <View style={{display:'flex',alignItems:'center'}}>
                       <Text style={{color:Colors.primary,fontSize:FontSize.sm,fontWeight:FontWeight.sm}}>2</Text>
                       <Text style={{fontSize:FontSize.small,fontWeight:FontWeight.sm}}>Late</Text>
                   </View>
               </View>
          </View>
           
          <View style={{marginTop:MetricsSizes.xxl, backgroundColor:'#f3f3f3'}}>
                        {contentPage ? <DetailsMonth />: <ListDatePage />}
          </View>
        </View>
         </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    headerTop:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:MetricsSizes.regular,
        marginVertical:10
    },
    baner:{
        backgroundColor:Colors.white,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingVertical:MetricsSizes.small,
        marginHorizontal:MetricsSizes.regular,
        borderRadius:12,
        top:'5%',
        shadowOffset:{
            width:3,
            height:10
        },
        shadowColor:'#d8d8d8',
        shadowOpacity:1,
        shadowRadius:5,
        
    }
})