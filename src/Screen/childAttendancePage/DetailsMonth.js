import {View, Text, StyleSheet,ScrollView} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { useState ,useRef,forwardRef} from 'react';
import {DateTimePicker as SelectDate} from 'react-native-ui-lib';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { color } from 'react-native-reanimated';

export default function DetailsMonth(){
  
    const [date, setDate]= useState(new Date())
    const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
    const workout = {key: 'workout', color: 'green'};
    const monthArr=[
        'January','February','March','April','May','June','July','August','September','October','November','December'
    ]
    return (
        <ScrollView>
        <View   style={{backgroundColor:"#ffffff"}}>
            
            <Calendar 
             markingType={'multi-dot'}
            markedDates={
                {
                    '2022-04-28':{dots: [ workout], disabled: false},
                    
                }
            }
            hideDayNames={false}
            monthFormat={'MMMM'}
            enableSwipeMonths={true}
            hideExtraDays={true}
            theme={{
                'stylesheet.calendar.header': {
                     dayTextAtIndex0: {
                       color: 'red'
                     },
                     dayTextAtIndex6: {
                       color: 'blue'
                     }
                 },
                 textSaturdayColor: "blue",
                 textSundayColor: "red"
               }}
            onDayPress={(date)=>{

            }}
            
               renderHeader={date=>{
                   return (
                       <Text style={{color:'blue',fontSize:30,fontWeight:'600'}}>{`${monthArr[date.getMonth()]}`}</Text>
                   )
               }}
                  
              dayComponent={({date, state}) => {
                 const day=new Date(date.timestamp).getDay()
                 let color=state === 'disabled' ? 'gray' : 'black'
                  if(day ==0 ){
                    color='red'
                  }
                  else if(day===6){
                    color='green'
                  }
                return (
                        <View style={{paddingVertical:4}}>
                            <Text style={{textAlign: 'center',fontSize:16, color:color
                        }}>{date.day}</Text>
                        </View>
                )
             }}
            />
      
            <View style={styles.box}>
                <View style={{marginRight:20}}>
                    <Text style={{color:"#ffffff",paddingVertical:3,fontWeight:'600'}}>Date:</Text>
                    <Text style={{color:"#ffffff",paddingVertical:3,fontWeight:'600'}}>Check in:</Text>
                    <Text style={{color:"#ffffff",paddingVertical:3,fontWeight:'600'}}>Check out:</Text>
                </View>
                <View>
                    <Text style={{color:"#ffffff",paddingVertical:3,fontWeight:'600'}}>Tuesday, 11 August 2020</Text>
                    <Text style={{color:"#ffffff",paddingVertical:3,fontWeight:'600'}}>09:30</Text>
                    <Text style={{color:"#ffffff",paddingVertical:3,fontWeight:'600'}}>16:30</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    box:{
        display:'flex',
        flexDirection:'row',
        padding:20,
        marginHorizontal:15,
        backgroundColor:'#3177f1',
        borderRadius:10,
        marginTop:30
    }
})
