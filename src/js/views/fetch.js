
//   // Declaración de estados
//   const [inputValue, setInputValue] = useState(""); 
//   const [ContactList, setContactList] = useState([]); 

//   // Crear contacto (POST)
//   const createContact = async (newContact)  => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

    
//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: JSON.stringify(newContact)
      
//     };

//     try {
//       const response = await fetch(
//         "https://playground.4geeks.com/contact/agendas/contactos4geeks/contacts",
//         requestOptions
//       );
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error); 
//     }
//   };

//   // Obtener listado de contactos (GET)
//   const getContactList = async () => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       redirect: "follow"
//     };

//     try {
//       const response = await fetch(
//         "https://playground.4geeks.com/contact/agendas/contactos4geeks/contacts",
//         requestOptions
//       );
//       const result = await response.json();
//       setContactList(result.contacts); 
//       console.log(result.contacts); 
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Eliminar contacto (DELETE)
//   const deleteContact = async (id) => {
//     const requestOptions = {
//       method: "DELETE",
//       redirect: "follow"
//     };

//     try {
//       const response = await fetch(
//         `https://playground.4geeks.com/contact/agendas/contactos4geeks/contacts/${id}`,
//         requestOptions
//       );
//       const result = await response.json();
//       console.log(result); 
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getContactList(); 
//   }, []);


// // nota antiguo post de flux
//   createContact: async (newContact) => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//       "name": "juan",
//       "phone": "09838974",
//       "email": "pepita@gmail.com",
//       "address": "dublin"
//       });
      
//       const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow"
//       };
      
//     };

//     try {
//       const response = await fetch(
//         "https://playground.4geeks.com/contact/agendas/contactos4geeks/contacts",
//         requestOptions
//       );

//       if (!response.ok) {
//         throw new Error("Failed to create contact");
//       }

//       const data = await response.json();

//       // Actualiza el estado global añadiendo el nuevo contacto
//       const store = getStore();
//       setStore({ contacto: [...store.contacto, data] });

//       console.log("Contacto creado:", data);
//     } catch (error) {
//       console.error("Error al crear el contacto:", error);
//     }
//   },