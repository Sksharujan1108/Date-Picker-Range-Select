import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";

interface DateRangePickerProps {
    onRangeSelect: (start: string, end: string) => void;
}   

const DateRangePicker = (props: DateRangePickerProps) => {
  const { onRangeSelect } = props;

  const [range, setRange] = useState({ start: "", end: "" });

  const getDateRange = (start: string, end: string) => {
    const rangeDates: Record<string, any> = {};
    let current = new Date(start);
    const endDate = new Date(end);

    while (current <= endDate) {
      const dateStr = current.toISOString().split("T")[0];

      rangeDates[dateStr] = {
        color:  "#FFA500",
        textColor: "white",
        startingDay: dateStr === start,
        endingDay: dateStr === end,
      };

      current.setDate(current.getDate() + 1);
    }

    return rangeDates;
  };

  const onDayPress = (day: any) => {
    const selectedDate = day.dateString;
  
    if (!range.start || (range.start && range.end)) {
      // Resetting range
      setRange({ start: selectedDate, end: "" });
    } else {
      if (new Date(selectedDate) > new Date(range.start)) {
        const newRange = { start: range.start, end: selectedDate };
        setRange(newRange);
        onRangeSelect(newRange.start, newRange.end); // ✅ Call here
      } else {
        const newRange = { start: selectedDate, end: range.start };
        setRange(newRange);
        onRangeSelect(newRange.start, newRange.end); // ✅ Call here
      }
    }
  };

  const markedDates =
    range.start && range.end
      ? getDateRange(range.start, range.end)
      : range.start
      ? {
          [range.start]: {
            startingDay: true,
            endingDay: true,
            color: "#70d7c7",
            textColor: "white",
          },
        }
      : {};

  return (
    <View style={styles.container}>
      <Calendar
        style={{
          borderRadius: 10,
          borderColor: "transparent",
          height: 350,
          width: 300,
        }}
        markingType="period"
        markedDates={markedDates}
        onDayPress={onDayPress}
      />
    </View>
  );
};

export default DateRangePicker;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // marginTop: 50,
  },
});
