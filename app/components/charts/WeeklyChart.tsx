import React from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Colors from '../../constants/Colors';
import { Text, View } from '../Themed';

export default function WeeklyChart() {
  const quantity = [11, 23, 32, 28, 25, 26, 27];

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: Platform.select({ ios: '500', android: undefined }),
          fontFamily: Platform.select({
            ios: 'montserrat-medium',
            android: 'montserrat-medium',
          }),
          marginBottom: 20,
        }}
      >
        Weekly Expenses
      </Text>
      <BarChart
        data={{
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{ data: quantity }],
        }}
        width={
          Platform.OS === 'web' ? 1000 : Dimensions.get('window').width - 100
        }
        height={250}
        yAxisSuffix={'k'}
        yAxisLabel={'$'}
        chartConfig={{
          paddingRight: 20,
          paddingTop: 20,
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          color: () => `#6979F8`,
          labelColor: () => `#999999`,
          propsForBackgroundLines: {
            strokeWidth: 1,
            stroke: '#e2e2e2',
          },
          propsForLabels: {
            fontSize: 20,
            fontFamily: 'montserrat-regular',
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
    paddingLeft: 30,
    paddingRight: 30,
    height: '100%',
    backgroundColor: 'white',
  },
});
