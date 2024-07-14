import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonUrlDetail, setPokemonUrlDetail] = useState(null);
  const [pokemonDetail, setPokemonDetail] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("🚀 ~ Pokemon ~ pokemonUrlDetail:", pokemonUrlDetail);

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch("https://pokeapi.co/api/v2/pokemon")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPokemons(data.results);
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error);
  //         setLoading(false);
  //       });
  //   }, []);

  //   if (loading) {
  //     return <h1>Loading...</h1>;
  //   }

  //   if (error) {
  //     return <h1>Error: {error.message}</h1>;
  //   }
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results); // TODO: danh sach pokemon
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!pokemonUrlDetail) return;

    fetch(pokemonUrlDetail)
      .then((res) => res.json())
      .then((data) => {
        setPokemonDetail(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [pokemonUrlDetail]);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold">Pokemon List</h1>
      <div className="grid grid-cols-3 gap-4">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.name}
            className="bg-gray-700 p-4 rounded flex items-center justify-center"
            onClick={() => {
              console.log("CLICK detail");
              setPokemonUrlDetail(pokemon.url);
            }}
          >
            <p className="text-white">{pokemon.name}</p>
          </div>
        ))}
      </div>
      {/* pokemon detail */}
      {pokemonDetail && (
        <div className="mt-5">
          <ul>
            <li>ID: {pokemonDetail?.id}</li>
            <li>Name: {pokemonDetail?.name}</li>
            <li>Height: {pokemonDetail?.height}</li>
            <li>Weight: {pokemonDetail?.weight}</li>
            <li>Base Experience: {pokemonDetail?.base_experience}</li>
            <li>
              <img src={pokemonDetail?.sprites?.front_default} alt="pokemon" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
