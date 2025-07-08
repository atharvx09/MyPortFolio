import { ABOUT_TEXT1 } from "../constants";
import { ABOUT_TEXT2 } from "../constants";
import { ABOUT_TEXT3 } from "../constants";
import resume from "../assets/AtharvKarole.pdf";
import aboutImg from "../assets/aboutFpic.png";
import {motion} from "framer-motion";
import { IoIosDownload } from "react-icons/io";


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="mt-20 mb-1 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
            <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="w-full lg:w-1/2">
                <div className="flex-row justify-center lg:justify-start">
                    <p className="my-2 mx-10 mt-28 maxw-xl text-xl">{ABOUT_TEXT1}</p>
                    <p className="my-2 mx-10  maxw-xl text-xl ">{ABOUT_TEXT2}</p>
                    <p className="my-2 mx-10  maxw-xl text-xl ">{ABOUT_TEXT3}</p>

                </div>
            </motion.div>
            <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="w-full lg:w-1/2 lg:p-8">
                
                <div className="flex items-center mx-8 justify-center">
                    <img className="rounded-3xl " src={aboutImg} alt="" />
                </div>
                
            </motion.div>
        </div>
        <div className="w-full flex justify-center mt-8">
  <a
    href={resume} // Replace this with your actual resume file path
    download
    className="flex px-6 py-3  text-white bg-neutral-800 rounded-md hover:bg-slate-700 transition"
  >
    Download Resume <IoIosDownload className="text-purple-500"/>
  </a> 
</div>

     
    </div>
  )
}

export default About;