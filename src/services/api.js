const dataApi = () => {
    return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json")
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.results.map((rick) => {
                return {
                    image: rick.image,
                    name: rick.name,
                    status: rick.status,
                    species: rick.species,
                    planet: rick.location.name,
                    episodes: rick.episode,
                    id: rick.id,
                };
            });
            return cleanData;
        });
};

export default dataApi;