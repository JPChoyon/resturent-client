import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Catagory from "./Catagory/Catagory";
import ChefRecom from "./ChefRecom/ChefRecom";
import Cheif from "./Cheif/Cheif";
import Feture from "./Feture/Feture";
import Menu from "./Menu/MenuCard/Menu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <Cheif></Cheif>
      <Menu></Menu>
      <CallUs></CallUs>
      <ChefRecom></ChefRecom>
      <Feture></Feture>
    </div>
  );
};

export default Home;
