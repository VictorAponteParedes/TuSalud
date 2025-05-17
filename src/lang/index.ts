
import login from './Login.json';
import register from './Register.json';
import home from './Home.json';
import profile from './Profile.json';
import config from './Config.json';
import appointments from './Appointments.json';
import information from './Information.json'

// Definir el idioma actual, por ejemplo, 'es' para español
const currentLanguage = 'es';


const translations = {
  es: {
    // Traducciones para el idioma español
    ...login,
    ...register,
    ...home,
    ...profile,
    ...config,
    ...appointments,
    ...information,
  },

};

// Función para obtener la traducción
const translate = (key) => {
  const keys = key.split('.');
  let result = translations[currentLanguage];

  for (const k of keys) {
    result = result[k];
    if (result === undefined) return key; // Devuelve la clave si no encuentra la traducción
  }

  return result || key;
};


export { translate };
