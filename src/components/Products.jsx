import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion"

function Products()
{
    var pro=[
        {title:"Sedan",des:"Experience the encapsulation of luxury with Limolux's astonishing decision of premium vehicles. Whether you pick a Mercedes-Benz E-Class, BMW 5 Series, Lexus ES300,",live:true,case:false,src:""},
        {title:"SUV",des:"Limolux presents a handpicked determination of the best extravagance vehicles for the individuals who request only awesome.",live:true,case:false,src:""},
        {title:"VAN",des:"Limolux presents a handpicked determination of the best extravagance vehicles for the individuals who request only awesome.",live:true,case:false,src:""},
        {title:"Normal",des:"Limolux presents a handpicked determination of the best extravagance vehicles for the individuals who request only awesome.",live:true,case:false,src:""},
       
    ]
const [pos,setPos]=useState(0);
const mover=(val)=>
    {
        setPos(val*23);
    }


    return(
        <div className="mt-32 relative">
          {pro.map((elm,ind)=>(<Product val={elm} mover={mover} count={ind}></Product>))}
          <div className="absolute top-0 w-full h-full pointer-events-none">
          <motion.div initial={{y:pos,x:"-50%"}}
          animate={{y:pos+`rem`}}
            transition={{ease:[0.76, 0, 0.24, 1],duration:.6}}
            className="window absolute w-[30rem] h-[23rem] left-[45%] translate-x-[-50%] overflow-hidden">
           
            <motion.div  animate={{y:-pos+`rem`}}  transition={{ease:[0.4, 0, 0.24, 1],duration:.2}} className="window  w-full h-full bg-red-100  ">
              <img className="w-full h-full object-cover  " src="https://images.unsplash.com/photo-1541348263662-e068662d82af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww" alt="" />
         
            </motion.div>
            <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.4, 0, 0.24, 1],duration:.2}} className="window  w-full h-full bg-red-100  ">
            <img className="w-full h-full object-cover  " src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGx1eHVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
         
            </motion.div>
            <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.4, 0, 0.24, 1],duration:.2}} className="window  w-full h-full bg-red-100  ">
            <img className="w-full h-full object-cover  " src="https://images.unsplash.com/photo-1610809376778-928ee2c3a561?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGx1eHVyeSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
         
            </motion.div>
            <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.4, 0, 0.24, 1],duration:.2}} className="window  w-full h-full bg-red-100  ">
            <img className="w-full h-full object-cover  " src="https://images.unsplash.com/photo-1546518086-03ef264c9885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUyfHxsdXh1cnklMjBjYXJ8ZW58MHx8MHx8fDA%3D" alt="" />
         
            </motion.div>

            </motion.div>
          </div>
        </div>
    )
}

export default Products;