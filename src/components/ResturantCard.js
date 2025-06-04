import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="restro-image"
        alt="resturant image"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3> {name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <div className="res-details">
        <span className="res-rating">⭐{avgRating}</span>
        <span className="res-timing">{sla.deliveryTime} mins</span>
      </div>
    </div>
  );
};

export default ResturantCard;
