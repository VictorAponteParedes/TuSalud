import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import AuthServices from "../services/auth";
import { fixUrl } from "../helpers";



const useShowPerfilImgen = () => {
    const { user, logout } = useAuth();
    const authServices = new AuthServices();

    const [profileImageUri, setProfileImageUri] = useState<string | null>(null);
    const [loadingImage, setLoadingImage] = useState(true);
    const fetchProfileImage = async () => {
        try {
            if (user?.id) {
                const imageUrl = await authServices.getProfileImage(user.id);
                setProfileImageUri(fixUrl(imageUrl));
            }
        } catch (error) {
            console.error('Error loading profile image:', error);
        } finally {
            setLoadingImage(false);
        }
    };


    useEffect(() => {

        fetchProfileImage();
    }, [user?.id]);

    return {
        profileImageUri,
        loadingImage,
        logout
    }
}


export default useShowPerfilImgen;