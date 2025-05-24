import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

type CardInfoProps = {
  image?: string | number; // Añadido number para require(local images)
  title?: string;
  description?: string;
  screen?: string;
  params?: object; // Para parámetros de navegación
  onPress?: () => void; // Opcional: manejo alternativo
};

const CardInfo = ({
  image,
  title,
  description,
  screen,
  params,
  onPress
}: CardInfoProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress(); // Si hay manejador personalizado
    } else if (screen) {
      navigation.navigate(screen as never, params); // Navegación estándar
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={screen || onPress ? 0.7 : 1} // Solo efecto si es clickeable
      style={styles.card}
    >
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
    </TouchableOpacity>
  );
};

export default CardInfo;