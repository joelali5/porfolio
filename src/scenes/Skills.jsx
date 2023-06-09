import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BsFillBootstrapFill } from "react-icons/bs";

export default function Skills() {

  const skillsVariants = {
    hidden: {
      opacity: 0,
      x: "100vh",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        delay: 0.3,
        duration: 1.5,
      },
    },
  };

  return (
    <div className="w-full bg-white h-1/2" id="skills">
      <div className="h-full flex flex-col justify-center items-center pt-0 pb-5 w-1/2 mx-auto md:mb-10">
      <motion.div
        className="flex justify-center items-center flex-wrap gap-8 md:w-4/5 mx-auto mt-8 p-6 shadow-lg shadow-light"
        variants={skillsVariants}
        initial="hidden"
        animate="visible"
      >
        <FaReact className="w-16 h-16 md:w-32 md:h-32 text-react" />
        <BsGit className="w-16 h-16 md:w-32 md:h-32 text-git" />
        <AiFillHtml5 className="w-16 h-16 md:w-32 md:h-32 text-html" />
        <DiCss3 className="w-16 h-16 md:w-32 md:h-32 text-css" />
        <SiTailwindcss className="w-16 h-16 md:w-32 md:h-32 text-tailwind" />
        <SiMongodb className="w-16 h-16 md:w-32 md:h-32 text-mongo" />
        <SiPostgresql className="w-16 h-16 md:w-32 md:h-32 text-postgres" />
        <GrMysql className="w-16 h-16 md:w-32 md:h-32 text-mysql" />
        <FaNodeJs className="w-16 h-16 md:w-32 md:h-32 text-node" />
        <BsFillBootstrapFill className="w-16 h-16 md:w-32 md:h-32 text-bootstrap" />
        <SiExpress className="w-16 h-16 md:w-32 md:h-32" />
      </motion.div>
    </div>
    </div>
  );
}
