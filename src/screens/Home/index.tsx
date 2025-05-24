import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions } from 'react-native';
import CustomHeader from '../../components/customHeader';
import ModalCards from '../../components/modals/modalCards';
import styles from './styles';
import { translate } from '../../lang';
import { informationHome, informationCovid } from '../../mock/modalCard';
import CardInfo from '../../components/modals/cardInfo';
import DrawerHome from '../../components/DrawerHome';
import { useAuth } from '../../context/AuthContext';
import useShowPerfilImgen from '../../hooks/useShowPerfilImgen';
import Carousel from 'react-native-reanimated-carousel';
import { profileImage } from "../../assets";

const HomeScreen = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const { user } = useAuth();
  const { profileImageUri } = useShowPerfilImgen();
  const screenWidth = Dimensions.get('window').width * 0.9;
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

            {/* <Carousel
              width={screenWidth}
              height={210}
              data={informationCovid}
              renderItem={({ item, index }) => (
                <CardInfo
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              )}
            /> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;