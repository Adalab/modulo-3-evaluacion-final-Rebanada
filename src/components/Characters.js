import '../styles/layout/Characters.scss';
import {Link} from 'react-router-dom';



const Characters = (props) => {
  return (
    <li>
      <Link to={`cartoon/${props.cartoon.id}`} className='link'>
        <article>
          <img
            src={props.cartoon.image}
            alt={`Foto de ${props.cartoon.name}`}
            
          />
          <div>
            <h3>{props.cartoon.name}</h3>
            <p>{props.cartoon.species}</p>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default Characters;