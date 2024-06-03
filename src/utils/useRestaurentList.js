import { useState, useEffect } from "react";
import { LIST_API } from "./constants";
const useRestaurentList = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(LIST_API);
    const json = await data.json();
    const restaurents =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurent(restaurents);
    setFilteredRestaurant(restaurents);
  };
  return { listOfRestaurent, filteredRestaurant, setFilteredRestaurant };
};

export default useRestaurentList;
