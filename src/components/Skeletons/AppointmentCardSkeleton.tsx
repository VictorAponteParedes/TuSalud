import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const AppointmentCardSkeleton = () => (
    <SkeletonPlaceholder borderRadius={8}>
        <View style={styles.card}>
            <View style={styles.infoContainer}>

                {/* Fecha */}
                <View style={styles.dateContainer}>
                    <View style={styles.iconCircle} />
                    <View style={styles.dateTextBlock} />
                </View>

                {/* Doctor info */}
                <View style={styles.doctorInfo}>
                    <View style={styles.doctorNameBlock} />
                    <View style={styles.statusBlock} />
                </View>

            </View>

            {/* Imagen doctor */}
            <View style={styles.doctorImage} />
        </View>
    </SkeletonPlaceholder>
);

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        marginBottom: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 1,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconCircle: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#E1E9EE',
    },
    dateTextBlock: {
        marginLeft: 8,
        width: 150,
        height: 16,
        borderRadius: 4,
        backgroundColor: '#E1E9EE',
    },
    doctorInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    doctorNameBlock: {
        width: 120,
        height: 18,
        borderRadius: 4,
        backgroundColor: '#E1E9EE',
    },
    statusBlock: {
        width: 80,
        height: 20,
        borderRadius: 12,
        backgroundColor: '#E1E9EE',
    },
    doctorImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E1E9EE',
    },
});

export default AppointmentCardSkeleton;
