import { motion } from "framer-motion";

export default function Landing({ setSelectedPage }) {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  // const imageVariants = {
  //   hidden: {
  //     opacity: 0,
  //     x: "100vw",
  //   },
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       type: "tween",
  //       duration: 1,
  //     },
  //   },
  // };

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
        transition: { ease: "easeInOut" },
      },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="xs:mb-20 md:mb-0 mt-32 py-10 w-2/3 mx-auto md:h-2/5 lg:w-1/2"
      id="/"
    >
      <p className="text-6xl font-opensans font-bold">
        Hi<span className="block">There 👋</span>
      </p>
      <p className="origin-left rotate-90">
        <a href="#about" className="text-sm animate-pulse">
          scroll down →
        </a>
      </p>
    </motion.section>
  );
}
