import React, { useState } from 'react';

export default function Login() {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("user: ", userFormData);

    setUserFormData({
      email: '',
      password: '',
    });

  };

  return (
    <div>
      <h1>LOGIN:</h1>


      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Admin@email.com"
          className="col-span-3"
          value={userFormData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="********"
          className="col-span-3"
          value={userFormData.password}
          onChange={handleInputChange}
        />
        <button type='submit' >
          Login
        </button>
      </form>

    </div>
  )
}