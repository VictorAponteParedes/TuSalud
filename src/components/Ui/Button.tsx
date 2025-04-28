// src/components/ui/Button.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ActivityIndicator } from 'react-native';
import colors from '../../theme/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const { title, onPress, disabled = false, loading = false } = props;
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary[400],
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#A5D6A7',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
