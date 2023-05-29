import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/joel-aliyu/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="text-xl text-linkedin" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com/jimmyx__"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter className="text-xl text-twitter" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/joelali5"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub className="text-xl text-black" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://leetcode.com/jimmyxx_/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode className="text-xl text-leetcode" />
      </a>
    </div>
  );
}
