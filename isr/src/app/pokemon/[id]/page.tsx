import { isPokemon } from "@/app/isPokemon";
import Image from "next/image";

const getPokemon = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  if (!isPokemon(data)) {
    throw new Error("Failed to fetch data");
  }

  return data;
};

const PokemonPage = async ({ params: { id } }: { params: { id: number } }) => {
  const data = await getPokemon(id);

  return (
    <>
      <Image
        src={data.sprites.front_default}
        alt={data.name}
        width="320"
        height="320"
      />
      {data.name}
    </>
  );
};

export default PokemonPage;
