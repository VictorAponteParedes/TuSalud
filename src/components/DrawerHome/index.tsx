import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { translate } from '../../lang';
import Routes from "../../navigation/routes";
import { useAuth } from "../../context/AuthContext";
import styles from './styles';
import SvgWrapper from "../../components/SvgWrapper";
import DrawerModal from "../DrawerModal";
import colors from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";

import Home from "../../assets/svg/home.svg";
import Profile from "../../assets/svg/profile.svg";
import Calendar from "../../assets/svg/calendar.svg";
import Setting from "../../assets/svg/settings.svg";
import Logout from "../../assets/svg/logout.svg";
import Notifications from "../../assets/svg/notifications.svg";

type DrawerHomeProps = {
    isDrawerVisible: boolean;
    toggleDrawer: () => void;
}


const DrawerHome = (props: DrawerHomeProps) => {
    const { isDrawerVisible, toggleDrawer } = props;
    const navigation = useNavigation();
    const { logout } = useAuth();

    const menuOptions = [
        { label: 'Inicio', icon: <Home />, route: Routes.HOME },
        { label: 'Perfil', icon: <Profile />, route: Routes.PROFILE },
        { label: 'Agendar citas', icon: <Calendar />, route: Routes.QUOTES },
        { label: 'Notificaciones', icon: <Notifications />, route: Routes.NOTIFICATIONS },
        { label: 'Configuración', icon: <Setting />, route: Routes.SETTINGS },
    ];




    return (
        <DrawerModal
            isVisible={!isDrawerVisible}
            onClose={toggleDrawer}
        >
            <View style={styles.menuContainer}>
                {/* Contenido principal del menú */}
                <View style={styles.mainMenu}>
                    {menuOptions.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.menuItem}
                            onPress={() => navigation.navigate(item.route)}
                        >
                            <SvgWrapper color={colors.primary[400]} size={24}>
                                {item.icon}
                            </SvgWrapper>
                            <Text style={styles.menuText}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}

                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <SvgWrapper color={colors.error} size={24}>
                        <Logout />
                    </SvgWrapper>
                    <Text style={styles.closeSession}>Cerrar Sesión</Text>
                </TouchableOpacity>
            </View>
        </DrawerModal>
    )
}
export default DrawerHome;