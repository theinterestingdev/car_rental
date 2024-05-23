import React from "react";

function Fot()
{
    return(
        <div className="w-full mt-5">
         <div className="max-w-screen-xl py-10 flex gap-20 mx-auto ">
            <div className="basis-1/2">
                <h1 className="text-7xl font-semibold leading-none tracking-tight">Work.</h1>
            </div>
            <div className="basis-1/2 flex gap-5">
                <div className="basis-1/3">
                    <h4 className="mb-5">Social</h4>
                   { ["Facebook","twitter","Linkedin"].map((item,id)=><a className="block mt-2 text-zinc-400 capitalize">{item}</a>) }

                </div>
                <div className="basis-1/3">
                    <h4 className="mb-5">Social</h4>
                   { ["Facebook","twitter","Linkedin"].map((item,id)=><a className="block mt-2 text-zinc-400 capitalize">{item}</a>) }

                </div>
                <div className="basis-1/2">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, architecto.</p>
                    <img src="" alt="" />
                </div>
            </div>
         </div>
        </div>
    )
}
export default Fot;