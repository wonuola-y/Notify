import mark from "../assets/images/avatar-mark-webber.webp";
import angela from "../assets/images/avatar-angela-gray.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import kim from "../assets/images/avatar-kimberly-smith.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";

import { Link } from "react-router-dom";
const Chess = () => {
  const list = [
    {
      id: 1,
      name: "Mark Webber",
      img: mark,
    },
    {
      id: 2,
      name: "Angela Gray",
      img: angela,
    },
    {
      id: 3,
      name: "Jacob Thompson ",

      img: jacob,
    },
    {
      id: 4,
      name: "Rizky Hasanuddin",
      img: rizky,
    },
    {
      id: 5,
      name: "Kimberly Smith",

      img: kim,
    },
    {
      id: 6,
      name: "Nathan Peterson ",

      img: nathan,
    },
   
  ];
  return (
    <div>
      <div className="bg-white max-w-3xl rounded-2xl py-7 px-4  flex flex-col text-center  items-center">
        <h1 className="font-extrabold">Chess Club </h1>
        <p className="font-light text-gray-500">Members</p>
        {list.map((i) => (
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-between items-center m-5 ">
              <img
                src={i.img}
                alt="avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium">{i.name}</p>
              </div>
            </div>
          </div>
        ))}
           <button className="my-4 bg-[#0A327B] hover:bg-blue-700 text-white p-3 rounded text-[10px] ">
          <Link to="/"> Go back to Notifications page</Link>
        </button>
      </div>
    </div>
  );
};

export default Chess;
