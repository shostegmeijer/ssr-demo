import Image from "next/image";
import getPokemon from "../getPokemon";

const BulbasaurPage = async () => {
  const data = await getPokemon(1);
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

export default BulbasaurPage;
