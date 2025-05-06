import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DateRangePicker from '../component/datePicker';

const CalendarPickerScreen = () => {
  const [selectedRange, setSelectedRange] = useState({
    start: "",
    end: "",
  });

  const handleRangeSelect = (start: string, end: string) => {
    setSelectedRange({ start, end });
    console.log("Selected Range:", start, "to", end);
  };

  return (
    <View style={styles.container}>
      <DateRangePicker onRangeSelect={handleRangeSelect} />
      <Text style={styles.text}>
        Selected Range: {selectedRange.start} - {selectedRange.end}
      </Text>
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