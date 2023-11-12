import { useEffect, useState } from "react";
import SectionHeader from "../../../../Component/SectionHeader/SectionHeader";
import MenuCard from "./MenuCard";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenus = data.filter((menu) => menu.category === "popular");
        setMenus(popularMenus);
      });
  }, [setMenus]);
  return (
    <div className="my-20">
      <SectionHeader
        title={"POPULAR MENU"}
        subTitle={"Check it out"}
      ></SectionHeader>
      <div className="grid md:grid-cols-2 gap-4 ">
        {menus.map((menu) => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default Menu;
