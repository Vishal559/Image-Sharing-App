import Card from "../components/Card";
import { images } from "../data";

const Home = () => {
  return (
    <div className="home">
      {images.map((image) => (
        <Card key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Home;
