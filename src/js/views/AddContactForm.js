import React, { useState, useContext, useActionState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from '../store/appContext';



const AddContactForm = () => {
  const{actions}=useContext(Context)
  const [contact, setContact]= useState({name:"", email:"", phone:"", address:""});
  const navigate = useNavigate ()
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [address, setAddress] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    await actions.createContact(contact);
    navigate("/")
  };
    

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add a new contact</h2>
      <form onSubmit={handleSubmit}>
        {/* Campo de Nombre */}
        <div className="mb-3">
          <label htmlForm="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={contact.name}
            placeholder="Name" 
            onChange={(e)=>setContact({...contact, name:e.target.value})}
          />
        </div>
        {/* Campo de Email */}
        <div className="mb-3">
          <label htmlForm="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={contact.email}
            placeholder="email" 
            onChange={(e)=>setContact({...contact, email:e.target.value})}
          />
        </div>
        {/* Campo de Teléfono */}
        <div className="mb-3">
          <label htmlForm="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            value={contact.phone}
            placeholder="phone" 
            onChange={(e)=>setContact({...contact, phone:e.target.value})}
          />
        </div>
        {/* Campo de Dirección */}
        <div className="mb-3">
          <label htmlForm="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            value={contact.address}
            placeholder="address" 
            onChange={(e)=>setContact({...contact, address:e.target.value})}
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
