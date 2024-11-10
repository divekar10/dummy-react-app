import React, { useContext } from 'react'
import { RegistrationContext } from './context/RegisterFormContext'

const DisplayValues: React.FC = () => {

    const registrationContext = useContext(RegistrationContext);

  return (
    <div>
        <h2>Form Values </h2>
    <label> First Name : {registrationContext?.formValues?.firstName}</label><br/>
    <label> Last Name : {registrationContext?.formValues?.lastName}</label><br />
    <label> Email : {registrationContext?.formValues?.email}</label>
    </div>
  )
}

export default DisplayValues