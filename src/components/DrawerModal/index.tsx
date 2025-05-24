import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../theme/colors';
import { CloseCirucule } from '../../helpers';
import SvgWrapper from '../SvgWrapper';
import styles from './styles';

interface DrawerModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const DrawerModal = ({ isVisible, onClose, children }: DrawerModalProps) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            backdropTransitionInTiming={300}
            backdropTransitionOutTiming={300}
            backdropOpacity={0.5}
            style={styles.modal}
            useNativeDriver={true}
            hideModalContentWhileAnimating={true}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <SvgWrapper color={colors.white} size={24}>
                            <CloseCirucule />
                        </SvgWrapper>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    {children}
                </View>
            </View>
        </Modal>
    );
};


export default DrawerModal;