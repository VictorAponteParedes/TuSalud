import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, RefreshControl } from 'react-native';
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
import { tabs } from "./TabButtom";
import PatientServices from "../../services/patient";

//Cards Patient Information
import CardInformacionPersonal from "../../components/CardInformacionPersonal/personalInfo/personalInfo";
import AppointmentCard from '../../components/CardInformacionPersonal/appointment';
import MedicalHistoryCard from "../../components/CardInformacionPersonal/MedicalHistoryCard";

//Skeletons
import CardSkeleton from "../../components/Skeletons/CardSkeleton";
import AppointmentCardSkeleton from "../../components/Skeletons/AppointmentCardSkeleton";
import MedicalHistoryCardSkeleton from "../../components/Skeletons/MedicalHistoryCardSkeleton";
import { mockHistories } from "../../mock/mockHistories";
import DocumentCardSkeleton from "../../components/Skeletons/DocumentCardSkeleton";
import { mockDocuments } from "../../mock/mockDocuments";




const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { loadingImage, logout } = useShowPerfilImgen();
  const patientService = new PatientServices();
  const { patient, isLoading, error, refresh } = usePatient(user?.id);
  const [refreshing, setRefreshing] = useState(false);

  const [activeTab, setActiveTab] = useState<TabType>(InfoPatientCardEnum.PERSONAL);
  const { appointment } = useAppointment(user?.id);

  const imageUrl = patient
    ? patientService.returnUrlImage(patient)
    : "/default-avatar.png";

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  }, [refresh]);

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
        ) : imageUrl ? (
          <>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: imageUrl }}
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
              {user?.firstName}
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
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tabButton,
              activeTab === tab.key && styles.activeTab,
            ]}
            onPress={() => setActiveTab(tab.key)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab.key && styles.activeTabText,
              ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Area */}
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.paddingContainer}>
          {activeTab === InfoPatientCardEnum.PERSONAL && (
            !patient ? (
              <CardSkeleton />
            ) : (
              <CardInformacionPersonal patient={patient} />
            )
          )}

          {activeTab === InfoPatientCardEnum.APPOINTMENTS && (
            appointment.length === 0 ? (
              <>
                <AppointmentCardSkeleton />
              </>
            ) : (
              appointment.map(item => (
                <AppointmentCard key={item.id} appointment={item} />
              ))
            )
          )}


          {activeTab === InfoPatientCardEnum.HISTORY && (
            <>
              {mockHistories.length === 0 ? (
                <>
                  <MedicalHistoryCardSkeleton />
                  <MedicalHistoryCardSkeleton />
                </>
              ) : (
                mockHistories.map((item) => (
                  <MedicalHistoryCard
                    key={item.id}
                    historyName={item.historyName}
                    description={item.description}
                    date={item.date}
                    onPress={() => console.log(`Pressed: ${item.historyName}`)}
                  />
                ))
              )}
            </>
          )}

          {activeTab === InfoPatientCardEnum.DOCUMENTS && (
            !mockDocuments || mockDocuments.length === 0 ? (
              <DocumentCardSkeleton />
            ) : (
              mockDocuments.map(doc => (
                <DocumentCard
                  key={doc.id}
                  documentName={doc.documentName}
                  date={doc.date}
                  onPress={() => console.log(`Documento ${doc.documentName} presionado`)}
                />
              ))
            )
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