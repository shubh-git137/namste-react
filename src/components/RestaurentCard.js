import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  return (
    <div
      className="justify-between flex-wrap w-[250px]  border-2 rounded-xl transform transition-transform hover:scale-95"
    >
      <img
        className="w-[100%] h-40 object-cover rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt="res-image"
      />
      <h3 className=" mt-1 text-lg font-bold">{name}</h3>
      <p><b className=" bg-orange-300">★</b> {avgRating}</p>
      <h4>{cuisines.slice(0, 3).join(",")}</h4>
      {/* <h4>{costForTwo}</h4> */}
      {/* <h4>{resData.info.sla.slaString}</h4> */}
    </div>
  );
};

export default RestaurantCard;
