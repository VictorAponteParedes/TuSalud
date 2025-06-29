import { useEffect, useState, useCallback } from "react";
import PatientServices from "../services/patient";
import { PatientType } from "../types/patient";
import { translateError } from "../helpers/translateError";

const patientService = new PatientServices();

export const usePatient = (id?: string) => {
  const [patient, setPatient] = useState<PatientType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPatient = useCallback(async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const data = await patientService.getPatientById(id);
      setPatient(data);
      setError(null);
    } catch (error: unknown) {
      const errMessage =
        error instanceof Error ? translateError(error.message) : "Error desconocido";
      setError(errMessage);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPatient();
  }, [fetchPatient]);

  return { patient, isLoading, error, refresh: fetchPatient };
};
