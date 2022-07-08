import profile from "../../../assets/images/profile-pic.jpg";
import flag from "../../../assets/images/flag.jpg";
import { NavLink } from "react-router-dom";

function Card() {
  return (
    <>
      <div className="cards mt--32 flex flex--center">
        <NavLink to="/player-preview">
          <div className="card">
            <div className="card__border">
              <div className="card__wrap">
                <img src={profile} alt="" className="card__image" />
                <img src={flag} alt="" className="card__flag" />
              </div>
            </div>
            <div className="card__name type--bangers type-400 type-32 type-white pt--16">
              Ivan
            </div>
            <div className="card__about type--poppins type-400 type-16 type-white pt--8">
              MVP
            </div>
          </div>
        </NavLink>
        <NavLink to="/player-preview">
          <div className="card">
            <div className="card__border">
              <div className="card__wrap">
                <img src={profile} alt="" className="card__image" />
                <img src={flag} alt="" className="card__flag" />
              </div>
            </div>
            <div className="card__name type--bangers type-400 type-32 type-white pt--16">
              Ivan
            </div>
            <div className="card__about type--poppins type-400 type-16 type-white pt--8">
              MVP
            </div>
          </div>
        </NavLink>
        <NavLink to="/player-preview">
          <div className="card">
            <div className="card__border">
              <div className="card__wrap">
                <img src={profile} alt="" className="card__image" />
                <img src={flag} alt="" className="card__flag" />
              </div>
            </div>
            <div className="card__name type--bangers type-400 type-32 type-white pt--16">
              Ivan
            </div>
            <div className="card__about type--poppins type-400 type-16 type-white pt--8">
              MVP
            </div>
          </div>
        </NavLink>
        <NavLink to="/player-preview">
          <div className="card">
            <div className="card__border">
              <div className="card__wrap">
                <img src={profile} alt="" className="card__image" />
                <img src={flag} alt="" className="card__flag" />
              </div>
            </div>
            <div className="card__name type--bangers type-400 type-32 type-white pt--16">
              Ivan
            </div>
            <div className="card__about type--poppins type-400 type-16 type-white pt--8">
              MVP
            </div>
          </div>
        </NavLink>
        <NavLink to="/player-preview">
          <div className="card">
            <div className="card__border">
              <div className="card__wrap">
                <img src={profile} alt="" className="card__image" />
                <img src={flag} alt="" className="card__flag" />
              </div>
            </div>
            <div className="card__name type--bangers type-400 type-32 type-white pt--16">
              Ivan
            </div>
            <div className="card__about type--poppins type-400 type-16 type-white pt--8">
              MVP
            </div>
          </div>
        </NavLink>
        <NavLink to="/player-not-found">
          <div className="card">
            <div className="card__border">
              <div className="card__wrap">
                <img src={profile} alt="" className="card__image" />
                <img src={flag} alt="" className="card__flag" />
              </div>
            </div>
            <div className="card__name type--bangers type-400 type-32 type-white pt--16">
              John
            </div>
            <div className="card__about type--poppins type-400 type-16 type-white pt--8">
              MVP
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default Card;
