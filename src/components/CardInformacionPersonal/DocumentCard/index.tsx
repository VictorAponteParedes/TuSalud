import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SvgWrapper from '../../SvgWrapper';
import { Donwload } from '../../../helpers';
import colors from '../../../theme/colors';

type DocumentCardProps = {
    documentName: string;
    date: string;
    icon?: React.ReactNode;
    onPress?: () => void;
};

const DocumentCard: React.FC<DocumentCardProps> = ({
    documentName = 'Documento sin nombre',
    date = 'Fecha no especificada',
    onPress
}) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <View style={styles.textContainer}>
                <Text style={styles.documentName} numberOfLines={1} ellipsizeMode="tail">
                    {documentName}
                </Text>
                <Text style={styles.dateText}>{date}</Text>
            </View>

            <SvgWrapper color={colors.primary[400]} size={24}>
                <Donwload />
            </SvgWrapper>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginVertical: 8,
        width: '100%',
    },
    textContainer: {
        flex: 1,
        marginRight: 16,
    },
    documentName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2d3436',
        marginBottom: 4,
    },
    dateText: {
        fontSize: 14,
        color: '#636e72',
    },
    iconContainer: {
        width: 40,
        alignItems: 'flex-end',
    },
});

export default DocumentCard;