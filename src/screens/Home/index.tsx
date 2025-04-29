import React from "react";
import {View, Text} from 'react-native';
import CustomHeader from '../../components/customHeader';
import {profileImage} from '../../assets';
import ModalCards from '../../components/modals/modalCards';
import styles from './styles';
import {translate} from '../../lang';
import {informationHome} from '../../mock/modalCard';

const HomeScreen = () => {
  return (
    <>
      <CustomHeader imageProfile={profileImage} title="Home" />
      <View style={styles.container}>
        <Text style={styles.title}>{translate('newServices')}</Text>

        <View style={styles.cardsContainer}>
          {informationHome.map((item, index) => (
            <ModalCards
              key={index}
              imagenItem={item.image}
              title={item.title}
              subTitile={item.description}
            />
          ))}
          <Text style={styles.title}>{translate('informationCovid')}</Text>
        </View>
      </View>
    </>
  );
};

export default HomeScreen;