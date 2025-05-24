import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { fontsOpenSans } from '../../../types/fonts';

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
          source={typeof image === 'string' ? { uri: image } : image}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.description} numberOfLines={3}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '98%',
    height: 200,
    borderRadius: 12, // Bordes ligeramente menos redondeados
    backgroundColor: '#fff',
    overflow: 'hidden',
    // Sombra para Android
    elevation: 3,
    // Sombra para iOS - más sutil y definida
    shadowColor: colors.grayDark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15, // Más transparente
    shadowRadius: 4, // Menos difuminada
    marginBottom: 16,
    borderWidth: 0.5, // Opcional: borde sutil
    borderColor: colors.grayLight,
  },
  image: {
    width: '100%',
    height: '50%',
  },
  content: {
    padding: 16,
    justifyContent: 'center',
    height: '50%',
  },
  title: {
    fontSize: 16,
    fontFamily: fontsOpenSans.regular,
    marginBottom: 6,
    color: colors.black,
  },
  description: {
    fontSize: 14,
    color: colors.grayDark,
    fontFamily: fontsOpenSans.regular,
    lineHeight: 20,
  },
});

export default CardInfo;