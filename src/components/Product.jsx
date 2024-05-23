import React from "react";
import Button from "./Button";
function Product({val,mover,count})
{
 
    return(
        <div className="w-full py-20  h-[23rem]  text-white ">
          <div onMouseEnter={()=>mover(count)} className="max-w-screen-xl mx-auto flex justify-between">
            <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
            <div className=" dets w-1/3">
                <p className="mb-10">{val.des}</p>
                <Button></Button>
            </div>
          </div>
        </div>
    )
}

export default Product;