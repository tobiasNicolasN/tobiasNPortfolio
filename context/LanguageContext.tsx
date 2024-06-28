'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

interface ILangContext {
    language: string
    setLanguage: Dispatch<SetStateAction<string>>
}

interface ILangProviderProps{
    children: ReactNode
}

const langContext = createContext<ILangContext | undefined>(undefined);

export const useLang = () => {
  const context = useContext(langContext);
  if (!context) throw new Error('useLang debe ser usado con un LangProvider');
  return context;
};

export const LangProvider = ({children}: ILangProviderProps) => {
    const [language, setLanguage] = useState("spanish")

    return (
        <langContext.Provider value={{language, setLanguage}}>
            {children}
        </langContext.Provider>
    )
}