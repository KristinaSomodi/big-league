import Nav from "../components/Nav";
import profile from "../../../assets/images/profile-pic.jpg";
import flag from "../../../assets/images/flag.jpg";
import { NavLink } from "react-router-dom";

function PlayerPreview() {
  return (
    <div className="l">
      <Nav></Nav>
      <div className="l__main">
        <NavLink to="/">
          <div className="back">
            <button className="btn btn--primary">
              <i className="icon icon--base icon--back icon--black"></i>
            </button>
            <div></div>
            <div className="type--poppins type-500 type-16 type-white ml--16">
              Back
            </div>
          </div>
        </NavLink>
        <div className="flex flex--center">
          <div className="card ">
            <div className="card__border">
              <div className="card__wrap">
                <img src={profile} alt="" className="card__image" />
                <img src={flag} alt="" className="card__flag" />
              </div>
            </div>
            <div className="card__name type--bangers type-400 type-80 type-white pt--16">
              Ivan
            </div>
            <div className="card__about type--bangers type-400 type-32 type-white pt--8">
              MVP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerPreview;
