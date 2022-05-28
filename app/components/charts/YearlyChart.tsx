import React from 'react';
import { Dimensions, Platform } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Text, View } from '../Themed';

export default function YearlyChart() {
  const transactions = [26,27,28,25,29,26];

  return (
      <LineChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{data: transactions}],
        }}
        width={Platform.OS === 'web' ? 900 : Dimensions.get('window').width - 100}
        height={220}
        chartConfig={{
          backgroundGradientFrom: 'white',
          backgroundGradientTo: 'white',
          color: () => `#6979F8`,
          labelColor: () => `#999999`,
          fillShadowGradientFrom: 'white',
          fillShadowGradientTo: 'white',
          propsForBackgroundLines: {
            strokeWidth: 1,
            stroke: '#e2e2e2',
          },
          decimalPlaces: 0,
          propsForLabels: {
            fontSize: Platform.OS === 'web' ? 20 : 15,
            fontFamily: 'montserrat-regular',
          },
        }}
        fromNumber={25}
        withVerticalLines={false}
        bezier
      />
  );
}
