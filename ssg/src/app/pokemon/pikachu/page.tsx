import Image from "next/image";
import getPokemon from "../getPokemon";

const PikachuPage = async () => {
  const data = await getPokemon(25);
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

export default PikachuPage;
