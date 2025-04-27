
import login from './Login.json';

// Definir el idioma actual, por ejemplo, 'es' para español
const currentLanguage = 'es';

// Almacenar las traducciones en un objeto
const translations = {
    es: login,
    // puedes agregar más idiomas en el futuro, por ejemplo:
    // en: require('./English.json')
};

// Función para obtener la traducción
const translate = (key) => {
    return translations[currentLanguage][key] || key;
};

export { translate };
