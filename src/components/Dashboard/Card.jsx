import chart from "../../assets/logo/diagram.png";
const Card = ({ data, title, color }) => {
  return (
    <div className="">
      <div
        className={`flex ${color} py-3 px-8 items-center gap-3 justify-between  rounded-lg shadow`}
      >
        <div className="flex flex-col justify-center">
          <p className="text-sm">{title}</p>
          <h1 className="text-3xl">{data}</h1>
        </div>
        <div className="mt-2">
          <img src={chart} alt="" className="w-10" />
        </div>
      </div>
    </div>
  );
};
export default Card;
