import { HERO_CONTENT } from "../constants";
import { HERO_CONTENT2 } from "../constants";
import { HERO_CONTENT3 } from "../constants";
import profilePic from "../assets/ProfilePic.jpeg";
import {motion} from "framer-motion";



const container = (delay) =>({
    hidden: {x:100,opacity:0},
    visible: {
        x:0,opacity:1,
        transition:{duration:0.5,delay:delay},
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
        <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center mx-8 ">
                    <motion.img className="rounded-3xl" initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.2}} src={profilePic} alt="ProfileImage" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start text-slate-300">
                    <motion.h1  variants={container(0 )} initial="hidden" animate="visible"  className=" mx-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl" >Atharv Karole</motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" transition={{duration:0.5,delay:0.7}} className="mx-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"> SWE@EPAM | MERN Stack Developer</motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible"  className="my-2 mx-8  max-w-xl font-medium text-xl tracking-tighter"> {HERO_CONTENT}</motion.p>
                    <motion.p variants={container(1)} initial="hidden" animate="visible"  className="my-2 mx-8  max-w-xl font-medium text-xl tracking-tighter"> {HERO_CONTENT2}</motion.p>
                    <motion.p variants={container(1)} initial="hidden" animate="visible"  className="my-2 mx-8  max-w-xl font-medium text-xl tracking-tighter"> {HERO_CONTENT3}</motion.p>
                    
                </div>   
            </div>
            
        </div>
    </div>
  )
}

export default Hero