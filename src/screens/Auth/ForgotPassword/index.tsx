import React from 'react';
import ForgotPasswordForm from '../../../components/Auth/ForgotPassword';
import styles from './styles';
import { View } from 'react-native';
import CustomHeader from '../../../components/customHeader';
import { useNavigation } from '@react-navigation/native';
import { translate } from '../../../lang';
const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <CustomHeader
                onBackPress={navigation.goBack}
                iconBack={true}
                titleBack={translate('backToLogin')}
            />
            <View style={styles.container}>
                <ForgotPasswordForm />
            </View>
        </>
    );
};

export default ForgotPasswordScreen;
