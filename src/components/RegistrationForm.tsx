import React, { useState, useContext } from 'react';
import { RegistrationContext } from './context/RegisterFormContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import './RegistrationForm.module.css'

const RegistrationForm: React.FC = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    
    const registrationContext = useContext(RegistrationContext);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(registrationContext){
            registrationContext.setFormValues({
                firstName : firstName,
                lastName : lastName,
                email : email
            });
        }

        setFirstName('');
        setLastName('');
        setEmail('');

    };

    return (
        <div>
            <h3>Registration Form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <div><label>First Name : </label></div>
                    <div><input required type="text" id='fname' name='fname' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div></div>
                <div>
                    <label>Last Name : </label>
                    <input required type="text" name='lname' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email : </label>
                    <input required type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default RegistrationForm

