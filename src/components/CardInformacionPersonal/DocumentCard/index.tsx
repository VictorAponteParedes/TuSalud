import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
    documentName: string;
    date: string;
    onPress?: () => void;
}

const DocumentCard = ({ documentName, date, onPress }: Props) => (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
        <Text style={styles.documentName}>{documentName}</Text>
        <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
);

export default DocumentCard;
