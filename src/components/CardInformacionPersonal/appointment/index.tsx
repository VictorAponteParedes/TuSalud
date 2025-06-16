import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Calendar } from '../../../helpers';
import colors from '../../../theme/colors';
import styles from './styles';
import { AppointmentFormData } from '../../../types/appointment';
import { API_BASE_URL } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { getStatusStyle } from '../../../helpers/status';

interface Props {
    appointment: AppointmentFormData;
}

const AppointmentCard = ({ appointment }: Props) => {
    const navigate = useNavigation();

    const imageUrl = appointment.doctor.profileImage?.path
        ? `${API_BASE_URL}/${appointment.doctor.profileImage.path}`
        : '/default-profile.png';

    const goToDetails = () => {
        // Puedes usar navigate.navigate('AppointmentDetail', { appointmentId: appointment.id });
        console.log("detalle de la cita");
    };

    const statusStyle = getStatusStyle(appointment.status);

    return (
        <TouchableOpacity
            style={[styles.card]}
            onPress={goToDetails}
            activeOpacity={0.8}
        >
            <View style={styles.infoContainer}>

                {/* Fecha de la cita */}
                <View style={styles.dateContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Calendar width={16} height={16} color={colors.primary[400]} />
                        <Text style={styles.dateLabel}>  Cita programada:</Text>
                    </View>
                    <Text style={styles.dateText}>
                        {`${appointment.appointmentDate} ${appointment.appointmentTime}`}
                    </Text>
                </View>

                {/* Información del doctor */}
                <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>{appointment.doctor.firstName}{appointment.doctor.lastName}</Text>
                    {/* Estado de la cita */}
                    <View style={[styles.statusContainer, {
                        backgroundColor: statusStyle.backgroundColor,
                        borderColor: statusStyle.borderColor
                    }]}>
                        <Text style={styles.statusText}>{statusStyle.text}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.rightIconContainer}>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.doctorImage}
                    resizeMode="cover"
                />
            </View>
        </TouchableOpacity>
    );
};

export default AppointmentCard;
