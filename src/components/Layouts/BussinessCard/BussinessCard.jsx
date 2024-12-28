import { Header } from "../Header/Header";
import "./BussinesCard.css";

export const BusinessCard = ({ name, title, email, phone, imageUrl }) => {
	return (
		<>
			<Header />
			<div className="business-card">
				<img src={imageUrl} alt={`Foto de ${name}`} />
				<h3>{name}</h3>
				<p className="title">{title}</p>
				<p className="contact">
					Email: <a href={`mailto:${email}`}>{email}</a>
				</p>
				<p className="contact">
					Teléfono: <a href={`tel:${phone}`}>{phone}</a>
				</p>
			</div>
		</>
	);
};
