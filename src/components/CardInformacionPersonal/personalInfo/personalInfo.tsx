import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, Secure, Drop, Phone, Email } from '../../../helpers';
import SvgWrapper from '../../SvgWrapper';
import colors from '../../../theme/colors';
import { translate } from '../../../lang';
import styles from './styles'
import { CardInformacionPersonalProps } from '../../../types/modals';




const CardInformacionPersonal = (props: CardInformacionPersonalProps) => {
    const { email, phone, BloodGroup, dateBirth, medicalSecure, style } = props;
    return (
        <View style={[styles.card, style]}>
            <Text style={styles.title}>{translate('Information.title')}</Text>

            <View style={styles.infoRow}>
                <SvgWrapper color={colors.primary[400]} size={24}>
                    <Email />
                </SvgWrapper>
                <Text style={styles.infoText}>{translate('Information.email')} {email}</Text>
            </View>

            <View style={styles.infoRow}>
                <SvgWrapper color={colors.primary[400]} size={24}>
                    <Phone />
                </SvgWrapper>
                <Text style={styles.infoText}>{translate('Information.phone')} {phone}</Text>
            </View>

            <View style={styles.infoRow}>
                <SvgWrapper color={colors.primary[400]} size={24}>
                    <Drop />
                </SvgWrapper>
                <Text style={styles.infoText}>{translate('Information.bloodType')} {BloodGroup}</Text>
            </View>

            <View style={styles.infoRow}>
                <SvgWrapper color={colors.primary[400]} size={24}>
                    <Calendar />
                </SvgWrapper>
                <Text style={styles.infoText}>{translate('Information.dateBith')} {dateBirth}</Text>
            </View>

            <View style={styles.infoRow}>
                <SvgWrapper color={colors.primary[400]} size={24}>
                    <Secure />
                </SvgWrapper>
                <Text style={styles.infoText}>{translate('Information.madicalSecure')} {medicalSecure}</Text>
            </View>
        </View>
    );
};

export default CardInformacionPersonal;