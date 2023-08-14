import "./rental.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Rental(value) {
  const { setLikedItems, likedItems } = value;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(likedItems));
  }, [likedItems]);

  function handleLikeClick() {
    setLikedItems((prev) => {
      if (prev.some((item) => item === value.value.zpid)) {
        return prev.filter((item) => item !== value.value.zpid);
      }
      return [...prev, value.value.zpid];
    });
  }

  return (
    <div className="all-estate-container">
      <Link to={`../estate/${value.value.zpid}`}>
        <div className="place-box">
          <div id="place-picture-box">
            <img
              className="place-picture"
              src={`${value.value.imgSrc}`}
              alt=""
            />
            <div id="place-price-div">
              <h1 id="place-price-h1">{`${value.value.price.toLocaleString()}$`}</h1>
            </div>
          </div>
          <div id="rental-description-box">
            <h3 className="place-name">{`${value.value.city}, ${value.value.country}.`}</h3>
            <div id="rental-description-info">
              <div id="rental-description-bedroom-div">
                <h1 id="rental-description-bedroom">
                  {`${value.value.bedrooms} Bedrooms`}{" "}
                  <i className="fa fa-hotel"></i>
                </h1>
              </div>
              <div id="rental-description-bathroom-div">
                <h1 id="rental-description-bathroom">
                  {`${value.value.bathrooms} Bathrooms`}{" "}
                  <i className="fa fa-bath"></i>
                </h1>
              </div>
            </div>
            <div id="rental-description-area-div">
              <h1 id="rental-description-area">
                {`${Math.round(value.value.lotAreaValue)} ft² `}{" "}
                <i className="fa fa-home"></i>
              </h1>
            </div>
          </div>
        </div>
      </Link>
      <div id="heart-icon-div">
        <i
          id={
            likedItems.some((item) => item === value.value.zpid)
              ? "heart-icon-selected"
              : "heart-icon-notselected"
          }
          className="fa fa-heart"
          onClick={handleLikeClick}
        ></i>
      </div>
    </div>
  );
}
export default Rental;
