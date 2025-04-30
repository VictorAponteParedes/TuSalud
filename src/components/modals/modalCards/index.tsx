import React from "react";
import { View, Text, Image } from "react-native";
import styles from './styles';
import { ModalCardsProps } from "../../../types/modals";
import colors from '../../../theme/colors';
import {fontsOpenSans} from '../../../types/fonts';

const ModalCards = (props: ModalCardsProps) => {
  const {imagenItem, title, subtitle} = props;

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={
            typeof imagenItem === 'string' ? {uri: imagenItem} : imagenItem
          }
          style={styles.image}
        />
        {/* Capa superpuesta */}
        <View style={styles.overlay}>
          <Text
            style={{
              color: colors.white,
              fontSize: 18,
              fontFamily: fontsOpenSans.italic,
            }}>
            {title}
          </Text>
        </View>
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default ModalCards;