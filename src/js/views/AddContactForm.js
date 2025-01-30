import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";


const AddContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Nombre:', name);
  //   console.log('Email:', email);
    
  // };
    

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add a new contact</h2>
      <form>
        {/* Campo de Nombre */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Full Name"
          />
        </div>
        {/* Campo de Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        {/* Campo de Teléfono */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Enter phone"
          />
        </div>
        {/* Campo de Dirección */}
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
          />
        </div>
        {/* Botón Guardar */}
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
        <div>
          <Link to={"/"}>
            <button className="btn btn-primary">Back home</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddContactForm;
