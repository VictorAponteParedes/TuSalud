import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import CustomHeader from '../../components/customHeader';
import { translate } from '../../lang';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import colors from "../../theme/colors";
import useShowPerfilImgen from "../../hooks/useShowPerfilImgen";
import { Edit } from "../../helpers";
import SvgWrapper from "../../components/SvgWrapper";
import styles from "./styles";
import DocumentCard from "../../components/CardInformacionPersonal/DocumentCard";
import { usePatient } from "../../hooks/usePatient";
import { useAppointment } from "../../hooks/useAppointment";
import { InfoPatientCardEnum } from "../../enum/infoPatientCardEnum";
import { TabType } from "../../types/patient";

//Cards Patient Information
import CardInformacionPersonal from "../../components/CardInformacionPersonal/personalInfo/personalInfo";
import AppointmentCard from '../../components/CardInformacionPersonal/appointment';
import MedicalHistoryCard from "../../components/CardInformacionPersonal/MedicalHistoryCard";




const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { loadingImage, logout, profileImageUri } = useShowPerfilImgen();
  const { patient } = usePatient(user?.id);

  const [activeTab, setActiveTab] = useState<TabType>(InfoPatientCardEnum.PERSONAL);
  const { appointment } = useAppointment(user?.id);

  return (
    <View style={styles.container}>
      <CustomHeader
        titleBack={translate('backToLogin')}
        onBackPress={navigation.goBack}
        iconBack={true}
      />

      <View style={styles.containerImage}>
        {loadingImage ? (
          <View style={[styles.image, styles.placeholder]}>
            <Text style={styles.placeholderText}>Cargando...</Text>
          </View>
        ) : profileImageUri ? (
          <>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: profileImageUri }}
                style={styles.image}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => console.log('Editar foto')}>
                <View style={styles.editButtonBackground}>
                  <SvgWrapper color={colors.white} size={20}>
                    <Edit />
                  </SvgWrapper>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.userNameText}>
              {user?.firstName} {user?.lastName}
            </Text>
          </>
        ) : (
          <View style={[styles.image, styles.placeholder]}>
            <Text style={styles.placeholderText}>
              {user?.firstName?.charAt(0)?.toUpperCase() || 'U'}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === InfoPatientCardEnum.PERSONAL && styles.activeTab,
          ]}
          onPress={() => setActiveTab(InfoPatientCardEnum.PERSONAL)}>
          <Text
            style={[
              styles.tabText,
              activeTab === InfoPatientCardEnum.PERSONAL && styles.activeTabText,
            ]}>
            {/* {translate('Information.title')} */}
            Personal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === InfoPatientCardEnum.APPOINTMENTS && styles.activeTab,
          ]}
          onPress={() => setActiveTab(InfoPatientCardEnum.APPOINTMENTS)}>
          <Text
            style={[
              styles.tabText,
              activeTab === InfoPatientCardEnum.APPOINTMENTS && styles.activeTabText,
            ]}>
            {translate('Appointment.title')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === InfoPatientCardEnum.HISTORY && styles.activeTab,
          ]}
          onPress={() => setActiveTab(InfoPatientCardEnum.HISTORY)}>
          <Text
            style={[
              styles.tabText,
              activeTab === InfoPatientCardEnum.HISTORY && styles.activeTabText,
            ]}>
            {translate('Historial.title')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === InfoPatientCardEnum.DOCUMENTS && styles.activeTab,
          ]}
          onPress={() => setActiveTab(InfoPatientCardEnum.DOCUMENTS)}>
          <Text
            style={[
              styles.tabText,
              activeTab === InfoPatientCardEnum.DOCUMENTS && styles.activeTabText,
            ]}>
            {translate('Documents.title')}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content Area */}
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.paddingContainer}>
          {activeTab === InfoPatientCardEnum.PERSONAL && (
            <CardInformacionPersonal key={patient?.id} patient={patient} />
          )}

          {activeTab === InfoPatientCardEnum.APPOINTMENTS && (
            <>
              {appointment.map(item => (
                <AppointmentCard key={item.id} appointment={item} />
              ))}
            </>
          )}
          {activeTab === InfoPatientCardEnum.HISTORY && (
            <>
              <MedicalHistoryCard
                historyName="Allergy Test"
                description="Tested positive for pollen and dust mite allergies"
                date="May 15, 2023"
                onPress={() => console.log('History card pressed')}
              />

              <MedicalHistoryCard
                historyName="Blood Test"
                description="Complete blood count results within normal ranges"
                date="April 28, 2023"
              />
            </>
          )}
          {activeTab === InfoPatientCardEnum.DOCUMENTS && (
            <>
              <DocumentCard
                documentName="Informe de Consulta Cardiológica"
                date="08/06/2023"
                onPress={() => console.log('Cardiología presionado')}
              />
            </>
          )}
        </View>
      </ScrollView>

      <TouchableOpacity onPress={logout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>{translate('logout')}</Text>
      </TouchableOpacity>
    </View>
  );
};



export default ProfileScreen;