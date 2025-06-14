export const formatDate = (date: Date | string | null | undefined, placeholder: string | undefined) => {
    if (!date) return placeholder || 'Selecciona una fecha';

    const dateObj = typeof date === 'string' ? new Date(date) : date;

    return dateObj.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
};

export const formatForDatabase = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};