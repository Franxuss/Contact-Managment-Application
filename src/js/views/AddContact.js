import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = props => {
	const { actions } = useContext(Context);

	const params = useParams();

	const [data, setData] = useState({
		email: "",
		phone: "",
		fullName: "",
		address: ""
	});

	const handleChange = event => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">{params.id ? "Update" : "Create New Contact"}</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={handleChange}
							value={data.fullName}
							name="fullName"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={handleChange}
							value={data.email}
							name="email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>

						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={handleChange}
							value={data.phone}
							name="phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={handleChange}
							value={data.address}
							name="address"
						/>
					</div>
					<Link
						to="/"
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							if (params.id) {
								actions.updateContact(params.id, data);
							} else {
								actions.createContact(data);
							}
						}}>
						{params.id ? "Update" : "Save"}
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
