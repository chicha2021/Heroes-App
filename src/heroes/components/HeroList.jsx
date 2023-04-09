import { getHeroeByPublisher } from "../helpers/getHeroeByPublisher";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroeByPublisher(publisher);

  return (
    <ul>
      {heroes?.map((e) => (
          <li key={e.id}>{e.superhero}</li>
      ))}
    </ul>
  );
};
