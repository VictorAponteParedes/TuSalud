export interface InformationCardImage {
    id: string;
    filename: string;
    originalname: string;
    mimetype: string;
    size: number;
    path?: string;
}


export interface InformationCardFormData {
    id?: string;
    title: string;
    description: string;
    screen?: string;
    isActive: boolean;
    serviceImage?: InformationCardImage;
    onPress?: () => void;
    params?: Record<string, any>;
}
