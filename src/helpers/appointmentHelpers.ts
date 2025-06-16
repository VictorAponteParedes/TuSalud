// helpers/appointmentHelpers.ts
import { translate } from "../lang";
import { DoctorFormData } from "../types/doctors";

export const getAvailableDaysText = (selectedDoctor: DoctorFormData | undefined | null): string => {
    if (!selectedDoctor?.schedules?.length) return "";

    const days = selectedDoctor.schedules.map(s =>
        translate(`days.${s.day}`)
    ).join(", ");

    return `Días disponibles: ${days}`;
};

export const isDateAllowed = (date: Date, availableDays: string[]): boolean => {
    const weekDayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const dayName = weekDayNames[date.getDay()];
    return availableDays.includes(dayName);
};