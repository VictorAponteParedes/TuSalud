import React from 'react';
import { View, Text } from 'react-native';
import { Calendar, Secure, Drop, Phone, Email } from '../../../helpers';
import SvgWrapper from '../../SvgWrapper';
import colors from '../../../theme/colors';
import { translate } from '../../../lang';
import styles from './styles';
import { PatientType } from '../../../types/patient';
import * as Animatable from 'react-native-animatable';


export type CardInformacionPersonalProps = {
  patient: PatientType | null;
};

const CardInformacionPersonal = ({ patient }: CardInformacionPersonalProps) => {
  return (
    <Animatable.View
      animation="fadeIn"
      duration={1000}
      style={styles.card}
    >
      <Text style={styles.title}>{translate('Information.title')}</Text>

      <View style={styles.infoRow}>
        <SvgWrapper color={colors.primary[400]} size={24}>
          <Email />
        </SvgWrapper>
        <Text style={styles.infoText}>
          {translate('Information.email')} {patient?.email}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <SvgWrapper color={colors.primary[400]} size={24}>
          <Phone />
        </SvgWrapper>
        <Text style={styles.infoText}>
          {translate('Information.phone')} {patient?.phone}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <SvgWrapper color={colors.primary[400]} size={24}>
          <Drop />
        </SvgWrapper>
        <Text style={styles.infoText}>
          {translate('Information.bloodType')} {patient?.bloodType}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <SvgWrapper color={colors.primary[400]} size={24}>
          <Calendar />
        </SvgWrapper>
        <Text style={styles.infoText}>
          {translate('Information.dateBith')} {patient?.dateBirth}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <SvgWrapper color={colors.primary[400]} size={24}>
          <Secure />
        </SvgWrapper>
        <Text style={styles.infoText}>
          {translate('Information.madicalSecure')} {patient?.allergies}
        </Text>
      </View>
    </Animatable.View>
  );
};

export default CardInformacionPersonal;