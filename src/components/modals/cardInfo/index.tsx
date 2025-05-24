import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./styles";

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



export default CardInfo;