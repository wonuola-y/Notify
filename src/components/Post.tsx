
import chess  from '../assets/images/image-chess.webp'
import {Link} from 'react-router-dom'
type Props = {}

export const Post = (props: Props) => {
  return (
    <div className=" bg-white max-w-2xl rounded-2xl py-7 px-4  flex flex-col text-center  items-center ">
        <div className="w-full flex flex-col justify-center  items-center">
         
<img src={chess} alt="chess" /> 
<h1 className="font-extrabold text-xl my-4 mb-[0.5px]">John Doe </h1>
< p className="font-medium mb-4 text-[12px] text-gray-400">Chess World Creator</p>

        </div>
        <div className="flex text-center flex-col">
            <h1 className="mb-2  font-bold text-[#0A327B]">My first tournament today!</h1>
            <p className="text-gray-600 max-w-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        </div>
        <button className='my-4 bg-[#0A327B] text-white p-3 rounded-2xl text-sm '>
            <Link  to='/'> Go back to Notifications page</Link>
        </button>
    </div>
  )
}