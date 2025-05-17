import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Calendar } from '../../../helpers';
import SvgWrapper from '../../SvgWrapper';
import colors from '../../../theme/colors';
import styles from './styles';
import { AppointmentCardProps } from '../../../types/modals';

const AppointmentCard = (props: AppointmentCardProps) => {
    const { date, doctorName, specialty, availableTime, onPress, style } = props;


    return (
        <TouchableOpacity
            style={[styles.card, style]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.iconContainer}>
                <SvgWrapper color={colors.primary[400]} size={30}>
                    <Calendar />
                </SvgWrapper>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.dateText}>{date}</Text>

                <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>{doctorName}</Text>
                    <View style={styles.specialtyContainer}>

                        <Text style={styles.specialtyText}>{specialty}</Text>
                    </View>
                    <View style={styles.timeContainer}>

                        <Text style={styles.timeText}>{availableTime}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.rightIconContainer}>
                <Image source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} style={styles.doctorImage} />
            </View>
        </TouchableOpacity>
    );
};


export default AppointmentCard;