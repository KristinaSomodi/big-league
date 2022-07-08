import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="nav">
        <NavLink to="/">
          <div className="nav__logo type--bangers type-32 ml--165">
            <div>BIG</div>
            <div>LEAGUE</div>
          </div>
        </NavLink>
        <div className="nav__location type--poppins type-white type-500">
          Home
          <div className="nav__location--line"></div>
        </div>
        <NavLink to="/add-player">
          <button className="btn btn--primary btn--m type--poppins type-500 type-16 mr--165">
            Add player
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Nav;
