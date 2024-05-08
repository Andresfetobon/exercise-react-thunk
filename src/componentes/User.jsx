/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React from 'react';
import '../../Styles/usersStyles.css';

const User = ({ users }) => {
  return (
    <div className='card-users'>
      <div>
        <h1 className='name-user'>
          {users.name?.title} {users.name?.first} {users.name?.last}
        </h1>
        <img
          className='user-picture'
          src={users.picture?.large}
          alt='image-user'
        />
        <p>city: {users.location?.city}</p>
        <p>country: {users.location?.country}</p>
        <p>email: {users.email}</p>
        <p>gender: {users.gender}</p>
        <p>cell: {users.cell}</p>
      </div>
    </div>
  );
};

export default User;
