import Image from "next/image";
import getPokemon from "../getPokemon";

const CharmanderPage = async () => {
  const data = await getPokemon(4);
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

export default CharmanderPage;
