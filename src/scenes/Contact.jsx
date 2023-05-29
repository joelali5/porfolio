import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contact from "./../assets/contact.jpg";

export default function Contact() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) e.preventDefault();
  };

  const buttonVariant = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.1,
      },
    },
  };

  const contactImageVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        delay: 0.5,
        duration: 1.5,
      },
    },
  };
  const contactFormVariant = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        delay: 0.5,
        duration: 1.5,
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
        transition: { ease: "easeInOut" },
      },
    },
  };

  return (
    <div className="bg-white pt-32">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="md:w-2/3 mx-auto pb-10"
        id="contact"
      >
        <motion.div
          className="flex justify-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-2xl mb-5 text-black">
            Contact Me
          </p>
        </motion.div>

        <div className="md:flex justify-center gap-16 mt-5 w-3/4 md: mx-auto">
          <motion.div
            className="md:w-1/2"
            variants={contactImageVariants}
            initial="hidden"
            animate="visible"
          >
            <img src={contact} alt="Contact" w-full />
          </motion.div>
          <motion.div
            className="basis-1/2 mt-10 md:mt-0"
            variants={contactFormVariant}
            initial="hidden"
            animate="visible"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/4f35e0ed13fecac5fe565def11150a7c"
              method="POST"
            >
              <input
                className="w-full bg-light font-semibold placeholder-opaque-black p-3"
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === "required" && "This field is required!"}
                  {errors.maxLength.type === "maxLength" &&
                    "The maxLength is a 100 characters."}
                </p>
              )}

              <input
                className="w-full bg-light font-semibold placeholder-opaque-black p-3 mt-5 border-1 border-black"
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.email.type === "required" &&
                    "This field is required!"}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 bg-light"
                type="text"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.message.type === "required" &&
                    "This field is required!"}
                  {errors.maxLength.type === "maxLength" &&
                    "Max Length is 2000 characters."}
                </p>
              )}

              <motion.button
                type="submit"
                className="p-3 rounded-lg bg-light font-semibold text-grey mt-5 hover:bg-yellow hover:text-white hover:border-2 transition duration-500"
                variants={buttonVariant}
                whileHover="hover"
              >
                Send message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
