import RestaurantCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  /* Local state variable */
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.253641128441604&lng=73.14656797796486&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurent(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h1>
        Looks Like you are offline!! Please check your internet connection;
      </h1>
    );

  return listOfRestaurent?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body mb-2">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box border-2 m-10 rounded-lg items-center"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className=" bg-slate-400 p-1 rounded-sm"
            onClick={() => {
              const filteredRestaurant = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
          <button
          className="filtr-btn m-2 bg-slate-400 p-1 rounded-sm"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated restaurant
        </button>
        </div>
        
      </div>
      <div className="flex gap-8 flex-wrap ml-10">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurents/" + restaurant.info.id}
            className="link-wrapper"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
