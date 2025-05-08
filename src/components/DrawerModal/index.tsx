import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../theme/colors';
import {CloseCirucule} from '../../helpers';
import SvgWrapper from '../SvgWrapper';
import styles from './styles';
import { DrawerModalProps } from '../../types/modals';



const DrawerModal = (props: DrawerModalProps) => {
    const { isVisible, onClose, children } = props;
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
            backdropOpacity={0.5}
            style={styles.modal}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={onClose}>
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