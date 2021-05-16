const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
			agenda_slug: "Fran-agend"
		},
		actions: {
			listContacts() {
				const store = getStore();

				const endpoint = "https://assets.breatheco.de/apis/fake/contact/agenda/" + store.agenda_slug;
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
						full_name: data.fullName,
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
						console.log("se ha guardado en Fran-agend");
						alert("Your contact was created!");
					});
			},
			getContact(id) {
				const store = getStore();
				const endpoint = `https://assets.breatheco.de/apis/fake/contact/${store.agenda_slug}/${id}`;
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
				console.log(data);
				const store = getStore();
				const endpoint = (await "https://assets.breatheco.de/apis/fake/contact/") + id;
				const config = {
					method: "PUT",
					body: JSON.stringify({
						full_name: data.fullName,
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

export default getState;
