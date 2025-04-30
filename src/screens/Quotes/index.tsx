import React from "react";
import { View, StyleSheet, Dimensions, Text, ScrollView } from "react-native";
import CustomHeader from "../../components/customHeader";
import { translate } from "../../lang";
import { useNavigation } from "@react-navigation/native";
import Speciality from "../../components/speciality";
import { specialities } from "../../mock/speciality";
import Swiper from "react-native-swiper";
import colors from "../../theme/colors";
import sizeText from "../../theme/size";
import {fontsOpenSans} from '../../types/fonts';

const {width} = Dimensions.get('window');

const groupArray = (array, groupSize) => {
  const groups = [];
  for (let i = 0; i < array.length; i += groupSize) {
    groups.push(array.slice(i, i + groupSize));
  }
  return groups;
};

const Quotes = () => {
  const navigation = useNavigation();
  const groupedSpecialities = groupArray(specialities, 3);
  return (
    <>
      <CustomHeader
        titleBack={translate('backToLogin')}
        onBackPress={navigation.goBack}
        iconBack={true}
      />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>{translate('speciality.title')}</Text>
          <Swiper
            showsPagination={false}
            dotColor="#D3D3D3"
            activeDotColor="#6200ee"
            loop={true}
            autoplay={true}
            autoplayTimeout={6}
            showsButtons={false}>
            {groupedSpecialities.map((group, groupIndex) => (
              <View key={groupIndex} style={styles.slideGroup}>
                {group.map((item, index) => (
                  <View key={index} style={styles.specialityContainer}>
                    <Speciality
                      name={item.name}
                      description={item.description}
                      imageUrl={item.imageUrl}
                    />
                  </View>
                ))}
              </View>
            ))}
          </Swiper>
          <Text style={styles.title}>
            {translate('speciality.doctorsavailable')}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  slideGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  specialityContainer: {
    width: width / 3.5,
  },
  title: {
    color: colors.black,
    fontSize: sizeText.title.title,
    marginBottom: 20,
    fontFamily: fontsOpenSans.regular,
  },
});

export default Quotes;