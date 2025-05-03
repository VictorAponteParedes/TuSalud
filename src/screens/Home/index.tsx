import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/customHeader';
import { profileImage, infoCovid } from '../../assets';
import ModalCards from '../../components/modals/modalCards';
import styles from './styles';
import { translate } from '../../lang';
import { informationHome, informationCovid } from '../../mock/modalCard';
import CardInfo from '../../components/modals/cardInfo';
import DrawerModal from "../../components/DrawerModal";

const HomeScreen = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  return (
    <>
      <CustomHeader
        imageProfile={profileImage}
        title={translate('profile.name')}
        showMenu={true}
        onMenuPress={toggleDrawer}
      />
      <DrawerModal
        isVisible={isDrawerVisible}
        onClose={toggleDrawer}
      >
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Configuración</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </DrawerModal>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>{translate('newServices')}</Text>

          <View style={styles.cardsContainer}>
            {informationHome.map((item, index) => (
              <ModalCards
                key={index}
                imagenItem={item.image}
                title={item.title}
                subtitle={item.description}
              />
            ))}
            <Text style={styles.title}>{translate('informationCovid')}</Text>
            {informationCovid.map((item, index) => (
              <CardInfo
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;