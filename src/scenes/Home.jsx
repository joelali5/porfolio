import { motion } from "framer-motion";

export default function Landing({ setSelectedPage }) {

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
      className="w-4/5 md:w-2/3 xs:mb-20 md:mb-20 mt-32 py-10 mx-auto md:h-2/5 lg:w-1/2 pb-32"
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
