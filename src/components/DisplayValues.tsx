import React, { useContext } from 'react'
import { RegistrationContext } from './context/RegisterFormContext'

const DisplayValues: React.FC = () => {

    const registrationContext = useContext(RegistrationContext);

  return (
    <div>
        <h2>Form Values </h2>
        
    <p> First Name : {registrationContext?.formValues?.firstName}</p><br/>
    <p> Last Name : {registrationContext?.formValues?.lastName}</p><br />
    <p> Email : {registrationContext?.formValues?.email}</p>
    </div>
  )
}

export default DisplayValues