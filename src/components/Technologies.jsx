import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";

import { RiReactjsLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";



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
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration :2}} className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration :1.5}} className="gap-3 flex flex-wrap items-center justify-center p-4">
            <motion.div  variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoHtml5 className="text-7xl text-red-500"/>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoCss3  className="text-7xl text-blue-900"/>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript  className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine  className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNextjsFill  className="text-7xl text-white"/>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNode  className="text-7xl text-green-700"/>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb  className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava  className="text-7xl text-red-700"/>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandRedux  className="text-7xl text-purple-700"/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies