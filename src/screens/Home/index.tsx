import React from "react";
import {View, Text, ScrollView} from 'react-native';
import CustomHeader from '../../components/customHeader';
import {profileImage, infoCovid} from '../../assets';
import ModalCards from '../../components/modals/modalCards';
import styles from './styles';
import {translate} from '../../lang';
import {informationHome, informationCovid} from '../../mock/modalCard';
import CardInfo from '../../components/modals/cardInfo';

const HomeScreen = () => {
  return (
    <>
      <CustomHeader imageProfile={profileImage} title="Hola, Victor Aponte" />
      <ScrollView showsVerticalScrollIndicator={false}>
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