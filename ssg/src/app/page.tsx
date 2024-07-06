import Link from "next/link";

export default async function Home() {
  return (
    <ul>
      <li>
        <Link href="/pokemon/pikachu">Pikachu</Link>
      </li>
      <li>
        <Link href="/pokemon/bulbasaur">Bulbasaur</Link>
      </li>
      <li>
        <Link href="/pokemon/charmander">Charmander</Link>
      </li>
      <li>
        <Link href="/pokemon/squirtle">Squirtle</Link>
      </li>
    </ul>
  );
}
