const ShopCard = ({ menu }) => {
  const { name, image, price, recipe } = menu;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[250px]"
            src={image}
            alt="photo for chef recomended"
          />
          <p className="absolute top-0 right-0 mr-5 px-5  py-2 bg-slate-900 text-white">
            ${price}
          </p>
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title block">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-2 ">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
