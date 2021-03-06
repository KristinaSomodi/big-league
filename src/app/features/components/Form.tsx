import PlayersService from "../../services/playersService";
import { useState } from "react";
import { Player } from "../../types/Player";
import { useNavigate } from "react-router-dom";
import { v4 as id } from "uuid";
import { toast } from "react-toastify";

function Form() {
  const [playerName, setPlayerName] = useState<string>("");
  const [playerCountry, setPlayerCountry] = useState<string>("");
  const [playerNickname, setPlayerNickname] = useState<string>("");
  const [playerEarnings, setPlayerEarnings] = useState<number>(0);

  const playersService = new PlayersService();

  const navigate = useNavigate();
  function addPlayer() {
    try {
      const player: Player = {
        id: id(),
        name: playerName,
        country: playerCountry,
        nickname: playerNickname,
        earnings: playerEarnings,
      };
      playersService.postPlayer(player);
      navigate("/");
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  }

  return (
    <div className="flex flex--center">
      <form className="form">
        <div className="field__form">
          <label
            htmlFor="name"
            className="type--bangers type-400 type-white type-24 mt--80 "
          >
            NAME
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input--secondary mt--8"
            onChange={(event) => setPlayerName(event.target.value)}
          />
        </div>
        <div className="field__form">
          <label
            htmlFor="country"
            className="type--bangers type-400 type-white type-24 mt--32 "
          >
            COUNTRY
          </label>
          <input
            type="text"
            placeholder="Country"
            className="input input--secondary mt--8"
            onChange={(event) => setPlayerCountry(event.target.value)}
          />
        </div>
        <div className="field__form">
          <label
            htmlFor="nickname"
            className="type--bangers type-400 type-white type-24 mt--32 "
          >
            NICKNAME
          </label>
          <input
            type="text"
            placeholder="Nickname"
            className="input input--secondary mt--8"
            onChange={(event) => setPlayerNickname(event.target.value)}
          />
        </div>
        <div className="field__form">
          <label
            htmlFor="earnings"
            className="type--bangers type-400 type-white type-24 mt--32 "
          >
            TOTAL EARNINGS
          </label>
          <input
            type="number"
            placeholder="Total earnings"
            className="input input--secondary mt--8"
            onChange={(event) => setPlayerEarnings(Number(event.target.value))}
          />
        </div>
        <div className="form__upload mt--32 mb--40">
          <div>
            <div className="type--bangers type-400 type-24 type-white mb--8">
              PROFILE PHOTO
            </div>
            <div className="form__upload__circle mr--16">
              <i className="icon icon--base icon--upload"></i>
            </div>
          </div>
          <div>
            <div className="type--bangers type-400 type-24 type-white mb--8">
              COUNRTY FLAG
            </div>
            <div className="form__upload__circle">
              <i className="icon icon--base icon--upload"></i>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn--primary btn--m "
          onClick={() => addPlayer()}
        >
          Add player
        </button>
      </form>
    </div>
  );
}

export default Form;
