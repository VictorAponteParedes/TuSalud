import React from "react";
import { View, Text, Image } from "react-native";
import styles from './styles';
import { ModalCardsProps } from "../../../types/modals";

const ModalCards = (props: ModalCardsProps) => {
  const {imagenItem, title, subTitile} = props;

  return (
    <View style={styles.card}>
      <Image
        source={typeof imagenItem === 'string' ? {uri: imagenItem} : imagenItem}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subTitile}</Text>
    </View>
  );
};

export default ModalCards;