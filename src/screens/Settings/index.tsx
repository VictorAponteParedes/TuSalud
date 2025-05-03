import React from "react";

import { View, Text, TouchableOpacity } from 'react-native';
import { translate } from '../../lang';


const SettingScreen = () => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{translate('Settings')}</Text>
            <TouchableOpacity onPress={() => console.log('Change settings')}>
                <Text>{translate('Click here to change settings')}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SettingScreen;