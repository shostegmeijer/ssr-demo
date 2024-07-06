interface Pokemon {
  sprites: {
    front_default: string;
  };
  name: string;
}

export const isPokemon = (data: unknown): data is Pokemon => {
  return (
    typeof data === "object" &&
    data !== null &&
    "sprites" in data &&
    "name" in data
  );
};
