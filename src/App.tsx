import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Post } from "./components/Post";
import Chess from "./components/Chess";
import Strategy from "./components/Strategy";

function App() {
  return (
    <div className="bg-[#F7FAFD] flex justify-center items-center py-10 font-play min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Post />} />
        <Route path="/ChessClub" element={<Chess />}/>
        <Route path="/Strategies" element={<Strategy />}/>
      </Routes>
    </div>
  );
}

export default App;
