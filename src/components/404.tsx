

import { Link } from "react-router-dom";
const Missing = () => {
  return (
    <div className="bg-white max-w-2xl rounded-2xl py-7 px-4  flex flex-col text-center  items-center ">
        <div className="text-center">
           <h1 className="text-3xl font-semibold my-4"> Oh no!</h1>
          <p> There's no page like this  </p>
          <button className="my-4 bg-[#0A327B] text-white p-2 rounded text-[10px] hover:bg-blue-700 ">
          <Link to="/"> Go back to Notifications page</Link>
        </button>
        </div>
    </div>
  )
}

export default Missing