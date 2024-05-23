import React from "react";
import Card from "@/components/Card";
function Cards()
{

  return(
     <div className="w-full">
        <div className="max-w-screen-xl mx-auto  py-20 flex gap-2">
         <Card width={"basis-1/3"} start={false} para={true}></Card>
         <Card width={"basis-2/3"} start={true} para={false}></Card>
        </div>
     </div>
  )
}

export default Cards; 