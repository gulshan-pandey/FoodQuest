import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shim from "./Shimmer";
import { Link } from "react-router-dom";


// we should always use keys for every component in react
// key is used to identify the element in the DOM also we should not use insex as the key ,its not recommended as the order of the elements can change. this will depricate performance

// not using keys(not accepted) <<<< index as a key   <<<< unique id(as a key)(best practice)  😂😂😂

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //earlier dataSet was there in default....  inside the () we give the default value of the varible {listOfRestaurants} for this example...  it is array destructuring
  const [SearchedlistOfRestaurants, setSearchListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  // whenever state variable updates,react triggers reconcilation and re renders the conponent
  const fetchdata = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    ); //this will re-render and update the list
    setSearchListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const [searchText, setsearchText] = useState("");

  {
    /* rendering the shimmer effect while page loads...*/
  }

  return listOfRestaurants.length === 0 ? (
    <Shim />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value); // React is rerendering whole page on every change
            }}
          />
          <button
            onClick={() => {
              //filter the restraunt card and update the UI
              const searchedList = listOfRestaurants.filter((res) =>
                res?.info?.cuisines?.some((item) =>
                  item.toLowerCase().includes(searchText.toLowerCase())
                )
              );
              setSearchListOfRestaurants(searchedList); // state will update
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4.4
            );
            setSearchListOfRestaurants(filteredList); // state will update
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {/* <RestaurantCard resObj = {dataSet[1]}/> */}
        {SearchedlistOfRestaurants.map((restaurant, index) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <RestaurantCard resObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
