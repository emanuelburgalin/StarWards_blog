const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				let result = await fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					//.then(data => console.log(data))
					.then(data => {
						setStore({ ...getStore(), characters: data.results });
					})
					.catch(err => console.log(err));
			},
			getPlanets: async () => {
				let result = await fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					//.then(data => console.log(data.results))
					.then(data => {
						setStore({ ...setStore, planets: data.results });
					})
					.catch(err => console.log(err));
			},
			addFavorites: (event, name) => {
				/*getStore().characters.map(item => {
					if (item.name === name) {
						setStore({ ...getStore(), favorites: { name } });
					}
                });*/
				setStore({ ...getStore(), favorites: [...getStore().favorites, { name }] });
			},
			deleteFavorites: name => {
				const updateFav = getStore().favorites.filter(item => {
					return item.name != name;
				});
				setStore({ favorites: updateFav });
			}
		}
	};
};

export default getState;
