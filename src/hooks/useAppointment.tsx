import { useEffect, useState } from "react";
import { AppointmentService } from "../services/appointment";
import type { AppointmentFormData } from "../types/appointment";
import { translateError } from "../helpers/translateError";

const appointmentService = new AppointmentService();

export const useAppointment = (id?: string) => {
    const [appointment, setAppointment] = useState<
      AppointmentFormData[] | null
    >([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchAppointment = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const data = await appointmentService.getById(id);
                setAppointment(data);
            } catch (err: unknown) {
                const errMessage = err instanceof Error ? translateError(err.message) : "Error desconocido";
                setError(errMessage);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAppointment();
    }, [id]);


    const createAppointment = async (appointmentData: AppointmentFormData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await appointmentService.createAppointment(appointmentData);
            return response;
        } catch (err: unknown) {
            const errMessage = err instanceof Error ? translateError(err.message) : "Error desconocido";
            setError(errMessage);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        appointment,
        createAppointment,
        isLoading,
        error,
    };
};
