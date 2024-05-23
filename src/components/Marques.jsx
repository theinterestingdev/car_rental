import React from "react";
import Marque from "./Marque";
function Marques()
{
   var images=[[
      {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/ferrari-trento.png"},
      {url:"https://media.formula1.com/image/upload/f_auto/q_auto/v1684232307/content/dam/fom-website/2020/sponsors/puma.png"},
      {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/dhl.png"},
      {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/aramco.png"},
      {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/188.png"},
      {url:"https://media.formula1.com/image/upload/f_auto/q_auto/v1684232307/content/dam/fom-website/2020/sponsors/puma.png"},
      {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/dhl.png"},
  ],[
      {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/ferrari-trento.png"},
      {url:"https://media.formula1.com/image/upload/f_auto/q_auto/v1684232307/content/dam/fom-website/2020/sponsors/puma.png"},
      {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/dhl.png"},
      {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/aramco.png"},
      {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/188.png"},
      {url:"https://media.formula1.com/image/upload/f_auto/q_auto/v1684232307/content/dam/fom-website/2020/sponsors/puma.png"},
      {url:"https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/dhl.png"},
  ]]
  return(
     <div className="py-20 mt-20 w-full relative overflow-hidden">

    {images.map((item,index)=><Marque key={index} imagesurls={item}></Marque>)}      
     </div>
  )
}

export default Marques;