import { translate } from "../lang"
import { itemMedicine, infoCovid, bolsaIv} from "../assets"

export const informationHome = [
    {
        title: translate('cosultation.title'),
        description: translate('cosultation.description'),
        image: bolsaIv,
    },
    {
        title: translate('citas'),
        description: translate('appontment'),
        image: itemMedicine,
    },
    {
        title: translate('citas'),
        description: translate('appontment'),
        image: itemMedicine,
    },
    {
        title: translate('citas'),
        description: translate('appontment'),
        image: itemMedicine,
    },
    
    
]

export const informationCovid = [
    {
        image: infoCovid,
        title: translate('covidInfo'),
        description: translate('covidInfoHome'),
    }
]