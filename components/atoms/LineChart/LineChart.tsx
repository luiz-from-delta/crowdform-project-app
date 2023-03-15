import React from 'react';
import {LineChart as RNLineChart} from 'react-native-chart-kit';

type Props = {
  bezier?: boolean;
  data: number[];
  height?: number;
  percentRange: 'negative' | 'positive';
  width?: number;
};

const LineChart = ({
  bezier = true,
  data,
  height = 55,
  percentRange,
  width = 150,
}: Props) => {
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
      bezier={bezier}
      transparent
      width={width}
      height={height}
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
