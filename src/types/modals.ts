import React from "react";


export interface ModalCardsProps {
  imagenItem: any;
  title: string;
  subtitle: string;
}

export type DrawerModalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export type SvgWrapperProps = {
  children: React.ReactNode | React.ReactElement;
  color?: string;
  size?: number;
  style?: object;
};

export type DrawerHomeProps = {
  isDrawerVisible: boolean;
  toggleDrawer: () => void;
}

export type CardInformacionPersonalProps = {
  email: string;
  phone: string;
  BloodGroup: string;
  dateBirth: string;
  medicalSecure: string;
  style?: {}

}

export type AppointmentCardProps = {
  date: string;
  doctorName: string;
  specialty: string;
  availableTime: string;
  onPress?: () => void;
  style?: object;
};