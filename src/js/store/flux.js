const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
			agenda_slug: "Tibisfly"
		},
		actions: {
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
				const store = getStore();

				const endpoint = "https://assets.breatheco.de/apis/fake/contact/";
				const config = {
					method: "POST",
					body: JSON.stringify({
						full_name: data.full_name,
						email: data.email,
						agenda_slug: store.agenda_slug,
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
						getActions().listContacts(store.agenda_slug);
						console.log("se ha guardado en Tibisfly");
						alert("Your contact was created!");
					});
			},
			getContact(id) {
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/" + slug + id;
				const config = {
					method: "GET"
				};

				return fetch(endpoint, config).then(response => {
					return response.json();
				});
			},
			deleteContact(id) {
				const store = getStore();
				const endpoint = "https://assets.breatheco.de/apis/fake/contact/" + id;
				const config = {
					method: "DELETE"
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().listContacts(store.agenda_slug);
						return json;
					});
			},
			async updateContact(id, data) {
				const store = getStore();
				const endpoint = (await "https://assets.breatheco.de/apis/fake/contact/") + id;
				const config = {
					method: "PUT",
					body: JSON.stringify({
						full_name: data.name,
						email: data.email,
						agenda_slug: store.agenda_slug,
						address: data.address,
						phone: data.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				};
				await fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().listContacts(store.agenda_slug);
					});
			}
		}
	};
};
// evitar error de compatibilidad
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
// Alejandro en la mentoría del día 06/11/2020 me explicó que el fetch devuelve una promesa, vendría siendo cuando en el .then tenemos dentro de los paréntesis el response, que puede devolver cuantos ".then" quieras, con lo que quieras y EN DÓNDE QUIERAS, porque el ejemplo fue agregar en el componente AddContacts que el update Contact me devuelva data.id en json
export default getState;
