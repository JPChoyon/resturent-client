import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Catagory from "./Catagory/Catagory";
import Cheif from "./Cheif/Cheif";
import Menu from "./Menu/MenuCard/Menu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <Cheif></Cheif>
      <Menu></Menu>
      <CallUs></CallUs>
    </div>
  );
};

export default Home;
