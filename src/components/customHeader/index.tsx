import React from "react";
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../../theme/colors';
import { translate } from '../../lang';
import Routes from '../../navigation/routes';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { CustomHeaderProps } from "../../types/auth";
import BackIcon from '../../assets/svg/backIcon.svg';
import MenuIcon from '../../assets/svg/drawerCustom.svg';
import SvgWrapper from "../SvgWrapper";
import { Profile } from "../../helpers";

const CustomHeader = (props: CustomHeaderProps) => {
  const {
    title,
    titleBack,
    onBackPress,
    imageProfile,
    gradientColors,
    iconBack,
    onMenuPress,
    showMenu = false
  } = props;
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={
        gradientColors || [
          colors.primary[500],
          colors.primary[400],
          colors.primary[300],
          colors.primary[200],
        ]
      }
      style={styles.container}>
      <View style={styles.leftContainer}>
        {showMenu && !onBackPress && (
          <TouchableOpacity onPress={onMenuPress}>
            <MenuIcon width={24} height={24} fill="white" />
          </TouchableOpacity>
        )}

        {onBackPress && (
          <TouchableOpacity
            onPress={onBackPress}
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            {iconBack && <BackIcon width={24} height={24} fill="white" />}
            <Text style={styles.backButton}>
              {titleBack || translate('back')}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      {imageProfile ? (
        <TouchableOpacity onPress={() => navigation.navigate(Routes.PROFILE)}>
          <Image
            source={
              typeof imageProfile === 'string'
                ? { uri: imageProfile }
                : imageProfile
            }
            style={{ width: 40, height: 40, borderRadius: 20, borderColor: colors.white, borderWidth: 2 }}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate(Routes.PROFILE)}>
          <SvgWrapper color={colors.white} size={30}>
            <Profile />
          </SvgWrapper>
        </TouchableOpacity>

      )}
    </LinearGradient>
  );
};

export default CustomHeader;