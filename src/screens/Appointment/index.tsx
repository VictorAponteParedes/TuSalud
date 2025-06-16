import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { translate } from "../../lang";
import styles from "./styles";
import CustomHeader from "../../components/customHeader";
import useSpecialty from "../../hooks/useSpecialty";
import type { SpecialtiesType } from "../../types/specialties";
import type { DoctorFormData } from "../../types/doctors";
import { useAppointment } from "../../hooks/useAppointment";
import Toast from "react-native-toast-message";
import Input from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import { AppointmentFormData } from "../../types/appointment";
import { StatusAppointment } from "../../enum/statusAppointment";
import { useAuth } from "../../context/AuthContext";
import DateInput from "../../components/ui/DateInput";
import SpecialtyModal from "../../components/SpecialtyModal";
import DoctorCard from "../../components/DoctorCard";
import { getAvailableDaysText, isDateAllowed } from "../../helpers/appointmentHelpers";

const Appointment = () => {
  const navigation = useNavigation();
  const { specialties } = useSpecialty();
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const [selectedScheduleId, setSelectedScheduleId] = useState<string | null>(null);
  const { createAppointment } = useAppointment()
  const { user } = useAuth();
  const { control, handleSubmit } = useForm({


    defaultValues: {
      reason: "",
      notes: "",
      appointmentDate: ""
    }
  })

  const selectedSpecialty: SpecialtiesType | undefined = specialties.find(
    (s) => s.id === selectedSpecialtyId
  );

  const handleSelectSpecialty = (id: string) => {
    setSelectedSpecialtyId(id);
    setSelectedDoctorId(null);
    setSelectedScheduleId(null);
    setModalVisible(false);
  };

  const selectedDoctor = selectedSpecialty?.doctors.find(doc => doc.id === selectedDoctorId);
  const availableDays = selectedDoctor?.schedules?.map(s => s.day.toLowerCase()) || [];

  const onSubmit = async (formValues: AppointmentFormData): Promise<void> => {
    if (!selectedDoctorId || !selectedScheduleId) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Selecciona un doctor y un horario",
      });
      return;
    }

    const doctor = selectedSpecialty?.doctors?.find(doc => doc.id === selectedDoctorId);


    const appointmentData: AppointmentFormData = {
      ...formValues,
      id: "",
      patientId: user.id,
      doctorId: selectedDoctorId,
      scheduleId: selectedScheduleId,
      appointmentTime: doctor?.schedules?.find(s => s.id === selectedScheduleId)?.startTime || "",
      status: StatusAppointment.PENDING,
      patient: user,
      doctor: doctor || {} as DoctorFormData
    };
    console.log("Datos de la cita:", appointmentData);

    try {
      await createAppointment(appointmentData);
      Toast.show({
        type: "success",
        text1: "Cita creada correctamente",
      });
      navigation.goBack();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error al crear cita",
        text2: "Verifica los datos o intenta más tarde",
      });
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

        <SpecialtyModal
          visible={modalVisible}
          specialties={specialties}
          onClose={() => setModalVisible(false)}
          onSelect={handleSelectSpecialty}
        />

        <ScrollView>
          {selectedSpecialty && selectedSpecialty.doctors?.length > 0 ? (
            <View style={styles.doctorsContainer}>
              <Text style={styles.label}>{translate("doctors.title")}</Text>

              {selectedSpecialty.doctors.map((doctor: DoctorFormData) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  isSelected={selectedDoctorId === doctor.id}
                  onPress={() => {
                    setSelectedDoctorId(doctor.id);
                    setSelectedScheduleId(null);
                  }}
                  onScheduleSelect={setSelectedScheduleId}
                  selectedScheduleId={selectedScheduleId}
                  translate={translate}
                />
              ))}
            </View>
          ) : selectedSpecialty && (
            <View style={styles.emptyDoctorsContainer}>
              <Text style={styles.emptyDoctorsText}>
                No hay doctores disponibles para esta especialidad.
              </Text>
            </View>
          )}

          <DateInput
            control={control}
            name="appointmentDate"
            label="Fecha de la cita"
            placeholder="Selecciona una fecha"
            minimumDate={new Date()}
            isDateAllowed={(date) => isDateAllowed(date, availableDays)}
          />

          {selectedDoctor && (
            <Text style={styles.availableDaysText}>
              {getAvailableDaysText(selectedDoctor)}
            </Text>
          )}

          <Input
            control={control}
            name="reason"
            placeholder="Motivo"
            label="Motivo de la consulta"
          />

          <TouchableOpacity
            style={styles.createAppointmentButton}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.createAppointmentText}>Crear cita</Text>
          </TouchableOpacity>
        </ScrollView>

      </View>
    </>
  );
};

export default Appointment;
