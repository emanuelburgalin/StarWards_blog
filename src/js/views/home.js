import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { CardCharacter } from "../component/cardCharacter";
import { CardPlanet } from "../component/cardPlanet";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorites);
	return (
		<>
			<div className="container">
				<div className="mt-4 py-3">
					<h1 className="text-white" style={{ textShadow: "0 0 8px #ffc107" }}>
						Characters
					</h1>
				</div>

				<div className="row flex-nowrap py-2" style={{ overflowX: "auto" }}>
					{store.characters.map((item, index) => (
						<CardCharacter key={index} id={index} character={item} />
					))}
				</div>

				<div className="mt-4 py-3">
					<h1 className="text-white" style={{ textShadow: "0 0 8px #ffc107" }}>
						Planets
					</h1>
				</div>

				<div className="row flex-nowrap py-2" style={{ overflowX: "auto" }}>
					{store.planets.map((item, index) => (
						<CardPlanet key={index} id={index} planet={item} />
					))}
				</div>
			</div>
		</>
	);
};
