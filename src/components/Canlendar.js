import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
 const Canlendar=()=>{
    return (
        <Calendar
  
  markedDates={{
    '2022-05-16': {selected: true, marked: true, selectedColor: 'blue'},
    '2022-05-17': {marked: true},
    '2022-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2022-05-19': {disabled: true, disableTouchEvent: true}
  }}
/>
    )
}
export default Canlendar