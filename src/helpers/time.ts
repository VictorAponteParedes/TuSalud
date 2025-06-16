// helpers/time.ts
export const formatDate = (dateString: string | Date | null, placeholder?: string) => {
    if (!dateString) return placeholder || 'Selecciona una fecha';

    const date = typeof dateString === 'string' ? new Date(dateString) : dateString;

    // Ajustar para compensar la zona horaria
    const adjustedDate = new Date(date);
    adjustedDate.setMinutes(adjustedDate.getMinutes() + adjustedDate.getTimezoneOffset());

    return adjustedDate.toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const formatForDatabase = (date: Date) => {
    // Formato YYYY-MM-DD sin problemas de timezone
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
};