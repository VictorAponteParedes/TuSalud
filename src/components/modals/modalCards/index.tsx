import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from './styles';
import { ModalCardsProps } from "../../../types/modals";
import colors from '../../../theme/colors';
import { fontsOpenSans } from '../../../types/fonts';

const ModalCards = (props: ModalCardsProps) => {
  const { imagenItem, title, subtitle, onPress } = props;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Parte superior - Imagen */}
      <View style={styles.imageContainer}>
        <Image
          source={typeof imagenItem === 'string' ? { uri: imagenItem } : imagenItem}
          style={styles.image}
        />
      </View>

      {/* Parte inferior - Contenido */}
      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.subtitle} numberOfLines={3}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModalCards;