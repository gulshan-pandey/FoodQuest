import { CDN_URL } from "../utils/constant";


const styleCard = {
    // inline css styling is done by making js objects
    backgroundColor: "lightblue",
  };
  

  const RestaurantCard = (props) => {               // functional component

     const { resObj } = props;
    
    const{name,cuisines,avgRating,costForTwo,sla,cloudinaryImageId} = resObj?.info     // destructured now they can be used by there name

    return (
      <div className="rest-card" style={styleCard}>
        <img
          className="rest-logo"
          alt="img"
          src={CDN_URL+cloudinaryImageId ?? 'not found'}
        />

        <div className="rest-info">
         <h3>{name}</h3>
        <h4>{cuisines?.join(',')}</h4>
        <h4>🌟{avgRating }</h4>
        <h4>🌟{costForTwo }</h4>
        <h4>⌛{sla?.slaString }</h4>
        </div>
      </div>
    );
  };    
   



export default RestaurantCard;