import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import AuthServices from "../services/auth";
import {PatientDataType} from '../types/auth';


const useUserInformation = () => {
  const {user} = useAuth();
  const authServices = new AuthServices();

  const [profileInformation, setProfileInformation] = useState<string | null>(
    null,
  );
  const [patient, setPatient] = useState<PatientDataType | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const userInfo = await authServices.getUserInformation(user.token);
      setProfileInformation(userInfo.data);
    } catch (error) {
      console.error('Error loading profile image:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPatientDetail = async () => {
    try {
      const patientDetail = await authServices.getPatientDetail(user.id);
      setPatient(patientDetail);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  useEffect(() => {
    fetchProfile();
    getPatientDetail();
  }, [user?.id]);

  return {
    profileInformation,
    patient,
    loading,
  };
}


export default useUserInformation;