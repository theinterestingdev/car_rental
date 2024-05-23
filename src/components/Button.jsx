import React from "react";
import { FaCar } from "react-icons/fa";
import { FaCarBurst } from "react-icons/fa6";
function Button()
{
  return(
     <div className="max-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between gap-10">
      <span className="text-sm font-semibold">Book Now</span>
      <FaCarBurst></FaCarBurst>
     </div>
  )
}

export default Button;