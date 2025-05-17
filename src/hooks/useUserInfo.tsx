import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import AuthServices from "../services/auth";


const useUserInformation = () => {
    const { user } = useAuth();
    const authServices = new AuthServices();

    const [profileInformation, setProfileInformation] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const fetchProfile = async () => {
        try {

            const userInfo = await authServices.getUserInformation(user.token);
            setProfileInformation(userInfo);

        } catch (error) {
            console.error('Error loading profile image:', error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {

        fetchProfile();
    }, [user?.id]);

    return {
        profileInformation,
        loading,

    }
}


export default useUserInformation;