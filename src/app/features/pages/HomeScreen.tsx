import Nav from "../components/Nav";
import Card from "../components/Card";

function HomeScreen() {
  return (
    <>
      <div className="l">
        <Nav></Nav>
        <div className="l__main">
          <div className="type--bangers type-400 type-80 type-white mt--80 flex flex--center">
            FEATURED PLAYERS
          </div>
          <div className="wrap  mt--75">
            <button className="btn btn--secondary btn--s type--poppins type-400 type-16">
              Sort <i className="icon icon--base icon--white icon--sort"></i>
            </button>
            <div className="field ml--32">
              <i className="icon icon--base icon--search icon--white ml--16"></i>
              <input type="text" className="input input--primary" />
            </div>
          </div>
          <Card></Card>
          <div className="wrap__btn">
            <button className=" btn btn--primary btn--m type--poppins mt--80 mb--242 ">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
