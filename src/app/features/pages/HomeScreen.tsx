/* eslint-disable react-hooks/exhaustive-deps */
import Nav from "../components/Nav";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { Player } from "../../types/Player";
import PlayersService from "../../services/playersService";
import { toast } from "react-toastify";

function HomeScreen() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [playerSearch, setPlayerSearch] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [limit, setLimit] = useState<number>(4);

  const playersService = new PlayersService();

  function handleSort() {
    let val = sortOrder;

    if (val === "") {
      val = "desc";
    } else if (val === "desc") {
      val = "asc";
    } else if (val === "asc") {
      val = "";
    }

    setSortOrder(val);
  }

  function handleLimit() {
    setLimit(limit + 4);
  }

  const fetchPlayers = async () => {
    try {
      const res = await playersService.getPlayers(limit, sortOrder);
      setPlayers(res);
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, [limit, sortOrder]);

  return (
    <>
      <div className="l">
        <Nav></Nav>
        <div className="l__main">
          <div className="type--bangers type-400 type-80 type-white mt--80 flex flex--center">
            FEATURED PLAYERS
          </div>
          <div className="wrap  mt--75">
            <button
              className="btn btn--secondary btn--s type--poppins type-400 type-16"
              onClick={() => handleSort()}
            >
              Sort <i className="icon icon--base icon--white icon--sort"></i>
            </button>
            <div className="field ml--32">
              <i className="icon icon--base icon--search icon--white ml--16"></i>
              <input
                type="text"
                className="input input--primary"
                onChange={(event) => setPlayerSearch(event.target.value)}
              />
            </div>
          </div>
          <Card players={players} playerSearch={playerSearch}></Card>
          <div className="wrap__btn">
            <button
              className=" btn btn--primary btn--m type--poppins mt--80 mb--242 "
              onClick={() => handleLimit()}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
