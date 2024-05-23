import React from "react";
import { motion } from "framer-motion";
function Marque({imagesurls})
{
  return(
     <div className="flex w-full overflow-hidden">
     <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:10,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imagesurls.map((url,index)=>(<img key={index} src={url.url}  className=""></img>))}
        </motion.div>
        <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:10,repeat:Infinity}} className="flex flex-shrink-0 gap-40 py-10 pr-40">
        {imagesurls.map((url,index)=>(<img key={index} src={url.url}  className=""></img>))}
        </motion.div>
     </div>
  )
}

export default Marque;