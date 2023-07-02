import { Link } from 'react-router-dom';
import '../styles/layout/CharacterCard.scss';

const CharacterCard = (props) => {
  return (
    <main>
      <article>
        <img src={props.cartoon.image} alt={`Foto de ${props.cartoon.name}`} />
        <div>
          <h2>{props.cartoon.name}</h2>
          <ul>
            <li>Estado: {props.cartoon.status}</li>
            <li>Especie: {props.cartoon.species}</li>
            <li>Planeta: {props.cartoon.planet}</li>
            <li>Episodios: {props.cartoon.episodes.length}</li>
          </ul>
        </div>
      </article>
      <Link to={'/'}>Volver</Link>
    </main>
  );
};

export default CharacterCard;
