import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Catagory from "./Catagory/Catagory";
import ChefRecom from "./ChefRecom/ChefRecom";
import Cheif from "./Cheif/Cheif";
import Feture from "./Feture/Feture";
import Menu from "./Menu/MenuCard/Menu";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Catagory></Catagory>
      <Cheif></Cheif>
      <Menu></Menu>
      <CallUs></CallUs>
      <ChefRecom></ChefRecom>
      <Feture></Feture>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
