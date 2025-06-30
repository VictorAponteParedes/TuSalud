import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { InformationCardFormData } from "../../../types/InformationCardFormData";
import InformationCardService from "../../../services/informationCard";

interface Props {
  card: InformationCardFormData;
}

const CardInfo = ({ card }: Props) => {
  const navigation = useNavigation();
  const informationService = new InformationCardService();

  const imageUrl = card
    ? informationService.returnUrlImage(card)
    : "/default-avatar.png";

  const handlePress = () => {
    if (card.onPress) {
      card.onPress();
    } else if (card.screen) {
      navigation.navigate(card.screen as never, card.params); // Navegación estándar
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={card.screen || card.onPress ? 0.7 : 1} // Solo efecto si es clickeable
      style={styles.card}
    >
      {imageUrl && (
        <Image
          source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{card.title}</Text>
        <Text style={styles.description} numberOfLines={3}>{card.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardInfo;