import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { translate } from '../../lang';
import { useAuth } from "../../context/AuthContext";
import styles from './styles';
import SvgWrapper from "../../components/SvgWrapper";
import DrawerModal from "../DrawerModal";
import colors from "../../theme/colors";

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
    const { logout } = useAuth();
    return (
        <DrawerModal
            isVisible={isDrawerVisible}
            onClose={toggleDrawer}
        >
            <View style={styles.menuContainer}>
                {/* Contenido principal del menú */}
                <View style={styles.mainMenu}>
                    <TouchableOpacity style={styles.menuItem}>
                        <SvgWrapper color={colors.primary[400]} size={24}>
                            <Home />
                        </SvgWrapper>
                        <Text style={styles.menuText}>Inicio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <SvgWrapper color={colors.primary[400]} size={24}>
                            <Profile />
                        </SvgWrapper>
                        <Text style={styles.menuText}>Perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <SvgWrapper color={colors.primary[400]} size={24}>
                            <Calendar />
                        </SvgWrapper>
                        <Text style={styles.menuText}>Agendar citas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <SvgWrapper color={colors.primary[400]} size={24}>
                            <Notifications />
                        </SvgWrapper>
                        <Text style={styles.menuText}>Notificaciones</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <SvgWrapper color={colors.primary[400]} size={24}>
                            <Setting />
                        </SvgWrapper>
                        <Text style={styles.menuText}>Configuración</Text>
                    </TouchableOpacity>
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