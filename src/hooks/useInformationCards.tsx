import { useEffect, useState, useCallback } from "react";
import InformationCardService from "../services/informationCard";
import type { InformationCardFormData } from "../types/InformationCardFormData";
import { translateError } from "../helpers/translateError";

const informationCardService = new InformationCardService();

export const useInformationCards = (id?: string) => {
    const [card, setCard] = useState<InformationCardFormData | null>(null);
    const [cards, setCards] = useState<InformationCardFormData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCards = useCallback(async () => {
        setIsLoading(true);
        try {
            if (id) {
                const response = await informationCardService.getById(id);
                setCard(response.data || null);
            } else {
                const response = await informationCardService.getAll();
                setCards(response.data || []);
            }
        } catch (error: unknown) {
            const errMessage =
                error instanceof Error ? translateError(error.message) : "Error desconocido";
            setError(errMessage);
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchCards();
    }, [fetchCards]);

    return { card, cards, isLoading, error, refresh: fetchCards };
};
