import Image from "next/image";
import getPokemon from "../getPokemon";

const SquirtlePage = async () => {
  const data = await getPokemon(7);
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

export default SquirtlePage;
