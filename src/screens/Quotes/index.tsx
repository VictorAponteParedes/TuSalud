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
import { Close } from "../../helpers";
import styles from "./styles";

const Quotes = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);

  const handleSelect = (speciality: any) => {
    setSelectedSpeciality(speciality);
    setModalVisible(false);
  };

  return (
    <>
      <CustomHeader
        titleBack={translate('backToLogin')}
        onBackPress={navigation.goBack}
        iconBack={true}
      />
      <View style={styles.container}>
        <Text style={styles.label}>Especialidad</Text>

        <TouchableOpacity
          style={styles.input}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.inputText}>
            {selectedSpeciality ? selectedSpeciality.name : "Seleccionar especialidad"}
          </Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Selecciona una especialidad</Text>
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
                    <Image source={{ uri: s.imageUrl }} style={styles.icon} />
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
