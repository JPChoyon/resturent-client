import { Helmet } from "react-helmet-async";
import ComponentHeader from "../../SharedPage/ComponentHeader/ComponentHeader";
import headerImg from "../../../assets/menu/banner3.jpg";
import SubComponent from "../../SharedPage/SubComponent/SubComponent";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import SectionHeader from "../../../Component/SectionHeader/SectionHeader";
import useMenu from "../../../Hooks/Menu/useMenu";
import MenuCard from "../../Home/Menu/MenuCard/MenuCard";

const Menu = () => {
  const [menus] = useMenu([]);
  const offeredMenus = menus.filter((menu) => menu.category === "offered");
  const dessertMenus = menus.filter((menu) => menu.category === "dessert");
  const pizzaMenus = menus.filter((menu) => menu.category === "pizza");
  const saladMenus = menus.filter((menu) => menu.category === "salad");
  const soupMenus = menus.filter((menu) => menu.category === "soup");
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
      <SectionHeader
        title={"today's offer"}
        subTitle={"Don't Miss"}
      ></SectionHeader>
      <div className="grid md:grid-cols-2 my-8 gap-4 ">
        {offeredMenus.map((menu) => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
      <SubComponent
        img={dessertImg}
        headingText={"desserts"}
        subHeadingtext={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SubComponent>
      <div className="grid md:grid-cols-2 my-8 gap-4 ">
        {dessertMenus.map((menu) => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>

      <SubComponent
        img={pizzaImg}
        headingText={"pizzas"}
        subHeadingtext={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SubComponent>
      <div className="grid md:grid-cols-2 my-8 gap-4 ">
        {saladMenus.map((menu) => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
      <SubComponent
        img={saladImg}
        headingText={"salads"}
        subHeadingtext={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></SubComponent>
      <div className="grid md:grid-cols-2 my-8 gap-4 ">
        {soupMenus.map((menu) => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
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
