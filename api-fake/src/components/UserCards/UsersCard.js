import React, { useState, useEffect } from 'react';
import './usersCard.css'

import axios from 'axios';

const UserCard = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
        
        .then(response => {
            console.log(response);
            setUsers(response.data.data)
        })
        .catch(error => {
            console.log(error);
        });      
    }, []);

    return (
        <div className='wrapper-users'>
            {
                users.map(user =>(
                    <div className='card-user'>
                        <img className='card-user__image' src={user.avatar} alt='Avatar do usuário'/>
                        <h1 className='card-user__name'>{user.fist_name}</h1>
                        <p className='card-user__email'>{user.email}</p>
                    </div>
                ))
            }
        </div>     
    );
}

export default UserCard;