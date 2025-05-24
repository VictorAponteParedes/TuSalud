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

const HomeScreen = () => {
  const { user } = useAuth();
  const { profileImageUri } = useShowPerfilImgen();
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
            data={informationHome}
            renderItem={(item) => (
              <CardInfo
                title={item.title}
                description={item.description}
                image={item.image}
                screen={item.screen}
              />
            )}
          />
          <Text style={styles.title}>Informacion global</Text>
          <SwiperWrapper
            data={informationCovid}
            renderItem={(item) => (
              <CardInfo
                title={item.title}
                description={item.description}
                image={item.image}
              />
            )}
          />
        </View>
      </ScrollView >
    </>
  );
};

export default HomeScreen;