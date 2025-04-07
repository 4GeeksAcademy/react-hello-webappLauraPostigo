import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { AddContactForm } from "../views/AddContactForm";
import { Context } from "../store/appContext";

export const Home = () => {
const {store, actions}= useContext(Context)
const deleteContact = (id) => {
  actions.deleteContact(id);
  console.log(id)
};
useEffect (()=>{
  actions.getContactList()
},[]
)


  return (
    <div className="text-center">
      <div>
        {store.contacto.map((contact,index) =>(
           <Card key={index}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
            address={contact.address}
            onDelete={() => 
              {console.log("clic",contact.id)
                deleteContact(contact.id)}}
           />
        )
      )}
       
      </div>
    </div>
  );
};

export default Home;
