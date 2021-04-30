import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const CardCharacter = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="col-4" style={{ display: "inline-block", float: "none" }}>
				<div className="card">
					<img
						src="https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/301686/301686_400x200.jpg"
						alt=""
						className="card-img-top"
					/>
					<div className="card-body">
						<h3 className="card-title">{props.character.name}</h3>
						<p className="card-text">Gender: {props.character.gender}</p>
						<p className="card-text">Hair-Color: {props.character.hair_color}</p>
						<p className="card-text">Eyes-Color: {props.character.eye_color}</p>
						<div className="d-flex justify-content-between align-items-center">
							<Link to={`/characters/${props.id}`}>
								<button className="btn btn-info">Learn More!</button>
							</Link>
							<button
								className="btn btn-warning"
								onClick={() => actions.addFavorites(event, props.character.name)}>
								<i className="far fa-heart text-white" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
CardCharacter.propTypes = {
	character: PropTypes.object,
	id: PropTypes.number
};
