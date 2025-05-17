import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, Secure, Drop, Phone, Email } from '../../helpers';
import SvgWrapper from '../SvgWrapper';
import colors from '../../theme/colors';
import { translate } from '../../lang';




const CardInformacionPersonal = ({
    email = 'No proporcionado',
    telefono = 'No proporcionado',
    grupoSanguineo = 'No proporcionado',
    fechaNacimiento = 'No proporcionado',
    seguroMedico = 'No proporcionado',
    style = {}
}) => {
    return (
        <View style={[styles.card, style]}>
            <Text style={styles.title}>{translate('Information.title')}</Text>

            <View style={styles.infoRow}>
                <SvgWrapper color={colors.primary[400]} size={24}>
                    <Email />
                </SvgWrapper>
                <Text style={styles.infoText}>{email}</Text>
            </View>

            <View style={styles.infoRow}>
                <SvgWrapper color={colors.primary[400]} size={24}>
                    <Phone />
                </SvgWrapper>
                <Text style={styles.infoText}>{telefono}</Text>
            </View>

            <View style={styles.infoRow}>
                <SvgWrapper color={colors.primary[400]} size={24}>
                    <Drop />
                </SvgWrapper>
                <Text style={styles.infoText}>Grupo Sanguíneo: {grupoSanguineo}</Text>
            </View>

            <View style={styles.infoRow}>
                <SvgWrapper color={colors.primary[400]} size={24}>
                    <Calendar />
                </SvgWrapper>
                <Text style={styles.infoText}>Nacimiento: {fechaNacimiento}</Text>
            </View>

            <View style={styles.infoRow}>
                <SvgWrapper color={colors.primary[400]} size={24}>
                    <Secure />
                </SvgWrapper>
                <Text style={styles.infoText}>Seguro Médico: {seguroMedico}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#2d3436',
        borderBottomWidth: 1,
        borderBottomColor: '#dfe6e9',
        paddingBottom: 8,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    infoText: {
        marginLeft: 10,
        fontSize: 15,
        color: '#636e72',
    },
});

export default CardInformacionPersonal;