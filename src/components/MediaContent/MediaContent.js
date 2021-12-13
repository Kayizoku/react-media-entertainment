import { Badge } from "@mui/material";
import { img_300, unavailable } from "../../config/config";
import "./MediaContent.css";

const setRatingClass = (score) => {
  if (score >= 8 || score >= 7.5) {
    return "green";
  } else if (score >= 6 || score >= 6.5) {
    return "orange";
  } else {
    return "red";
  }
};
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
    <div className="media">
      {/* <Badge className="badgeIcon" badgeContent={vote_average} /> */}
      <span className={`tag ${setRatingClass(vote_average)}`}>
        {vote_average}
      </span>
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Show" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
      <div className="media-overview">
        <h2>Synopsis:</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MediaContent;
