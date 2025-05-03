import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/customHeader';
import { profileImage, infoCovid } from '../../assets';
import ModalCards from '../../components/modals/modalCards';
import styles from './styles';
import { translate } from '../../lang';
import { informationHome, informationCovid } from '../../mock/modalCard';
import CardInfo from '../../components/modals/cardInfo';
import DrawerHome from "../../components/DrawerHome";

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
      <DrawerHome
        isDrawerVisible={isDrawerVisible}
        toggleDrawer={toggleDrawer}
      />


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