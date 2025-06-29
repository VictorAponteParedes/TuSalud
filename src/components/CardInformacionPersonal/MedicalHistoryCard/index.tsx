import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  historyName: string;
  description: string;
  date: string;
  onPress?: () => void;
}

const MedicalHistoryCard = ({ historyName, description, date, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      <Text style={styles.historyTitle}>{historyName}</Text>
      <Text style={styles.historyDescription}>{description}</Text>
      <Text style={styles.historyDate}>{date}</Text>
    </TouchableOpacity>
  );
};

export default MedicalHistoryCard;
