import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Rating } from 'react-native-ratings';
import { DoctorType } from "../../types/doctors";
import styles from "./styles";

interface DoctorCardProps {
    doctor: DoctorType;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Image source={{ uri: doctor.imageUrl }} style={styles.doctorImage} />

                <View style={styles.textContainer}>
                    <Text style={styles.doctorName}>{doctor.name}</Text>
                    <Text style={styles.speciality}>{doctor.speciality}</Text>

                    <View style={styles.ratingContainer}>
                        <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={16}
                            readonly
                            startingValue={doctor.rating}
                            style={styles.rating}
                        />
                        <Text style={styles.ratingText}>({doctor.reviews})</Text>
                    </View>
                </View>

                <View style={[
                    styles.statusBadge,
                    doctor.status === 'available' ? styles.available : styles.unavailable
                ]}>
                    <Text style={styles.statusText}>
                        {doctor.status === 'available' ? 'Disponible' : 'No disponible'}
                    </Text>
                </View>
            </View>
        </View>
    );
};



export default DoctorCard;