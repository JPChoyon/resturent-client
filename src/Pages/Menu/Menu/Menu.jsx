import { Helmet } from "react-helmet-async";
import ComponentHeader from "../../SharedPage/ComponentHeader/ComponentHeader";
import headerImg from "../../../assets/menu/banner3.jpg";
import SubComponent from "../../SharedPage/SubComponent/SubComponent";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionHeader from "../../../Component/SectionHeader/SectionHeader";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      {/* header  */}
      <ComponentHeader
        img={headerImg}
        headingText={"Our Menu"}
        subHeadingtext={"Would you like to try a dish?"}
      ></ComponentHeader>
      {/* todays offer */}
      <SectionHeader title={"today's offer"} subTitle={"Don't Miss"}></SectionHeader>
      <SubComponent
        img={dessertImg}
        headingText={"desserts"}
        subHeadingtext={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SubComponent>

      <SubComponent
        img={pizzaImg}
        headingText={"pizzas"}
        subHeadingtext={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SubComponent>
      <SubComponent
        img={saladImg}
        headingText={"salads"}
        subHeadingtext={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SubComponent>
      <SubComponent
        img={soupImg}
        headingText={"soups"}
        subHeadingtext={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SubComponent>
    </div>
  );
};

export default Menu;
