import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateRangePicker from '../component/datePicker';

const CalendarPickerScreen = () => {
  const [selectedRange, setSelectedRange] = useState({
    start: "",
    end: "",
  });

  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const handleRangeSelect = (start: string, end: string) => {
    setSelectedRange({ start, end });
    console.log("Selected Range:", start, "to", end);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setIsOpenCalendar(!isOpenCalendar)}
      >
        <Text style={styles.text}>Click The Calendar</Text>
      </TouchableOpacity>
      {isOpenCalendar && (
        <>
          <DateRangePicker onRangeSelect={handleRangeSelect} />
           <Text style={styles.text}>
            Selected Range: {selectedRange.start} - {selectedRange.end}
          </Text>
        </>
      )}
    </View>
  )
}

export default CalendarPickerScreen;

const styles = StyleSheet.create({
    container: {
    },
    text: {
        fontSize: 16,
        marginTop: 10,
    }
})