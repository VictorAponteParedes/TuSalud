type Language = 'Español' | 'Inglés' | 'Francés' | 'Portugués' | string;

type AvailabilityStatus = 'available' | 'unavailable' | 'on_vacation' | 'in_consultation';

export type DoctorType = {
    id: string;
    name: string;
    speciality: string;
    imageUrl: string;
    rating: number;
    reviews: number;
    status: AvailabilityStatus;
    schedule: string;
    languages: Language[];
    experience: string;
    description: string;
    // Campos opcionales que podrías necesitar después
    phone?: string;
    email?: string;
    consultationFee?: number;
    isFavorite?: boolean;
    clinic?: {
        name: string;
        address: string;
        coordinates?: {
            lat: number;
            lng: number;
        };
    };
    education?: Array<{
        degree: string;
        university: string;
        year: number;
    }>;
    specialties?: string[];
};