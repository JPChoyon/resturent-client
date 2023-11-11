import SectionHeader from "../../../Component/SectionHeader/SectionHeader";
import photo from "../../../assets/home/featured.jpg";

const ChefRecom = () => {
  return (
    <div>
      <SectionHeader title={"CHEF RECOMMENDS"} subTitle={'Should Try'}></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
        <div>
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[250px]"
                src={photo}
                alt="photo for chef recomended"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title block">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[250px]"
                src={photo}
                alt="photo for chef recomended"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title block">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[250px]"
                src={photo}
                alt="photo for chef recomended"
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title block">Caeser Salad</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecom;
