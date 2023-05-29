import joel from "../assets/joel.png";
import Typewriter from "typewriter-effect";
import SocialMediaIcons from "./../components/SocialMediaIcons";

export default function About() {
  return (
    <div className="bg-white h-auto py-5 w-full" id="about">
      <h2 className="text-center font-playfair font-bold text-2xl text-grey mb-5">
        About
      </h2>
      <div className="md:w-1/2 md:flex justify-between mx-auto">
        <img
          src={joel}
          alt="profile img"
          className="mx-auto md:m-0 md:order-2 mb-5 w-2/3 rounded-xl md:w-2/6"
        />
        <div className="relative ml-20 md:w-3/6 md:m-0 w-3/4">
          <div className="absolute top-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-blob"></div>
          <p className="text-black font-bold font-playfair text-xl md:text-xl">
            Joel Aliyu
          </p>
          <p className="text-grey2 font-bold font-playfair text-base md:text-lg">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Open Sourcerer",
                  "Tech blogger",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p className="text-base text-grey md:text-lg">
            I am a curious full-stack web developer who places a premium on
            leaving a positive mark through the continual application of my core
            principle of dedication. I come into web development with varied
            scientific backgrounds and a fresh outlook. I'm currently putting in
            a lot of effort to become a better professional.
          </p>
          <SocialMediaIcons />
        </div>
      </div>
    </div>
  );
}
