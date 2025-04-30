import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import {fontsOpenSans} from '../../types/fonts';

type SpecialityProps = {
  name: string;
  description?: string;
  imageUrl: string | number;
};

const { width } = Dimensions.get('window');

const Speciality = (props: SpecialityProps) => {
  const { name, description, imageUrl } = props;

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.28,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 70,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: 13,
    fontFamily: fontsOpenSans.regular,
    textAlign: 'center',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default Speciality;