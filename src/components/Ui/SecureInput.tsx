// src/components/ui/SecureInput.tsx
import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Input from './Input';
import SvgWrapper from '../SvgWrapper';
import colors from '../../theme/colors';
import { EyesOpen, EyesClose } from '../../helpers';

const SecureInput = (props: any) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Input
                {...props}
                secureTextEntry={!showPassword}
            />
            <TouchableOpacity
                style={styles.eyeIconContainer}
                onPress={() => setShowPassword(!showPassword)}
            >
                <SvgWrapper color={colors.primary[400]} size={25}>
                    {showPassword ? <EyesClose /> : <EyesOpen />}
                </SvgWrapper>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    eyeIconContainer: {
        position: 'absolute',
        right: 12,
        top: '42%',
    },
});

export default SecureInput;