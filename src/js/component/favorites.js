import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
const DropItem = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<a className="dropdown-item">{props.favorite.name}</a>
				<span className="dropdown-item" onClick={() => actions.deleteFavorites(props.favorite.name)}>
					<i className="far fa-trash-alt" />
				</span>
			</div>
		</>
	);
};
DropItem.proptypes = {
	favorite: PropTypes.object,
	index: PropTypes.number
};
export const Favorites = () => {
	const { store, actions } = useContext(Context);
	//let count = 0;
	return (
		<>
			<div className="dropdown">
				<button
					className="btn btn-info dropdown-toggle d-flex justify-content-between align-items-center"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					<span className="text-white disabled mx-2" />
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{store.favorites.map((item, index) => (
						<DropItem key={index} index={index} favorite={item} />
					))}
				</div>
			</div>
		</>
	);
};
