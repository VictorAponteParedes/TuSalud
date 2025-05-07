import heart from '../assets/svg/heart.svg';
import { infoCovid } from '../assets';
import { Heart, RadioGrafia, Pediatria, IconBrain } from '../helpers';

export const specialities = [
    {
        id: 1,
        name: 'Cardiologia',
        description: 'Cardiologia es la especialidad médica que se ocupa del diagnóstico y tratamiento de las enfermedades del corazón y del sistema circulatorio.',
        imageUrl: Heart,
    },
    {
        id: 2,
        name: 'Dermatologia',
        description: 'Dermatologia es la especialidad médica que se ocupa del diagnóstico y tratamiento de las enfermedades de la piel, cabello y uñas.',
        imageUrl: infoCovid,
    },
    {
        id: 3,
        name: 'Neurologia',
        description: 'Neurology is a branch of medicine dealing with disorders of the nervous system.',
        imageUrl: IconBrain,
    },
    {
        id: 4,
        name: 'Pediatria',
        description: 'Pediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents.',
        imageUrl: Pediatria,
    },
    {
        id: 5,
        name: 'Psiquiatria',
        description: 'Psychiatry is the study and treatment of mental illness, emotional disturbance, and abnormal behavior.',
        imageUrl: IconBrain,
    },
    {
        id: 6,
        name: 'Radiologia',
        description: 'Radiology is a medical specialty that uses imaging to diagnose and treat diseases within the body.',
        imageUrl: RadioGrafia,
    },
]