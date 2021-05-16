import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		data: {}
	});

	const { store } = useContext(Context);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((contact, key) => {
							return (
								<ContactCard
									data={contact}
									key={key}
									onDelete={() => setState({ showModal: true, data: contact })}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} data={state.data} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
