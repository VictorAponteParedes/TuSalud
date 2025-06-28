
export type PatientType = {
    id?: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    email: string;
    documentNumber: string;
    password: string;
    confirmPassword?: string;
    dateBirth: string;
    bloodType: string
    allergies: string
    contactEmergency: string;
    profileImage?: any;
};



export type PatientDataType = PatientType;

export type TabType = 'personal' | 'appointments' | 'historial' | 'documents';