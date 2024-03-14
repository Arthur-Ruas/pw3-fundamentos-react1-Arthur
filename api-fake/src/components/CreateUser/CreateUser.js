import React, { useState } from 'react';
import './createUser.css';

import axios from 'axios';

const CreateUser = () => {

    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    function createUser(event){
        event.preventDefault()
        let user = JSON.stringify({name: name, job: job});

        axios.post('https://reqres.in/api/users/', user)
        .then((response) => {
            console.log(response);            
        })
        .catch((error) => {
            console.log(error);            
        });
    }

    return (
        <div className='form-user'>
            <h1>Formulário de Cadastro</h1>
            <form onSubmit={createUser}>
                <div className='wrapper-input'>
                    <div className='form__input'>
                        <label className='form__input__label'>Digite seu Nome</label>
                        <input type='text' value={name} onChange={(event) => {setName(event.target.value)}}/>
                    </div>
                    <div className='form__input'>
                        <label className='form__input__label'>Digite sua Profissão</label>
                        <input type='text' value={job}  onChange={(event) => {setJob(event.target.value)}}/>
                    </div>
                </div>
                <button className='form__button-submit' type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CreateUser;