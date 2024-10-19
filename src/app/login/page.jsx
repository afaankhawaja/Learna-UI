"use client"
import React, { useState } from 'react';

const Login=()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);   

  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-44 flex-col gap-4">
      <label className="flex flex-col">
        <span className="text-gray-500">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2"
          required
        />
      </label>
      <label className="flex flex-col">
        <span className="text-gray-500">Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded-md p-2"
          required
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white rounded-md p-2">Login</button>
    </form>
  );
}

export default Login