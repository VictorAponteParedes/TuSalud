import React, { useState, useEffect, useMemo } from "react";
import { View, Text, ScrollView } from 'react-native';
import CustomHeader from '../../components/customHeader';
import { profileImage } from '../../assets';
import ModalCards from '../../components/modals/modalCards';
import styles from './styles';
import { translate } from '../../lang';
import { informationHome, informationCovid } from '../../mock/modalCard';
import CardInfo from '../../components/modals/cardInfo';
import DrawerHome from "../../components/DrawerHome";
import { useAuth } from "../../context/AuthContext";
import AuthServices from "../../services/auth";

const HomeScreen = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const { user } = useAuth();
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null);
  const authServices = useMemo(() => new AuthServices(), []);
  const [loadingImage, setLoadingImage] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const userName = user
    ? `${user.firstName} ${user.lastName}`
    : translate('profile.name');

  useEffect(() => {
    if (user?.id) {
      setLoadingImage(true);
      authServices.getProfileImage(user.id)
        .then(url => {
          if (url) {
            setProfileImageUrl(fixUrl(url));
          } else {
            setProfileImageUrl(null);
          }
        })
        .finally(() => setLoadingImage(false));
    }
  }, [user?.id, authServices]);

  const LOCAL_IP = '192.168.0.101';

  const fixUrl = (url: string) => {
    return url.replace('localhost', LOCAL_IP);
  };

  return (
    <>
      <CustomHeader
        imageProfile={profileImageUrl || profileImage}
        title={userName}
        showMenu={true}
        onMenuPress={toggleDrawer}
        userId={user?.id}
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