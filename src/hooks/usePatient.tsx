import { useEffect, useState } from "react";
import PatientServices from "../services/patient";
import { PatientType } from "../types/patient";
import { translateError } from "../helpers/translateError";

const patientService = new PatientServices();

export const usePatient = (id?: string) => {
  const [patient, setPatient] = useState<PatientType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPatient = async () => {
      try {
        const data = await patientService.getPatientById(id);

        setPatient(data);
      } catch (error: unknown) {
        const errMessage =
          error instanceof Error
            ? translateError(error.message)
            : "Error desconocido";
        setError(errMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPatient();
  }, [id]);

  useEffect(() => {
    if (id) return;
  }, [id]);

  return { patient, isLoading, error };
};
