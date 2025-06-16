import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DoctorFormData } from '../../types/doctors';
import styles from './styles';
import { ScheduleType } from '../../types/schecule';
import { API_BASE_URL } from '../../constants';

interface DoctorCardProps {
    doctor: DoctorFormData;
    isSelected: boolean;
    onPress: () => void;
    onScheduleSelect: (scheduleId: string) => void;
    selectedScheduleId?: string | null;
    translate: (key: string) => string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
    doctor,
    isSelected,
    onPress,
    onScheduleSelect,
    selectedScheduleId,
    translate
}) => {
    const getImageSource = () => {
        if (doctor.profileImage?.path) {
            return { uri: `${API_BASE_URL}/${doctor.profileImage.path}` };
        }
        return null;
    };

    const renderDoctorInfo = () => (
        <View style={styles.infoContainer}>
            <Text style={styles.name}>
                {doctor.firstName} {doctor.lastName}
            </Text>

            {doctor.description && (
                <Text style={styles.description}>{doctor.description}</Text>
            )}

            <View style={styles.ratingContainer}>
                <Text style={styles.rating}>⭐ {doctor.rating}</Text>
                <Text style={styles.reviews}>
                    ({doctor.reviews} {translate('reviews')})
                </Text>
            </View>

            <Text style={styles.status}>
                {translate('doctors.status')}:{' '}
                {translate(`doctors.${doctor.status}`)}
            </Text>
        </View>
    );

    const renderScheduleItem = (schedule: ScheduleType) => (
        <TouchableOpacity
            key={schedule.id}
            style={[
                styles.scheduleItem,
                selectedScheduleId === schedule.id && styles.selectedSchedule
            ]}
            onPress={() => onScheduleSelect(schedule.id)}
            activeOpacity={0.7}
        >
            <Text style={styles.scheduleText}>
                {translate(`days.${schedule.day}`)}: {schedule.startTime} - {schedule.endTime}
            </Text>
        </TouchableOpacity>
    );

    const renderSchedules = () => {
        if (!isSelected || !doctor.schedules?.length) return null;

        return (
            <View style={styles.schedulesContainer}>
                <Text style={styles.schedulesTitle}>
                    {translate('availableSchedules')}
                </Text>
                {doctor.schedules.map(renderScheduleItem)}
            </View>
        );
    };

    return (
        <TouchableOpacity
            style={[styles.card, isSelected && styles.selectedCard]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.imageRow}>
                <Image
                    source={getImageSource()}
                    style={styles.image}
                    resizeMode="cover"
                />
                {renderDoctorInfo()}
            </View>
            {renderSchedules()}
        </TouchableOpacity>
    );
};



export default DoctorCard;