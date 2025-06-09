import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Calendar } from '../../../helpers';
import SvgWrapper from '../../../components/SvgWrapper';
import colors from '../../../theme/colors';
import styles from './styles';
import { AppointmentFormData } from '../../../types/appointment';
import { API_BASE_URL } from '../../../constants';
import { useNavigation } from '@react-navigation/native';

interface Props {
    appointment: AppointmentFormData;
}

const AppointmentCard = ({ appointment }: Props) => {
    const navigate = useNavigation();


    const imageUrl = appointment.doctor.profileImage?.path
        ? `${API_BASE_URL}/${appointment.doctor.profileImage.path}`
        : '/default-profile.png';

    console.log("foto doctor:", appointment)

    const goToDetails = () => {
        // navigate.navigate(`/doctors/${doctor.id}`);
        console.log("detalle de la cita")
    };

    return (
        <TouchableOpacity
            style={[styles.card]}
            onPress={goToDetails}
            activeOpacity={0.8}
        >
            <View style={styles.iconContainer}>
                <SvgWrapper color={colors.primary[400]} size={30}>
                    <Calendar />
                </SvgWrapper>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.dateText}>{`${appointment.appointmentDate} ${appointment.appointmentTime}`}</Text>

                <View style={styles.doctorInfo}>
                    <Text style={styles.doctorName}>{appointment.doctor.firstName}</Text>
                    <View style={styles.specialtyContainer}>

                        <Text style={styles.specialtyText}>{appointment.doctor.experience}</Text>
                    </View>
                    <View style={styles.timeContainer}>

                        <Text style={styles.timeText}>{appointment.doctor.schedules?.map((item) => `${item.day} ${item.startTime} ${item.endTime}`)}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.rightIconContainer}>
                {/* <Image source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }} style={styles.doctorImage} /> */}
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