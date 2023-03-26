import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();

  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section className="pt-16 pb-16">
      <div className="flex justify-center mt-32">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div className="flex justify-center items-center text-center p-10 bg-light text-yellow max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            Projects Links
          </div>
          <Project title="news" />
          <Project title="project 2" />

          <Project title="project 3" />
          <Project title="project 4" />
          <Project title="project 5" />

          <Project title="project 6" />
        </motion.div>
      </div>
    </section>
  );
}
