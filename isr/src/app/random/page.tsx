const PokemonPage = async () => {
  const res = await fetch("https://randomuser.me/api/", {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  const person = data.results[0];
  const name = `${person.name.first} ${person.name.last}`;

  return name;
};

export default PokemonPage;
