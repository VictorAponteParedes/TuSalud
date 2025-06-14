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

const Appointment = () => {
  const navigation = useNavigation();
  const { specialties, isLoading, error } = useSpecialty();
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string | null>(null);

  const selectedSpecialty: SpecialtiesType | undefined = specialties.find(
    (s) => s.id === selectedSpecialtyId
  );

  return (
    <>
      <CustomHeader
        titleBack={translate("backToLogin")}
        onBackPress={navigation.goBack}
        iconBack={true}
      />

      <View style={styles.container}>
        <Text style={styles.label}>{translate("speciality.title")}</Text>

        <ScrollView>
          {specialties.map((specialty) => (
            <TouchableOpacity
              key={specialty.id}
              style={styles.specialtyButton}
              onPress={() => setSelectedSpecialtyId(specialty.id)}
            >
              <Text style={styles.specialtyButtonText}>{specialty.name}</Text>
            </TouchableOpacity>
          ))}

          {selectedSpecialty && selectedSpecialty.doctors?.length > 0 && (
            <View style={styles.doctorsContainer}>
              <Text style={styles.label}>{translate("doctors.title")}</Text>
              {selectedSpecialty.doctors.map((doctor: DoctorFormData) => (
                <View key={doctor.id} style={styles.doctorCard}>
                  <Text style={styles.doctorName}>
                    {doctor.firstName} {doctor.lastName}
                  </Text>
                  <Text>{doctor.experience}</Text>
                  <Text>{doctor.description}</Text>
                  <Text>
                    ⭐ {doctor.rating} ({doctor.reviews} {translate("reviews")})
                  </Text>
                  <Text>
                    {translate("status")}:{" "}
                    {doctor.status === "available"
                      ? translate("available")
                      : translate("unavailable")}
                  </Text>

                  {doctor.schedules && doctor.schedules.length > 0 && (
                    <View style={styles.scheduleContainer}>
                      <Text style={styles.scheduleTitle}>
                        {translate("availableSchedules")}
                      </Text>
                      {doctor.schedules.map((schedule) => (
                        <View key={schedule.id} style={styles.scheduleItem}>
                          <Text style={styles.scheduleDay}>
                            📅 {translate(`days.${schedule.day}`)}
                          </Text>
                          <Text style={styles.scheduleTime}>
                            🕒 {schedule.startTime} - {schedule.endTime}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}

        </ScrollView>
      </View>
    </>
  );
};

export default Appointment;
