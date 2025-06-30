import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import CustomHeader from '../../components/customHeader';
import styles from './styles';
import { translate } from '../../lang';
import CardInfo from '../../components/modals/cardInfo';
import DrawerHome from '../../components/DrawerHome';
import { useAuth } from '../../context/AuthContext';
import useShowPerfilImgen from '../../hooks/useShowPerfilImgen';
import SwiperWrapper from "../../components/SwiperWrapper";
import { useInformationCards } from "../../hooks/useInformationCards";

const HomeScreen = () => {
  const { user } = useAuth();
  const { profileImageUri } = useShowPerfilImgen();
  const { cards, refresh } = useInformationCards();

  const userName = user
    ? `${user.firstName} ${user.lastName}`
    : translate('profile.name');

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  }, [refresh]);

  return (
    <>
      <CustomHeader
        imageProfile={profileImageUri}
        title={userName}
        showMenu={true}
        onMenuPress={toggleDrawer}
        userId={user?.id}
      />
      <DrawerHome isVisible={isDrawerOpen} onClose={closeDrawer} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <Text style={styles.title}>{translate('newServices')}</Text>
          <SwiperWrapper
            data={cards}
            renderItem={(item) => (
              <CardInfo key={item.id} card={item} />
            )}
          />
          <Text style={styles.title}>Informacion global</Text>
          <SwiperWrapper
            data={cards}
            renderItem={(item) => (
              <CardInfo key={item.id} card={item} />
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;