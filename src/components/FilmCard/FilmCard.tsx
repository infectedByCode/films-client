import { Film } from '../../ts/common/pageStates';

type FilmProps = { film: Film };

const FilmCard = ({ film }: FilmProps) => {
  return (
    <li className='bg-gray-100 shadow-lg' key={film.uid}>
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <p>Released in {+film.year}</p>
      <div className='grid grid-cols-3 gap-2'>
        {film.keywords &&
          film.keywords.split(',').map((keyword, i) => {
            return (
              <span className='bg-gray-300 p-1 m-1 rounded' key={i}>
                {keyword}
              </span>
            );
          })}
      </div>
    </li>
  );
};

export default FilmCard;
