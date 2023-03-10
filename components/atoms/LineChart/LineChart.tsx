import React from 'react';
import {LineChart as RNLineChart} from 'react-native-chart-kit';

type Props = {
  data: number[];
  percentRange: 'negative' | 'positive';
};

const LineChart = ({data, percentRange}: Props) => {
  return (
    <RNLineChart
      data={{
        labels: [],
        datasets: [
          {
            color: () => (percentRange === 'positive' ? '#0FDF8F' : '#EE8688'),
            data,
          },
        ],
      }}
      bezier
      transparent
      width={150}
      height={40}
      withDots={false}
      withHorizontalLabels={false}
      withHorizontalLines={false}
      withVerticalLabels={false}
      withVerticalLines={false}
      chartConfig={{
        color: () => '#FFFFFF',
        labelColor: () => '#FFFFFF',
      }}
      style={{
        paddingRight: 0,
        paddingTop: 2,
      }}
    />
  );
};

export default LineChart;
