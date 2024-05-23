import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Button from "./Button";
function Card({width,start,para})
{

  return(
     <div className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[23rem] flex flex-col  justify-between hover:bg-purple-500`}>
        <div>   
        <div className="w-full flex justify-between items-center">
            <h3>one RIDE</h3>
            <FaLongArrowAltRight></FaLongArrowAltRight>
        </div>
       
       <h1 className="text-3xl font-medium mt-5">Discover </h1>
       </div>
       <div className=" down w-full ">
        { start==true ?(<>        <h1 className="text-6xl font-semibold tracking-tight leading-none mb-5">Discover the Perfect Ride for Any Event - What’s Your Selection?</h1>
        <Button></Button></>):null}
       {para &&(  <p className="text-sm mt-1">"Your Destination, Our Wheels".</p>)}
       </div>

     </div>
  )
}

export default Card; 