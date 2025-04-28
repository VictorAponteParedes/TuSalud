import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    control: any;
    name: string;
    requered?: boolean;
  }