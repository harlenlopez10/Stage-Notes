import { Children, createContext, useContext, useState } from "react";




type Language = "es" | "en";

type LanguageContextType ={
    language: Language;
    changeLanguage: () => {};
    clearLanguage: () => {};

};

const LanguageContext = createContext<LanguageContextType | null> (null);

export const LanguageProvider = ({children}: {children: React.ReactNode}) =>{
    const [language,setLanguage] = useState<Language>('es')

    const changeLanguage = () =>{
        return '';
    }

    const clearLanguage = () =>{
        return '';
    }

    return(
        <LanguageContext.Provider value={{language, changeLanguage, clearLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = ()=> {
    const context = useContext(LanguageContext);
    if(!context) throw new Error("useLanguage debe ser utilizado dentro de AuthProvider");
    return context;
}