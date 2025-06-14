import { useState, useEffect } from "react"
import { SpecialtyService } from "../services/specialty"
import { translateError } from "../helpers/translateError"


const useSpecialty = () => {
    const specialtyService = new SpecialtyService()

    const [specialties, setSpecialties] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const getSpecialty = async () => {
        try {
            setIsLoading(true)
            const data = await specialtyService.getSpecialty();
            setSpecialties(data)
            setIsLoading(false)
        } catch (err: unknown) {
            const errMessage = err instanceof Error ? translateError(err.message) : "Error desconocido";
            setError(errMessage);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getSpecialty()
    }, [])

    return {
        specialties,
        isLoading,
        error,
    }


}

export default useSpecialty