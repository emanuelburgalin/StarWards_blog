import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetInfo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col">
						<img src="https://picsum.photos/800/600" alt="" />
					</div>
					<div className="card col">
						<div className="card-header bg-white">
							{store.planets.length > 0 && (
								<>
									<h1>{store.planets[params.planetid].name}</h1>
								</>
							)}
						</div>
						<div className="card-body">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id odio, esse, distinctio
							quibusdam nemo qui harum consequatur vero asperiores neque perferendis magnam, itaque quas
							incidunt recusandae expedita nesciunt velit?
						</div>
					</div>
				</div>
				<div className="row text-center my-2 py-2 border-top border-warning text-warning">
					{store.planets.length > 0 && (
						<>
							<div className="col-2">
								<div className="mr-2">
									Name:
									<p>{store.planets[params.planetid].name}</p>
								</div>
							</div>
							<div className="col-2">
								<div className="mr-2">
									Climate:
									<p>{store.planets[params.planetid].climate}</p>
								</div>
							</div>
							<div className="col-2">
								<div className="mr-2">
									Population:
									<p>{store.planets[params.planetid].population}</p>
								</div>
							</div>
							<div className="col-2">
								<div className="mr-2">
									Orbital Period:
									<p>{store.planets[params.planetid].orbital_period}</p>
								</div>
							</div>
							<div className="col-2">
								<div className="mr-2">
									Rotation Period:
									<p>{store.planets[params.planetid].rotation_period}</p>
								</div>
							</div>
							<div className="col-2">
								<div className="">
									Diameter:
									<p>{store.planets[params.planetid].diameter}</p>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};
