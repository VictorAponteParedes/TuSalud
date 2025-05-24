import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import CustomHeader from '../../components/customHeader';
import { translate } from '../../lang';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import CardInformacionPersonal from "../../components/CardInformacionPersonal/personalInfo/personalInfo";
import AppointmentCard from "../../components/CardInformacionPersonal/appointment";
import { appointmentsData } from "./temporal";
import colors from "../../theme/colors";
import useShowPerfilImgen from "../../hooks/useShowPerfilImgen";
import MedicalHistoryCard from "../../components/CardInformacionPersonal/MedicalHistoryCard";
import { Edit } from "../../helpers";
import SvgWrapper from "../../components/SvgWrapper";
import styles from "./styles";
import DocumentCard from "../../components/CardInformacionPersonal/DocumentCard";
import useUserInformation from "../../hooks/useUserInfo";


type TabType = 'personal' | 'appointments' | 'historial' | 'documents';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { loadingImage, logout, profileImageUri } = useShowPerfilImgen();
  const { profileInformation, loading } = useUserInformation()
  const [activeTab, setActiveTab] = useState<TabType>('personal');


  useEffect(() => {
    console.log(profileInformation)
  }, [])

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
                onPress={() => console.log('Editar foto')}
              >
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
            activeTab === 'personal' && styles.activeTab
          ]}
          onPress={() => setActiveTab('personal')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'personal' && styles.activeTabText
          ]}>
            {/* {translate('Information.title')} */}
            Personal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'appointments' && styles.activeTab
          ]}
          onPress={() => setActiveTab('appointments')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'appointments' && styles.activeTabText
          ]}>
            {translate('Appointment.title')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'historial' && styles.activeTab
          ]}
          onPress={() => setActiveTab('historial')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'historial' && styles.activeTabText
          ]}>

            {translate('Historial.title')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'documents' && styles.activeTab
          ]}
          onPress={() => setActiveTab('documents')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'documents' && styles.activeTabText
          ]}>
            {translate('Documents.title')}
          </Text>
        </TouchableOpacity>


      </View>

      {/* Content Area */}
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.paddingContainer}>
          {activeTab === 'personal' && (
            <CardInformacionPersonal
              email={user?.email || "No disponible"}
              phone="+593 123 456 789"
              BloodGroup="O+"
              dateBirth="15/08/1990"
              medicalSecure="SaludPlus"
            />
          )}

          {activeTab === 'appointments' && (
            <>
              {appointmentsData.map(appointment => (
                <AppointmentCard
                  key={appointment.id}
                  date={appointment.date}
                  doctorName={appointment.doctorName}
                  specialty={appointment.specialty}
                  availableTime={appointment.availableTime}
                  onPress={() => console.log('Card pressed', appointment.id)}
                />
              ))}
            </>
          )}
          {activeTab === 'historial' && (
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
          {activeTab === 'documents' && (
            <>
              <DocumentCard
                documentName="Informe de Rayos X Torácicos"
                date="12/05/2023"
                onPress={() => console.log('Rayos X presionado')}
              />

              <DocumentCard
                documentName="Análisis de Sangre Completo"
                date="28/04/2023"
              />

              <DocumentCard
                documentName="Informe de Ecografía Abdominal"
                date="03/06/2023"
                onPress={() => console.log('Ecografía presionada')}
              />

              <DocumentCard
                documentName="Prescripción de Medicamentos"
                date="15/05/2023"
              />

              <DocumentCard
                documentName="Resultados de Prueba COVID-19"
                date="20/03/2023"
              />

              <DocumentCard
                documentName="Informe de Consulta Cardiológica"
                date="08/06/2023"
                onPress={() => console.log('Cardiología presionado')}
              />

              <DocumentCard
                documentName="Autorización para Cirugía"
                date="01/07/2023"
              />

              <DocumentCard
                documentName="Resultados de Prueba de Alergias"
                date="14/04/2023"
              />

              <DocumentCard
                documentName="Informe de Resonancia Magnética"
                date="22/05/2023"
              />

              <DocumentCard
                documentName="Certificado Médico Laboral"
                date="05/06/2023"
                onPress={() => console.log('Certificado presionado')}
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