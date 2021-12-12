import { img_300, unavailable } from "../../config/config";

const MediaContent = ({
  id,
  poster,
  title,
  overview,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <div>
      <img src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Show" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  );
};

export default MediaContent;
