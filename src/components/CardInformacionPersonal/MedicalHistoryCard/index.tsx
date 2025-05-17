import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SvgWrapper from '../../SvgWrapper';
import { Historial } from '../../../helpers';
import colors from '../../../theme/colors';

type MedicalHistoryCardProps = {
  historyName: string;
  description: string;
  date: string;
  icon?: React.ReactNode;
  onPress?: () => void;
};

const MedicalHistoryCard = (props: MedicalHistoryCardProps) => {
  const { historyName, description, date, icon, onPress } = props;
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer}>
        <SvgWrapper color={colors.primary[400]} size={30}>
          <Historial />
        </SvgWrapper>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.historyName}>{historyName}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 8,
    width: '100%',
  },
  iconContainer: {
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
  },
  historyName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#636e72',
    marginBottom: 8,
    lineHeight: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 13,
    color: '#636e72',
    marginLeft: 6,
  },
});

export default MedicalHistoryCard;