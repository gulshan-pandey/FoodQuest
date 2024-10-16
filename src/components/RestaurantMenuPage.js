import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Shim from "./Shimmer";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId}= useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
      const data = await fetch(
        MENU_API + resId
      );
      const json = await data.json();
      setResInfo(json);
      console.log(json);
   
  };

  if (!resInfo) {
    return <Shim />;
  }
  const { name, cuisines, avgRatingString, costForTwoMessage } =
    resInfo?.data?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || "not";
  // console.log(itemCards);
  return (
    <div className="menu">
      <h1>Menu</h1>
      <h2>{name}</h2>
      <ul>
        {itemCards.map((item) => (
          <ul key={parseInt(item?.card?.info?.id)}>  
            <li>{item?.card?.info?.name}</li>        
            <li>{item?.card?.info?.finalPrice/100 || item?.card?.info?.price/100}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
