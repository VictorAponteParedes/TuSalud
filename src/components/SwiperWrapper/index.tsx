// components/SwiperWrapper.tsx
import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, Dimensions, View } from 'react-native';

interface SwiperWrapperProps {
    data: any[];
    renderItem: (item: any) => React.ReactNode;
    height?: number;
    style?: any;
}

const SwiperWrapper = ({
    data,
    renderItem,
    height = 210,
    style
}: SwiperWrapperProps) => {
    const width = Dimensions.get('window').width * 0.9;

    return (
        <View style={[styles.container, style]}>
            <Swiper
                style={[styles.wrapper, { height }]}
                showsButtons={false}
                showsPagination={true}
                removeClippedSubviews={false}
                dotStyle={styles.dot}
                activeDotStyle={styles.activeDot}
                paginationStyle={styles.pagination}
            >
                {data.map((item, index) => (
                    <View key={index} style={{ width, height }}>
                        {renderItem(item)}
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 15, // Espacio vertical entre swipers
    },
    wrapper: {
        borderRadius: 25,
        overflow: 'hidden',
    },
    dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    activeDot: {
        backgroundColor: '#007AFF',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    pagination: {
        bottom: 10,
    },
});

export default React.memo(SwiperWrapper);