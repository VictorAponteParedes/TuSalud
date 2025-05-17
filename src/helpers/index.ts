import Home from "../assets/svg/home.svg";
import Profile from "../assets/svg/profile.svg";
import Calendar from "../assets/svg/calendar.svg";
import Setting from "../assets/svg/settings.svg";
import Logout from "../assets/svg/logout.svg";
import Notifications from "../assets/svg/notifications.svg";
import Heart from "../assets/svg/heart.svg";
import Close from "../assets/svg/close.svg";
import Pediatria from "../assets/svg/pediatria.svg";
import RadioGrafia from "../assets/svg/radiografia.svg"
import IconBrain from "../assets/svg/brain.svg"
import CloseCirucule from '../assets/svg/closeCircule.svg';
import Finger from '../assets/svg/finger.svg';
import Secure from "../assets/svg/secure.svg"
import Drop from "../assets/svg/drop.svg"
import Phone from "../assets/svg/phone.svg"
import Email from "../assets/svg/email.svg"


import { LOCAL_IP } from "../constants";

export const groupArray = (array: [], groupSize: number) => {
    const groups = [];
    for (let i = 0; i < array.length; i += groupSize) {
        groups.push(array.slice(i, i + groupSize));
    }
    return groups;
};

export const fixUrl = (url: string) => {
    return url.replace('localhost', LOCAL_IP);
};


export {
    Home,
    Profile,
    Calendar,
    Setting,
    Logout,
    Notifications,
    Heart,
    Close,
    Pediatria,
    RadioGrafia,
    IconBrain,
    CloseCirucule,
    Finger,
    Secure,
    Drop,
    Phone,
    Email
}