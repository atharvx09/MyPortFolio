import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { LuFigma } from "react-icons/lu";
import { SiKubernetes } from "react-icons/si";
import { SiJest } from "react-icons/si";




import {animate, motion, transform} from "framer-motion";

const iconVar = (duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-20],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType:"reverse",
        },
    },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration :2}} className="my-20 text-center text-4xl">Tools</motion.h1>
        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration :1.5}} className="gap-3 flex flex-wrap items-center justify-center p-4">
            <motion.div  variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-7xl text-white"/>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws  className="text-7xl text-gray-600"/>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJira  className="text-7xl text-blue-500"/>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoVercel  className="text-7xl  text-gray-500"/>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostman  className="text-7xl text-red-900"/>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiScrum  className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <LuFigma  className="text-7xl text-red-400"/>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKubernetes  className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4  border-neutral-800 p-4">
                <SiJest  className="text-7xl text-red-400"/>
                
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies