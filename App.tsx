import React from 'react';
import { View } from 'react-native';
import CalendarPickerScreen from './src/screen/calendarPicker';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}>
        <CalendarPickerScreen/>
    </View>
  )
}

export default App;