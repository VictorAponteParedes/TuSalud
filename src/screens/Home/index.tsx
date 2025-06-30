import React, { useState } from "react";
import { View, Text, ScrollView } from 'react-native';
import CustomHeader from '../../components/customHeader';
import styles from './styles';
import { translate } from '../../lang';
import { informationHome, informationCovid } from '../../mock/modalCard';
import CardInfo from '../../components/modals/cardInfo';
import DrawerHome from '../../components/DrawerHome';
import { useAuth } from '../../context/AuthContext';
import useShowPerfilImgen from '../../hooks/useShowPerfilImgen';
import SwiperWrapper from "../../components/SwiperWrapper";
import { useInformationCards } from "../../hooks/useInformationCards";

const HomeScreen = () => {
  const { user } = useAuth();
  const { profileImageUri } = useShowPerfilImgen();
  const { cards } = useInformationCards();
  const userName = user
    ? `${user.firstName} ${user.lastName}`
    : translate('profile.name');

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <CustomHeader
        imageProfile={profileImageUri}
        title={userName}
        showMenu={true}
        onMenuPress={toggleDrawer}
        userId={user?.id}
      />
      <DrawerHome
        isVisible={isDrawerOpen}
        onClose={closeDrawer}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>{translate('newServices')}</Text>
          <SwiperWrapper
            data={cards}
            renderItem={(item) => (
              <CardInfo
                key={item.id}
                card={item}
              />
            )}
          />
          <Text style={styles.title}>Informacion global</Text>
          <SwiperWrapper
            data={cards}
            renderItem={(item) => (
              <CardInfo
                key={item.id}
                card={item}
              />
            )}
          />
        </View>
      </ScrollView >
    </>
  );
};

export default HomeScreen;