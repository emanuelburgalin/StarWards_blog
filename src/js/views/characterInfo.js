import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardInfo = props => {
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
							{store.characters.length > 0 && (
								<>
									<h1>{store.characters[params.charactid].name}</h1>
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
					{store.characters.length > 0 && (
						<>
							<div className="col-2">
								<div className="mr-2">
									Name:
									<p>{store.characters[params.charactid].name}</p>
								</div>
							</div>
							<div className="col-2">
								<div className="mr-2">
									Birth Year:
									<p>{store.characters[params.charactid].birth_year}</p>
								</div>
							</div>
							<div className="col-2">
								<div className="mr-2">
									Gender:
									<p>{store.characters[params.charactid].gender}</p>
								</div>
							</div>
							<div className="col-2">
								<div className="mr-2">
									Height:
									<p>{store.characters[params.charactid].height}</p>
								</div>
							</div>
							<div className="col-2">
								<div className="mr-2">
									Skin Color:
									<p>{store.characters[params.charactid].skin_color}</p>
								</div>
							</div>
							<div className="col-2">
								<div className="">
									Eye Color:
									<p>{store.characters[params.charactid].eye_color}</p>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};
