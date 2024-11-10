import { createContext, useState } from "react"

export type RegistrationForm = {
    firstName: string,
    lastName: string,
    email: string
}

type RegistrationContextProviderProps ={
    children : React.ReactNode
}

type RegistrationContextType = {
    formValues: RegistrationForm | null,
    setFormValues: React.Dispatch<React.SetStateAction<RegistrationForm | null>>
}

export const RegistrationContext = createContext<RegistrationContextType | null>(null);

export const RegistrationContextProvider = ({children} : RegistrationContextProviderProps) =>{
    const [formValues, setFormValues] = useState<RegistrationForm | null>(null);

    return <RegistrationContext.Provider value={{formValues, setFormValues}}>{children}</RegistrationContext.Provider>
}

