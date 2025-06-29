import React from 'react';
import { View, StyleSheet } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const CardSkeleton = () => (
    <SkeletonPlaceholder borderRadius={4}>
        <View style={styles.card}>
            {/* Título */}
            <View style={styles.title} />

            {/* Fila 1 */}
            <View style={styles.infoRow}>
                <View style={styles.icon} />
                <View style={styles.textBlock} />
            </View>

            {/* Fila 2 */}
            <View style={styles.infoRow}>
                <View style={styles.icon} />
                <View style={styles.textBlock} />
            </View>

            {/* Fila 3 */}
            <View style={styles.infoRow}>
                <View style={styles.icon} />
                <View style={styles.textBlock} />
            </View>

            {/* Fila 4 */}
            <View style={styles.infoRow}>
                <View style={styles.icon} />
                <View style={styles.textBlock} />
            </View>

            {/* Fila 5 */}
            <View style={styles.infoRow}>
                <View style={styles.icon} />
                <View style={styles.textBlock} />
            </View>
        </View>
    </SkeletonPlaceholder>
);

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        marginBottom: 16,
    },
    title: {
        width: 180,
        height: 20,
        marginBottom: 20,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    icon: {
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    textBlock: {
        marginLeft: 12,
        width: 220,
        height: 16,
        borderRadius: 4,
    },
});

export default CardSkeleton;
