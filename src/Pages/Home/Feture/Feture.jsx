import SectionHeader from "../../../Component/SectionHeader/SectionHeader";
import photo from '../../../assets/home/featured.jpg'
import './Feture.css'

const Feture = () => {
  return (
    <div className="background bg-fixed">
      <div className="py-8">
        <SectionHeader
          title={"FROM OUR MENU"}
          subTitle={"Check it out"}
        ></SectionHeader>
      </div>
      <div className="md:flex gap-5 justify-center items-center px-20 pb-20 ">
        <div>
          <img className="rounded-xl " src={photo} alt="" />
        </div>
        <div className="text-white space-y-3">
          <p>March 20, 2025</p>
          <h2 className="uppercase">WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline btn-warning text-white">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Feture;
