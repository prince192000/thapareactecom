import HeroSection from "./Components/HeroSection";
import { useProductContext } from "./Context/Productcontext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Prince Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;