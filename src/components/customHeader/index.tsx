import React from "react";
import { Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../theme/colors';
import { translate } from '../../lang';
import Routes from '../../navigation/routes';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { CustomHeaderProps } from "../../types/auth";


const CustomHeader = (props: CustomHeaderProps) => {
  const { title, titleBack, onBackPress, imageProfile, gradientColors } = props;
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={
        gradientColors || [
          colors.primary[500],
          colors.primary[400],
          colors.primary[300],
        ]
      }
      style={styles.container}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress}>
          <Text style={styles.backButton}>
            {titleBack || translate('back')}
          </Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {imageProfile && (
        <TouchableOpacity onPress={() => navigation.navigate(Routes.PROFILE)}>
          <Image
            source={
              typeof imageProfile === 'string'
                ? { uri: imageProfile }
                : imageProfile
            }
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
};

export default CustomHeader;