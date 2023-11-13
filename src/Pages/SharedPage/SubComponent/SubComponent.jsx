// eslint-disable-next-line react/prop-types
const SubComponent = ({ img, subHeadingtext, headingText }) => {
  
  return (
    <div>
      <div
        className=" bg-fixed h-[300px]  mb-10 p-20"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className=" flex h-full items-center ">
          <div className="bg-black bg-opacity-30 text-center w-8/12 mx-auto py-8 px-6 rounded-xl space-y-4">
            <h1 className=" uppercase text-white text-5xl font-semibold ">{headingText}</h1>
            <p className="  text-white ">{subHeadingtext}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubComponent;
