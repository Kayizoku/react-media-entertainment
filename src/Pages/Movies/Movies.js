import axios from "axios";
import { useState, useEffect } from "react";
import MediaContent from "../../components/MediaContent/MediaContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);

    fetchMovies();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Movies</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <MediaContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              overview={c.overview}
              date={c.release_date || c.first_air_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Movies;
