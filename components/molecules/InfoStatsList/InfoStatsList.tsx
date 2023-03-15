import React from 'react';
import {Text, View} from 'react-native';
import {InfoList} from '../../pages/TradePage/TradePage';
import {styles} from './styles';

import TooltipIcon from '../../../assets/images/tooltip.svg';

type Props = {
  data: InfoList;
};

const InfoStatsList = ({data}: Props) => {
  const rows = Math.ceil(data.length / 2);

  return (
    <View style={styles.container}>
      {Array(rows)
        .fill(0)
        .map((_, i) => {
          const start = i * 2;
          const end = start + 2;

          return (
            <View key={i} style={styles.row}>
              {data.slice(start, end).map((item, j) => (
                <View key={`${i}-${j}`} style={styles.cell}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <TooltipIcon />
                  </View>
                  <Text style={styles.value}>{item.value}</Text>
                </View>
              ))}
            </View>
          );
        })}
    </View>
  );
};

export default InfoStatsList;
