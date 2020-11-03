// const agendaSlug = "Tibisfly";
const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			// createContact: async data => {
			// 	let endpoint = await fetch("https://assets.breatheco.de/apis/fake/contact/Tibisay", {
			// 		method: "POST",
			// 		mode: "cors",
			// 		redirect: "follow",
			// 		headers: new Headers({
			// 			"Content-Type": "application/json"
			// 		}),
			// 		body: JSON.stringify({
			// 			full_name: data.name,
			// 			email: data.email,
			// 			agenda_slug: "Tibisay",
			// 			address: data.address,
			// 			phone: data.phone
			// 		})
			// 	});
			// 	endpoint = await endpoint.json();
			// },
			listContacts(slug) {
				const store = setStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/agenda/" + slug;
				const config = {
					method: "GET"
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ contacts: json });
					});
			},
			createContact(data) {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/";
				const config = {
					method: "POST",
					body: JSON.stringify({
						full_name: data.full_name,
						email: data.email,
						agenda_slug: "Tibisfly",
						address: data.address,
						phone: data.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().listContacts("Tibisfly");
					});
			},
			getContact(id) {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/:id";
				const config = {
					method: "GET"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						return json;
					});
			},
			deleteContact(id) {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/:id";
				const config = {
					method: "DELETE"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						return json;
					});
			},
			updateContact() {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/:id";
				const config = {
					method: "PUT",
					body: JSON.stringify({
						full_name: data.name,
						email: data.email,
						agenda_slug: "Tibisfly",
						address: data.address,
						phone: data.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				};
				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().listContacts("Tibisfly");
					});
			}
		}
	};
};
// evitar error de compatibilidad
export default getState;
