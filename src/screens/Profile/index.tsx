import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import CustomHeader from '../../components/customHeader';
import { translate } from '../../lang';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import CardInformacionPersonal from "../../components/CardInformacionPersonal/personalInfo/personalInfo";
import AppointmentCard from "../../components/CardInformacionPersonal/appointment";
import { appointmentsData } from "./temporal";
import colors from "../../theme/colors";
import { fontsOpenSans } from "../../types/fonts";
import useShowPerfilImgen from "../../hooks/useShowPerfilImgen";



type TabType = 'personal' | 'appointments' | 'historial' | 'documents';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { loadingImage, logout, profileImage } = useShowPerfilImgen();
  const [activeTab, setActiveTab] = useState<TabType>('personal');

  return (
    <View style={styles.container}>
      <CustomHeader
        titleBack={translate('backToLogin')}
        onBackPress={navigation.goBack}
        iconBack={true}
      />

      <View style={profileImageStyles.container}>
        {loadingImage ? (
          <View style={[profileImageStyles.image, profileImageStyles.placeholder]}>
            <Text style={profileImageStyles.placeholderText}>Cargando...</Text>
          </View>
        ) : profileImage ? (
          <>
            <Image
              source={{ uri: profileImage }}
              style={profileImageStyles.image}
              resizeMode="cover"
            />
            <Text style={profileImageStyles.placeholderText}>
              {user?.firstName} {user?.lastName}
            </Text>
          </>
        ) : (
          <View style={[profileImageStyles.image, profileImageStyles.placeholder]}>
            <Text style={profileImageStyles.placeholderText}>
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
        </View>
      </ScrollView>

      <TouchableOpacity onPress={logout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>{translate('logout')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const profileImageStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 15,
    backgroundColor: colors.primary[100]
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  placeholder: {
    backgroundColor: '#0984e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: colors.black,
    fontSize: 20,
    fontFamily: fontsOpenSans.regular,
  },
});

// Estilos originales (sin modificar)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 8,
    backgroundColor: colors.grayLight,
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: colors.primary[400],
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary[400],
  },
  activeTabText: {
    color: 'white',
  },
  contentContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20
  },
  paddingContainer: {
    padding: 20
  },
  logoutButton: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#e9ecef'
  },
  logoutText: {
    color: '#e74c3c',
    fontWeight: 'bold'
  },
  screenTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  }
});

export default ProfileScreen;