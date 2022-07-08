import Form from "../components/Form";
import Nav from "../components/Nav";

function AddPlayer() {
  return (
    <div className="l">
      <Nav></Nav>
      <div className="l__main ">
        <div className="type--bangers type-400 type-80 type-white mt--80 flex flex--center">
          ADD NEW PLAYER
        </div>
        <Form></Form>
      </div>
    </div>
  );
}

export default AddPlayer;
