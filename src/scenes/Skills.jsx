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
  return (
    <section id="skills" className="pt-0 pb-5">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-3xl mb-7 text-center">
            Tools & Tech
          </p>
        </motion.div>
      </div>

      {/* SKILLS */}
      <motion.div
        className="flex justify-center items-center flex-wrap gap-8 md:w-4/5 mx-auto mt-8 p-6 shadow-lg shadow-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
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
    </section>
  );
}
