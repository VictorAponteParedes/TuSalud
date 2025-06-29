import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const MedicalHistoryCardSkeleton = () => (
    <SkeletonPlaceholder borderRadius={8}>
        <View style={{ marginBottom: 12, padding: 16 }}>
            <View style={{ width: 180, height: 20, marginBottom: 6 }} />
            <View style={{ width: 240, height: 16, marginBottom: 6 }} />
            <View style={{ width: 120, height: 14 }} />
        </View>
    </SkeletonPlaceholder>
);

export default MedicalHistoryCardSkeleton;
