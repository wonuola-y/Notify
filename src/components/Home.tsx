import mark from "../assets/images/avatar-mark-webber.webp";
import angela from "../assets/images/avatar-angela-gray.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import kim from "../assets/images/avatar-kimberly-smith.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";
import anna from "../assets/images/avatar-anna-kim.webp";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [notify, setNotify] = useState([
    {
      id: 1,
      name: "Mark Webber",
      comment: " reacted to your recent post ",
      added: "My first tournament today!",
      img: mark,
      time: "1m ago",
      read: true,
    },
    {
      id: 2,
      name: "Angela Gray",
      comment: " followed you",
      time: "5m ago",
      img: angela,
      read: true,
    },
    {
      id: 3,
      name: "Jacob Thompson ",
      comment: " has joined your group",
      special: " Chess Club",
      time: "1 day ago",
      img: jacob,
      read: true,
    },
    {
      id: 4,
      name: "Rizky Hasanuddin",
      comment: " sent you a private message",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: "5 days ago",
      img: rizky,
      read: false,
    },
    {
      id: 5,
      name: "Kimberly Smith",
      comment: " commented on your picture",
      time: "1 week ago",
      img: kim,
      read: false,
    },
    {
      id: 6,
      name: "Nathan Peterson ",
      comment: " reacted to your recent post ",
      time: "2 weeks ago",
      specials: "5 end-game strategies to increase your win rate",
      img: nathan,
      read: false,
    },
    {
      id: 7,
      name: "Anna Kim",
      comment: " left the group",
      special: " Chess Club ",
      time: "2 weeks ago",
      img: anna,
      read: false,
    },
  ]);
  function handleNotify(id: any) {
    setNotify((p) => p.map((i) => (i.id === id ? { ...i, read: false } : i)));
  }
  function handleRead() {
    setNotify((prev) => prev.map((i) => ({ ...i, read: false })));
  }
  return (
    <div className="bg-white max-w-2xl rounded-2xl py-5 px-4 ">
      <div className="flex m-4 justify-between  items-center ">
        <div className="flex  items-baseline">
          <h1 className="text-2xl mr-4 font-extrabold ">Notifications</h1>
          <p className="bg-[#0A327B] text-center rounded-md text-white  w-8 h-6  text-base">
            {notify && notify.filter((n) => n.read).length}
          </p>
        </div>
        <div className="flex ">
          <p
            className="hover:text-blue-700 cursor-pointer"
            onClick={handleRead}
          >
            Mark as read
          </p>
        </div>
      </div>
      <div>
        {notify &&
          notify.map((w) => (
            <div
              key={w.id}
              className="flex items-center py-5 cursor-pointer "
              onClick={() => handleNotify(w.id)}
            >
              <div className="mx-5 w-2/12">
                <img src={w.img} alt="" className=" w-11" />
              </div>
              <div className="flex flex-col w-7/12">
                {/* container */}
                <div className=" max-w-xl">
                  {/* comments */}
                  <div className="font-medium text-[#5E6778] flex items-center ">
                    <p>
                      <span className="font-extrabold font-play hover:text-[#0A327B] cursor-pointer text-black ">
                        {w.name}
                      </span>
                      {w.comment}{" "}
                      <span className="font-bold text-[#5E6778] hover:text-[#0A327B] hover:font-extrabold cursor-pointer">
                        <Link to="/Profile"> {w.added}</Link>
                      </span>{" "}
                      <span className=" font-bold text-[#0A327B] cursor-pointer">
                        <Link to="/ChessClub"> {w.special}</Link>
                      </span>
                      <span className=" font-bold text-[#0A327B] cursor-pointer">
                        <Link to='/Strategies'>{w.specials}</Link>
                      </span>
                    </p>
                  
                  </div>
                </div>
                <div className="text-[#5E6778]">{w.time}</div>
              </div>
              <div className=" 3/12">
              {w.read && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        className="mx-2"
                      >
                        <circle cx="4" cy="4" r="4" fill="#F65552" />
                      </svg>
                    )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
