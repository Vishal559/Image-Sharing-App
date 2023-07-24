import { useLocation } from "react-router";
import { images } from "../data";

const Image = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const post = images.find((p) => p.id.toString() === path);

  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
    </div>
  );
};

export default Image;
