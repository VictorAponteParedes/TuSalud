import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import CustomHeader from '../../components/customHeader';
import {profileImage, itemMedicine} from '../../assets';
import ModalCards from '../../components/modals/modalCards';
import styles from './styles';
import {translate} from '../../lang';

const HomeScreen = () => {
  const {logout} = useAuth();

  return (
    <>
      <CustomHeader imageProfile={profileImage} title="Home" />
      <View style={styles.container}>
        <Text style={styles.title}>{translate('newServices')}</Text>

        <View style={styles.cardsContainer}>
          <ModalCards
            imagenItem={itemMedicine}
            title={translate('Citas')}
            subTitile={translate('appontment')}
          />
          <ModalCards
            imagenItem={itemMedicine}
            title={translate('Citas')}
            subTitile={translate('appontment')}
          />
          <ModalCards
            imagenItem={itemMedicine}
            title={translate('Citas')}
            subTitile={translate('appontment')}
          />
          <ModalCards
            imagenItem={itemMedicine}
            title={translate('Citas')}
            subTitile={translate('appontment')}
          />
        </View>

        <TouchableOpacity onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;