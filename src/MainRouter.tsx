import { Route, Routes } from "react-router-dom";
import HomeScreen from "./app/features/pages/HomeScreen";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  );
}

export default MainRouter;
