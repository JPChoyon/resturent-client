// eslint-disable-next-line react/prop-types
const ComponentHeader = ({ img, headingText, subHeadingtext }) => {
  return (
    <div>
      <div
        className=" bg-fixed h-[550px]  mb-10 md:p-20"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className=" flex h-full items-center ">
          <div className="uppercase py-20 bg-black bg-opacity-30 text-center w-8/12 mx-auto md:px-6 rounded-xl space-y-4">
            <h1 className=" text-white text-5xl font-semibold ">{headingText}</h1>
            <p className=" text-white ">{subHeadingtext}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentHeader;
