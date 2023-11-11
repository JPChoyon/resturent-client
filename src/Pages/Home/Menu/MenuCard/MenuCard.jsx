const MenuCard = ({ menu }) => {
  const { name, image, price, recipe } = menu;
  return (
    <div className="flex items-center gap-4 justify-center">
      <div>
        <div>
          <img
            className="w-16"
            style={{ borderRadius: "0px 200px 200px 200px" }}
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="w-96">
        <p className="font-bold text-xl ">{name}----------</p>
        <p>{recipe}</p>
      </div>
      <div className="text-yellow-400">$ {price}</div>
    </div>
  );
};

export default MenuCard;
