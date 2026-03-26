
import { Language } from "@/type";
import React, { useState } from "react";

type Props = {
    languages: Language[];
    setLanguages: (languages: Language[]) => void;
};

const LanguageForm: React.FC<Props> = ({ languages, setLanguages }) => {

    const [newLanguage, setNewLanguage] = useState<Language>({
        language: '',
        proficiency: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: keyof Language) => {
        setNewLanguage({ ...newLanguage, [field]: e.target.value })
    }

    const handleAddLanguage = () => {
        setLanguages([...languages, newLanguage])
        setNewLanguage({
            language: '',
            proficiency: '',
        })
    }

    return (
        <div></div>
    )
}


export default LanguageForm;