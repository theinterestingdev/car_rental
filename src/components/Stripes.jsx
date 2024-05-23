import React from "react";
import Stripe from "./Stripe";
import { SiAudi } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { SiFerrari } from "react-icons/si";
import { SiLamborghini } from "react-icons/si";
import { TbBrandVolkswagen } from "react-icons/tb";
import { TbBrandToyota } from "react-icons/tb";


function Stripes()
{
    var data=[
        {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/ferrari-trento.png",number:1},
        {url:"https://media.formula1.com/image/upload/f_auto/q_auto/v1684232307/content/dam/fom-website/2020/sponsors/puma.png",number:3},
        {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/dhl.png",number:5},
        {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/aramco.png",number:6},
        {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/188.png",number:6},
        {url:"https://media.formula1.com/image/upload/f_auto/q_auto/v1684232307/content/dam/fom-website/2020/sponsors/puma.png",number:3},
        {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/dhl.png",number:5},
    ]
    return(
  
         <div className="flex items-center mt-[10vw]">
            {data.map((elm,id)=>(<Stripe val={elm}></Stripe>))}
         </div>
 
    )
}

export default Stripes; 