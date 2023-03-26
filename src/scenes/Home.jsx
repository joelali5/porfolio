import AnchorLink from "react-anchor-link-smooth-scroll";
import joel from "./../assets/joel.png";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Typewriter from "typewriter-effect";

export default function Landing({ setSelectedPage, setShowModal }) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 1,
      },
    },
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1.5,
      },
      exit: {
        x: "-100vw",
        transition: {ease: 'easeInOut'}
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="md:flex md:justify-between md:items-center gap-16 py-10 w-5/6 mx-auto md:h-full"
    >
      {/* IMAGE */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <motion.div
            className="relative z-0 ml-20"
            variants={imageVariants}
          >
            <img
              src={joel}
              alt="profile"
              className="w-full max-w-[300px] md:max-w-[500px] rounded-t-3xl"
            />
          </motion.div>
        ) : (
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              alt="profile"
              className="w-full max-w-[350px] md:max-w-[500px] rounded-t-2xl"
              src={joel}
            />
          </motion.div>
        )}
      </div>

      <div className="'z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start md:mb-4">
            Joel Aliyu
          </p>
          <p className="mt-2 text-center md:text-left md:font-playfair text-2xl font-semibold text-light bg-gradient-rainblue bg-clip-text fill-transparent">
            <Typewriter
              options={{
                strings: ["Software Developer", "Open Source Contributor"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p className="mt-3 mb-7 text-xl text-center md:text-start">
            I am a very curious full-stack web developer who places a premium on
            leaving a positive mark through the continual application of my core
            principle of dedication. I come into web development with varied
            scientific backgrounds and a fresh outlook. I'm currently putting in
            a lot of effort every day to become a better professional.
          </p>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setShowModal(true)}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-dark-grey hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              View Resume
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </motion.div>
  );
}
