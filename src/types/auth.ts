export type RegisterFormData = {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    email: string;
    password: string;
    confirmPassword?: string;
    dateBirth: string;
    bloodType: string
    allergies: string
    contactEmergency: string
};

export type LoginFormData = {
    email: string;
    password: string;
};

export interface CustomHeaderProps {
    title?: string;
    titleBack?: string;
    onBackPress?: () => void;
    imageProfile?: string;
    gradientColors?: string[];
    iconBack?: boolean;
    showMenu?: boolean;
    onMenuPress?: () => void;
}