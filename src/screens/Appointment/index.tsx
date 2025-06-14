import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { translate } from "../../lang";
import styles from "./styles";
import CustomHeader from "../../components/customHeader";
import useSpecialty from "../../hooks/useSpecialty";
import type { SpecialtiesType } from "../../types/specialties";
import type { DoctorFormData } from "../../types/doctors";
import SvgWrapper from "../../components/SvgWrapper";
import { Close } from "../../helpers";
import colors from "../../theme/colors";
import { API_BASE_URL } from "../../constants";

const Appointment = () => {
  const navigation = useNavigation();
  const { specialties } = useSpecialty();
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const [selectedScheduleId, setSelectedScheduleId] = useState<string | null>(null);

  const selectedSpecialty: SpecialtiesType | undefined = specialties.find(
    (s) => s.id === selectedSpecialtyId
  );

  const handleSelectSpecialty = (id: string) => {
    setSelectedSpecialtyId(id);
    setSelectedDoctorId(null);
    setSelectedScheduleId(null);
    setModalVisible(false);
  };

  const handleCreateAppointment = () => {
    if (selectedDoctorId && selectedScheduleId) {
      // lógica para crear cita
      alert("Cita creada correctamente");
    } else {
      alert("Selecciona un doctor y un horario");
    }
  };

  return (
    <>
      <CustomHeader
        titleBack={translate("backToLogin")}
        onBackPress={navigation.goBack}
        iconBack={true}
      />

      <View style={styles.container}>
        <Text style={styles.label}>{translate("speciality.title")}</Text>

        <TouchableOpacity
          style={styles.selectButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.selectButtonText}>
            {selectedSpecialty
              ? selectedSpecialty.name
              : translate("input.placeholder")}
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>
                  {translate("modal.title")}
                </Text>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => setModalVisible(false)}
                >
                  <SvgWrapper color={colors.white} size={24}>
                    <Close />
                  </SvgWrapper>
                </TouchableOpacity>
              </View>

              <FlatList
                data={specialties}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalItem}
                    onPress={() => handleSelectSpecialty(item.id)}
                  >
                    <Text style={styles.modalItemText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Modal>

        <ScrollView>
          {selectedSpecialty && selectedSpecialty.doctors?.length > 0 ? (
            <View style={styles.doctorsContainer}>
              <Text style={styles.label}>{translate("doctors.title")}</Text>

              {selectedSpecialty.doctors.map((doctor: DoctorFormData) => {
                const isSelected = selectedDoctorId === doctor.id;

                return (
                  <TouchableOpacity
                    key={doctor.id}
                    style={[
                      styles.doctorCard,
                      isSelected && styles.selectedDoctorCard,
                    ]}
                    onPress={() => {
                      setSelectedDoctorId(doctor.id);
                      setSelectedScheduleId(null);
                    }}
                  >
                    <View style={styles.imageRow}>
                      {doctor.profileImage?.path && (
                        <Image
                          source={{ uri: `${API_BASE_URL}/${doctor.profileImage.path}` }}
                          style={styles.doctorImage}
                          resizeMode="cover"
                        />
                      )}
                      <View style={styles.doctorInfo}>
                        <Text style={styles.doctorName}>
                          {doctor.firstName} {doctor.lastName}
                        </Text>
                        <Text>{doctor.description}</Text>
                        <Text>
                          ⭐ {doctor.rating} ({doctor.reviews} {translate("reviews")})
                        </Text>
                        <Text>
                          {translate("doctors.status")}:{" "}
                          {doctor.status === "available"
                            ? translate("doctors.available")
                            : translate("doctors.unavailable")}
                        </Text>
                      </View>
                    </View>


                    {doctor.schedules?.length > 0 &&
                      selectedDoctorId === doctor.id && (
                        <View style={styles.scheduleContainer}>
                          <Text style={styles.scheduleTitle}>
                            {translate("availableSchedules")}
                          </Text>
                          {doctor.schedules.map((schedule) => {
                            const isSelected = selectedScheduleId === schedule.id;
                            return (
                              <TouchableOpacity
                                key={schedule.id}
                                onPress={() => setSelectedScheduleId(schedule.id)}
                                style={[
                                  styles.scheduleItemBox,
                                  isSelected && styles.selectedScheduleItem,
                                ]}
                              >
                                <Text style={styles.scheduleDay}>
                                  {translate(`days.${schedule.day}`)}{" "}
                                  <Text style={styles.scheduleTime}>
                                    {schedule.startTime} - {schedule.endTime}
                                  </Text>
                                </Text>
                              </TouchableOpacity>
                            );
                          })}
                        </View>
                      )}
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : selectedSpecialty && (
            <View style={styles.emptyDoctorsContainer}>
              <Text style={styles.emptyDoctorsText}>
                No hay doctores disponibles para esta especialidad.
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.createAppointmentButton}
            onPress={handleCreateAppointment}
          >
            <Text style={styles.createAppointmentText}>Crear cita</Text>
          </TouchableOpacity>
        </ScrollView>

      </View>
    </>
  );
};

export default Appointment;
