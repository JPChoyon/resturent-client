
import SectionHeader from "../../../../Component/SectionHeader/SectionHeader";
import MenuCard from "./MenuCard";
import useMenu from "../../../../Hooks/Menu/useMenu";

const Menu = () => {
  const [menus] = useMenu([]);
  const popularMenus = menus.filter((menu) => menu.category === "popular");
  
  return (
    <div className="my-20">
      <SectionHeader
        title={"POPULAR MENU"}
        subTitle={"Check it out"}
      ></SectionHeader>
      <div className="grid md:grid-cols-2 gap-4 ">
        {popularMenus.map((menu) => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default Menu;
