import React from 'react';
import ResetPasswordForm from '../../../components/Auth/ResetPasswordForm';
import styles from './styles'
import { View } from 'react-native';
import CustomHeader from '../../../components/customHeader';
import { useNavigation } from '@react-navigation/native';
import { translate } from '../../../lang';
const ResetPasswordScreen = () => {
    const navigation = useNavigation();
    return (
        <>
            <CustomHeader
                onBackPress={navigation.goBack}
                iconBack={true}
                titleBack={translate('backToLogin')}
            />
            <View style={styles.container}>
                <ResetPasswordForm />
            </View>
        </>
    );
};

export default ResetPasswordScreen;
