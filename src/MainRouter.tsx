import { Route, Routes } from "react-router-dom";
import AddPlayer from "./app/features/pages/AddPlayer";
import HomeScreen from "./app/features/pages/HomeScreen";
import PlayerNotFound from "./app/features/pages/PlayerNotFound";
import PlayerPreview from "./app/features/pages/PlayerPreview";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/add-player" element={<AddPlayer />} />
      <Route path="/player-preview" element={<PlayerPreview />} />
      <Route path="/player-not-found" element={<PlayerNotFound />} />
    </Routes>
  );
}

export default MainRouter;
