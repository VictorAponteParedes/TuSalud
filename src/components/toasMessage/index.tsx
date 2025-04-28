import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';

type ToastMessageProps = {
  type: 'success' | 'error' | 'info';
  message: string;
  description: string;
};

const ToastMessage = ({ type, message, description }: ToastMessageProps) => {
  useEffect(() => {
    Toast.show({
      type: type,
      position: 'top',
      text1: message,
      text2: description,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      text1Style: { color: 'black' },
      text2Style: { color: 'black' },
    });
  }, [type, message, description]);

  return null; // Este componente no necesita renderizar nada
};

export default ToastMessage;