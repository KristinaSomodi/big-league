import Nav from "../components/Nav";
import { NavLink } from "react-router-dom";

function PlayerNotFound() {
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
        <div>
          <div className="text flex flex--center type--bangers type-400 type-240 type-white">
            404
          </div>
          <div className="text text__border flex flex--center type--bangers type-400 type-160">
            PLAYER NOT FOUND
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerNotFound;
