import { translate } from "../lang"
import { itemMedicine, infoCovid, consultas, resultadosMedicos, doctorPerfil, farmaciaIcon } from "../assets"

export const informationHome = [
    {
        title: translate('cosultation.title'),
        description: translate('cosultation.description'),
        image: consultas,
        screen: "Quotes"
    },
    {
        title: translate('results.title'),
        description: translate('results.description'),
        image: resultadosMedicos,
    },
    {
        title: translate('doctor.title'),
        description: translate('doctor.description'),
        image: doctorPerfil,
    },
    {
        title: translate('farmacy.title'),
        description: translate('farmacy.description'),
        image: farmaciaIcon,
    },


]

export const informationCovid = [
    {
        image: infoCovid,
        title: translate('covidInfo'),
        description: translate('covidInfoHome'),
    },
    {
        image: infoCovid,
        title: translate('covidInfo'),
        description: translate('covidInfoHome'),
    }
]