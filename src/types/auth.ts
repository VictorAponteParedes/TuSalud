export type RegisterFormData = {
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    email: string;
    password: string;
    confirmPassword?: string;
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
}