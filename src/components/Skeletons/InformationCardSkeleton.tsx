import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const InformationCardSkeleton = () => (
    <SkeletonPlaceholder borderRadius={2}>
        <View style={{ width: "95%", alignSelf: 'center' }}>
            <View style={{ width: '100%', height: 130, borderRadius: 8 }} />
            <View style={{ marginTop: 8, height: 20, width: '50%', borderRadius: 8 }} />
            <View style={{ marginTop: 6, height: 16, width: '90%', borderRadius: 8 }} />
        </View>
    </SkeletonPlaceholder>
);

export default InformationCardSkeleton;
