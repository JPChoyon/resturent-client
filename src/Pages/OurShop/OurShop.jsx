import ComponentHeader from "../SharedPage/ComponentHeader/ComponentHeader";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ourshopImg from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../../Hooks/Menu/useMenu";
import ShopCard from "./ShopCard/ShopCard";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const title = ["Salad", "Pizza", "Soups", "Desserts", "Drinks"];

  const [menus] = useMenu([]);
  const dessertMenus = menus.filter((menu) => menu.category === "dessert");
  const pizzaMenus = menus.filter((menu) => menu.category === "pizza");
  const saladMenus = menus.filter((menu) => menu.category === "salad");
  const soupMenus = menus.filter((menu) => menu.category === "soup");
  const drinksMenus = menus.filter((menu) => menu.category === "drinks");
  return (
    <div>
      <ComponentHeader
        img={ourshopImg}
        headingText={"our shop"}
        subHeadingtext={"Would you like to try a dish?"}
      ></ComponentHeader>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="mx-auto flex justify-center items-center my-10">
          {title.map((item, index) => (
            <Tab
              key={index}
              className={`p-3 ${
                tabIndex === index
                  ? "text-[#bb8506] border-b-[#bb8506]  cursor-pointer "
                  : " text-red-500 cursor-pointer"
              }`}
            >
              {item}
            </Tab>
          ))}
        </TabList>
        <TabPanel>
          <div className="md:grid md:grid-cols-3 gap-4">
            {saladMenus.map((menu) => (
              <ShopCard key={menu} menu={menu}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:grid md:grid-cols-3 gap-4">
            {pizzaMenus.map((menu) => (
              <ShopCard key={menu} menu={menu}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:grid md:grid-cols-3 gap-4">
            {soupMenus.map((menu) => (
              <ShopCard key={menu} menu={menu}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:grid md:grid-cols-3 gap-4">
            {dessertMenus.map((menu) => (
              <ShopCard key={menu} menu={menu}></ShopCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:grid md:grid-cols-3 gap-4">
            {drinksMenus.map((menu) => (
              <ShopCard key={menu} menu={menu}></ShopCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
