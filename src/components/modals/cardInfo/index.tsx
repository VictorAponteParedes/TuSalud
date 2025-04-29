import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../../../theme/colors";

type CardInfoProps = {
  image?: string;
  title?: string;
  description?: string;
};

const CardInfo = ({ image, title, description }: CardInfoProps) => {
  return (
    <View style={styles.card}>
      {image && (
        <Image
        source={
            typeof image === 'string'
              ? {uri: image}
              : image
          }
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 4, // sombra en Android
    shadowColor: '#000', // sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '50%',
  },
  content: {
    padding: 12,
    justifyContent: 'center',
    // alignItems: 'center',
    height: '50%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color:colors.black
  },
  description: {
    fontSize: 14,
    color: colors.grayDark,

  },
});
