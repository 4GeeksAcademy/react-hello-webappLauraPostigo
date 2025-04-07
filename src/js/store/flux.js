const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacto: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			// crear contactos 
			// traer la lista (siempre)
			getContactList: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/Laura/contacts")
					if (!response.ok) {
						console.error("error en la respuesta")
					}
					const data = await response.json()
					setStore({ contacto: data.contacts })
				} catch (error) {
					console.error("error al hacer el fetch")
	
				}
			},
			createContact: async(contact) =>{
				const store = getStore();
				try { const response= await fetch('https://playground.4geeks.com/contact/agendas/Laura/contacts',{
					method:"POST",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(contact)
				})
					if(!response.ok){
						throw new Error (`HTTP error! status: ${resp.status}`)
					}
					await getActions().getContactList()
				} catch (error) {
					console.error ("estoy harta de esto", error)
				}

			},

			//   borrar contactos

			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Laura/contacts/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
						},
					});
					if (!response.ok) {
						console.error("Error al eliminar el contacto");
					}
					getActions().getContactList()
				} catch (error) {
					console.error("Error en la acción deleteContact:", error);
				}
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
		}
	};
};

export default getState;
