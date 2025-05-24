import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import DrawerModal from '../DrawerModal';
import SvgWrapper from '../SvgWrapper';
import { Home, Profile, Calendar, Notifications, Setting, Logout } from '../../helpers';
import colors from '../../theme/colors';
import { translate } from '../../lang';
import styles from './styles';

interface DrawerHomeProps {
    isVisible: boolean;
    onClose: () => void;
}

const menuItems = [
    { icon: <Home />, label: 'drawer.home', route: 'HOME' },
    { icon: <Profile />, label: 'drawer.profile', route: 'PROFILE' },
    { icon: <Calendar />, label: 'drawer.schedule', route: 'QUOTES' },
    { icon: <Notifications />, label: 'drawer.notifications', route: 'NOTIFICATIONS' },
    { icon: <Setting />, label: 'drawer.settings', route: 'SETTINGS' },
];

const DrawerHome = ({ isVisible, onClose }: DrawerHomeProps) => {
    const navigation = useNavigation();
    const { logout } = useAuth();

    const handleNavigation = (route: string) => {
        navigation.navigate(route as never);
        onClose();
    };

    return (
        <DrawerModal isVisible={isVisible} onClose={onClose}>
            <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuItem}
                        onPress={() => handleNavigation(item.route)}
                    >
                        <SvgWrapper color={colors.primary[400]} size={24}>
                            {item.icon}
                        </SvgWrapper>
                        <Text style={styles.menuText}>{translate(item.label)}</Text>
                    </TouchableOpacity>
                ))}

                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={() => {
                        logout();
                        onClose();
                    }}
                >
                    <SvgWrapper color={colors.error} size={24}>
                        <Logout />
                    </SvgWrapper>
                    <Text style={styles.closeSession}>{translate('drawer.logout')}</Text>
                </TouchableOpacity>
            </View>
        </DrawerModal>
    );
};


export default DrawerHome;