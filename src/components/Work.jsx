import React, { useState } from "react";
import { motion ,useMotionValueEvent} from "framer-motion"
import { useScroll } from "framer-motion"
import { data } from "autoprefixer";
function Work()
{
  
  const [image,setimages]=useState([
    {url:"https://images.unsplash.com/photo-1617163744509-d1880a3b1171?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwaW1hZ2VzfGVufDB8fDB8fHww",top:"50%",left:"50%",isActive:false},
    {url:"https://images.unsplash.com/photo-1603811478698-0b1d6256f79a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwaW1hZ2VzfGVufDB8fDB8fHww",top:"56%",left:"44%",isActive:false},
    {url:"https://images.unsplash.com/photo-1617073682506-356a90685a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNhciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",top:"45%",left:"56%",isActive:false},
    {url:"https://images.unsplash.com/photo-1617084246388-b5675b638b83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNhciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",top:"60%",left:"43%",isActive:false},
    {url:"https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",top:"43%",left:"40%",isActive:false},
    {url:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",top:"65%",left:"55%",isActive:false},
 
  ])


 

  const { scrollYProgress} = useScroll();
  scrollYProgress.on("change",(data)=>
    {
      
       function imageshow(arr)
       {
           setimages((prev)=>
            prev.map((item,index)=>
              arr.indexOf(index)==-1 ?{ ...item,isActive:false}
              :{...item,isActive:true}
            )
           )
       }


        switch(Math.floor(data*100))
      {
        case 0:
          imageshow([]);
         break;
         case 1:
          imageshow([0]);
         break;
         case 2:
          imageshow([0,1]);
         break;
         case 3:
          imageshow([0,1,2])
         break;
         case 4:
          imageshow([0,1,2,3])
         break;
         case 6:
          imageshow([0,1,2,3,4])
         break;
         case 8:
          imageshow([0,1,2,3,4,5])
         break;
         
      }
    })

  
  return(
    <div className="w-full  ">
       <div className=" relative max-w-screen-xl mx-auto  text-center pt-30">
         <h1 className="text-[23vw] leading-none font-medium tracking-tight select-none">Voyage</h1>
         <div className="w-full h-full  absolute top-0">
 
          {image.map((elm,ind)=>(elm.isActive &&(  <img   className=" absolute w-52 rounded-lg -translate-x-[50%] -translate-y-[50%]" src={elm.url} alt=""   style={{top:elm.top,left:elm.left}}/>
           ))
            
              
           )}
         </div>
       </div>
      
     </div>
  )
}

export default Work;