import profile from "../../../assets/images/profile-pic.jpg";
import flag from "../../../assets/images/flag.jpg";
import { Player } from "../../types/Player";
import { NavLink } from "react-router-dom";

interface Props {
  players: Player[];
  playerSearch: string;
}

const Card: React.FC<Props> = (props) => {
  const { players, playerSearch } = props;

  function handleSearch(value: Player) {
    if (playerSearch === "") {
      return value;
    } else if (value.name.toLowerCase().includes(playerSearch)) {
      return value;
    }
  }

  return (
    <>
      <div className="cards mt--32 flex flex--center">
        {players.filter(handleSearch).map((player) => {
          return (
            <NavLink
              to={
                player.name === "Unknown"
                  ? "/player-not-found"
                  : "/player-preview"
              }
            >
              <div className="card">
                <div className="card__border">
                  <div className="card__wrap">
                    <img src={profile} alt="" className="card__image" />
                    <img src={flag} alt="" className="card__flag" />
                  </div>
                </div>
                <div className="card__name type--bangers type-400 type-32 type-white pt--16">
                  {player.name}
                </div>
                <div className="card__about type--poppins type-400 type-16 type-white pt--8">
                  {player.nickname}
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Card;
