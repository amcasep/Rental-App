import house from "../../Data/data.json";
import { Link, useParams } from "react-router-dom";
import {useState} from "react" 
import "./HouseDetails.css";

function HouseDetails() {
  const { houseId } = useParams();


  const houseInfo = house.find((element) => {
    return element.id == houseId;
  });

  if (!houseInfo) {
    return (
      <div className="house-details">
        <h1>House Not Found</h1>
        <p>The requested house details could not be found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }


  return (
    <section className="house-details">
      <h1>{houseInfo.name}</h1>

      {houseInfo.picture_url ? (
        <img src={houseInfo.picture_url.url} />
      ) : (
        <img src="https://dummyimage.com/600x400/000/fff" />
      )}

      <h3>Property type: {houseInfo.property_type}</h3>
      <h3>Accommodates: {houseInfo.accommodates}</h3>
      <h3>Bedrooms: {houseInfo.bedrooms}</h3>
      <h3>Rating: {houseInfo.review_scores_rating}</h3>
      <h3>Price: {houseInfo.price} €</h3>

      <p>Description: {houseInfo.description}</p>

      <br />
      <Link className="link-button" to="/">
        Home page
      </Link>
    </section>
  );
}

export default HouseDetails;
