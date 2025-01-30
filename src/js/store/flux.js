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
			createContact: async (newContact) => {

			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			const raw = JSON.stringify({
				"name": "juan",
				"phone": "09838974",
				"email": "pepita@gmail.com",
				"address": "dublin"
			});

			const requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
			};

			try {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/contactos4geeks/contacts", requestOptions);
				const result = await response.json();
			} catch(error) {
				console.error(error);
			};
		},

			//   borrar contactos

			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/contactos4geeks/contacts/${id}`, {
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
			// traer la lista (siempre)
			getContactList: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/contactos4geeks")
					if (!response.ok) {
						console.error("error en la respuesta")
					}
					const data = await response.json()
					setStore({ contacto: data.contacts })
				} catch (error) {
					console.error("error al hacer el fetch")

				}
			},
		}
	};
};

export default getState;
