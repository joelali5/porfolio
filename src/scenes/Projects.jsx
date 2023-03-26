import { motion } from "framer-motion";
import foody from "./../assets/foody.jpg";
import news from "./../assets/nc-news.jpg";
import tenzies from "./../assets/tenzies.jpg";
import todo from "./../assets/todo.jpg";

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

export default function Projects() {
  return (
    <section className="pt-16 pb-16">
      <div className="flex justify-center mt-32">
        <motion.div
          className="grid md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div className="flex justify-center items-center text-center p-10 bg-light text-yellow max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            Projects Links
          </div>
          <motion.a
            href="#"
            target="_blank"
            variants={projectVariant}
            className="relative max-w-[400px] max-h-[400px]"
          >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
              <p className="text-2xl font-playfair">News</p>
            </div>
            <img src={news} alt="news" className="w-full h-full" />
          </motion.a>

          <motion.a
            href="#"
            target="_blank"
            variants={projectVariant}
            className="relative max-w-[400px] max-h-[400px]"
          >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
              <p className="text-2xl font-playfair">Tenzies</p>
            </div>
            <img src={tenzies} alt="Tenzies" className="w-full h-full" />
          </motion.a>

          <motion.a
            href="#"
            target="_blank"
            variants={projectVariant}
            className="relative max-w-[400px] max-h-[400px]"
          >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
              <p className="text-2xl font-playfair">Todo App</p>
            </div>
            <img src={todo} alt="Todo" className="w-full h-full" />
          </motion.a>

          <motion.a
            href="#"
            target="_blank"
            variants={projectVariant}
            className="relative max-w-[400px] max-h-[400px]"
          >
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
              <p className="text-2xl font-playfair">Foody</p>
            </div>
            <img src={foody} alt="foody" className="w-full h-full" />
          </motion.a>

          <div className="flex justify-center items-center text-center p-10 bg-light text-yellow max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            Projects Links
          </div>
        </motion.div>
      </div>
    </section>
  );
}
