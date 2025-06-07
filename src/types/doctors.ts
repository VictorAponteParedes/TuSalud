// src/types/doctor.ts
import type { SpecialtiesType } from "./specialties";
import type { LanguageType } from "./language";
import { RegisterFormData } from "./auth";
import { ScheduleType } from "./schecule";
import { ProfileImageType } from "./profileImage";

export interface DoctorFormData {
    id: string;
    firstName: string;
    lastName: string;
    description?: string;
    experience?: string;
    languages?: LanguageType[];
    patients: RegisterFormData[];
    profileImage?: ProfileImageType;
    rating: string | number;
    reviews?: number;
    schedules?: ScheduleType[];
    specialties: SpecialtiesType[];
    status: "available" | "unavailable" | "on_leave";
    onViewDetails?: () => void;
}








