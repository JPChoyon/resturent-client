import "./SectionHeader.css";
const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="font w-4/12 mx-auto text-center my-10">
      <p className="title-pera">--- {subTitle} ---</p>
      <h1 className="title-header border-y-4 py-2">{title}</h1>
    </div>
  );
};

export default SectionHeader;
