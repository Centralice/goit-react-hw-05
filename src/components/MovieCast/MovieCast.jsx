import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchCast } from "../../services/api";

const MovieCast = () => {
  const params = useParams();

  const [cast, setCast] = useState([]);
  useEffect(() => {
    try {
      const getCast = async () => {
        const castMembers = await fetchCast(params.movieID);
        setCast(castMembers);
      };
      getCast();
    } catch (error) {
      console.log("ERROR");
    }
  }, [params.movieID]);

  if (cast.data) {
    return (
      <ul className={s.credits}>
        {cast.data.cast.map((person) => (
          <li>
            <div>
              <p>
                <strong>{person.name}</strong>
              </p>
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
              />
              <p>{person.character}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
};

export default MovieCast;
