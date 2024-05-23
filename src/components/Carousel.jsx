"use client";
import React from "react";


import Work from "@/components/Work";
import Stripes from "@/components/Stripes";
import Products from "@/components/Products";
import Marques from "@/components/Marques";
import Cards from "/Cards";





const Carousels = () => {
  
  return (
    <div className="w-full h-full bg-zinc-900 font-[satoshi_variable] text-white">
     
     <Work></Work>
     <Stripes></Stripes>
     <Products></Products>
     <Marques></Marques>
     <Cards></Cards>

     
     </div>
  );
};

export default Carousels;
