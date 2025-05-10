import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import CustomHeader from "../../components/customHeader";
import { useNavigation } from "@react-navigation/native";
import { specialities } from "../../mock/speciality";
import colors from "../../theme/colors";
import { translate } from "../../lang";
import SvgWrapper from "../../components/SvgWrapper";
import styles from "./styles";
import { Close } from "../../helpers";
import DoctorCard from "../../components/DoctorCard";
import { doctors } from "../../mock/doctors";

const Quotes = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSelect = (speciality) => {
    setSelectedSpeciality(speciality);
    setModalVisible(false);
    // Filtrar doctores por especialidad seleccionada
    const filtered = doctors.filter(doctor =>
      doctor.speciality.toLowerCase().includes(speciality.name.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  const renderIcon = (speciality) => {
    if (typeof speciality.imageUrl === 'function') {
      const SvgComponent = speciality.imageUrl;
      return (
        <SvgWrapper color={colors.primary[400]} size={34}>
          <SvgComponent />
        </SvgWrapper>
      );
    }
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


        <FlatList
          data={filteredDoctors}
          renderItem={({ item }) => <DoctorCard doctor={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />

        {/* Modal de selección de especialidad */}
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