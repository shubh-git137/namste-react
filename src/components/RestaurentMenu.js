import { useEffect, useState } from "react";

const RestaurentMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  useEffect( () => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    //fetch the data
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6284537&lng=77.3769437&restaurantId=137369&catalog_qa=undefined&submitAction=ENTER"
    );

    //convert data to json
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };
  // const {name='',cuisines=''} = resInfo?.cards[0]?.card?.card?.info;
  return (
    <div className="menu">
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      {/* 
          const arr = ["Hello", "Rohit", "Tiwari"];
          console.log(arr.join());
          // output:  Hello, Rohit, Tiwari
      */}

      <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}- {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
      
    </div>
  );
};

export default RestaurentMenu;
