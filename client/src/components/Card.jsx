import { Link } from "react-router-dom";

const Card = ({ image }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${image.id}`}>
        <img src={image.img} alt="image" className="img" />
      </Link>
    </div>
  );
};

export default Card;
