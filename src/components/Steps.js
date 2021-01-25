import React, { useState } from 'react';
import Form from './Form';

function Steps() {

    const [form, setForm] = useState({
        date: "",
        distance: "",        
    });

    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt.type);
        console.dir(evt.target);
    }

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setForm(prevForm => ({...prevForm, [name]: value}));
        }

    // const handleNameChange = evt => {
    //     setForm(prevForm => ({...prevForm, name: evt.target.value}));
    // }

    return (
        <React.Fragment>
            <Form 
                form = {form}
                handleSubmit = {handleSubmit}
                handleChange = {handleChange} />
            <div>

            </div>
        </React.Fragment>
        
    );
}

export default Steps;
