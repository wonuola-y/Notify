import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { Post } from "./components/Post";
import Chess from "./components/Chess";
import Strategy from "./components/Strategy";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners";
import Missing from "./components/404";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      console.log("done");

      setLoading(false);
    }, 3000);
  }, []);
  return (
  <div>
    {
      loading ? 
      (
        <div className="App flex min-h-screen justify-center items-center">
          <DotLoader 
          color={"#97dcf7"}
          loading={loading}
          size={160}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        </div>
      )
      :
      ( 
        <div className="bg-[#F7FAFD] flex justify-center items-center py-10 font-play min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Missing />} />
        <Route path="/Profile" element={<Post />} />
        <Route path="/ChessClub" element={<Chess />}/>
        <Route path="/Strategies" element={<Strategy />}/>
      </Routes>
    </div>)
    }
  </div>
  );
}

export default App;
