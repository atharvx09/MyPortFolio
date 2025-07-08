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
const Tools = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration :2}} className="my-20 text-center text-4xl">Tools</motion.h1>
        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration :1.5}} className="gap-3 flex flex-wrap items-center justify-center p-4">
            <motion.div  variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://github.com"><FaGithub className="text-7xl text-white"/></a>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://aws.amazon.com/"><FaAws  className="text-7xl text-gray-600"/></a>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
               <a href="https://www.atlassian.com/software/jira"> <SiJira  className="text-7xl text-blue-500"/></a>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://vercel.com/"><IoLogoVercel  className="text-7xl  text-gray-500"/></a>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://www.postman.com/"><SiPostman  className="text-7xl text-red-900"/></a>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://www.scrum.org/resources/what-scrum-module"><DiScrum  className="text-7xl text-cyan-400"/></a>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://www.figma.com/"><LuFigma  className="text-7xl text-red-400"/></a>
            </motion.div>
            <motion.div variants={iconVar(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <a href="https://kubernetes.io/"><SiKubernetes  className="text-7xl text-blue-600"/></a>
            </motion.div>
            <motion.div variants={iconVar(4)} initial="initial" animate="animate" className="rounded-2xl border-4  border-neutral-800 p-4">
                <a href="https://jestjs.io/"><SiJest  className="text-7xl text-red-400"/></a>
                
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Tools