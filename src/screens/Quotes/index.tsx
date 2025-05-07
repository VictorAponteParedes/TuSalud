import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomHeader from "../../components/customHeader";
import { useNavigation } from "@react-navigation/native";
import { specialities } from "../../mock/speciality";
import colors from "../../theme/colors";
import { translate } from "../../lang";
import SvgWrapper from "../../components/SvgWrapper";
import styles from "./styles";
import { Close } from "../../helpers";

const Quotes = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);

  const handleSelect = (speciality) => {
    setSelectedSpeciality(speciality);
    setModalVisible(false);
  };

  const renderIcon = (speciality) => {
    // Si es un componente SVG (como Heart)
    if (typeof speciality.imageUrl === 'function') {
      const SvgComponent = speciality.imageUrl;
      return (
        <SvgWrapper color={colors.primary[400]} size={34}>
          <SvgComponent />
        </SvgWrapper>
      );
    }
    // Si es una imagen (require o URI)
    return (
      <Image
        source={typeof speciality.imageUrl === 'string' ?
          { uri: speciality.imageUrl } : speciality.imageUrl}
        style={styles.icon}
        resizeMode="contain"
      />
    );
  };

  return (
    <>
      <CustomHeader
        titleBack={translate('backToLogin')}
        onBackPress={navigation.goBack}
        iconBack={true}
      />
      <View style={styles.container}>
        <Text style={styles.label}>{translate('speciality.title')}</Text>

        <TouchableOpacity
          style={styles.input}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.inputText}>
            {selectedSpeciality ? selectedSpeciality.name : translate('input.placeholder')}
          </Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{translate('modal.title')}</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <SvgWrapper color={colors.primary[400]} size={24}>
                    <Close />
                  </SvgWrapper>
                </TouchableOpacity>
              </View>
              <ScrollView>
                {specialities.map((s) => (
                  <TouchableOpacity
                    key={s.id}
                    style={styles.modalItem}
                    onPress={() => handleSelect(s)}
                  >
                    {renderIcon(s)}
                    <Text style={styles.itemText}>{s.name}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Quotes;