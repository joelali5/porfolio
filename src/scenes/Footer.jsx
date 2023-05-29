import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-white pt-20">
          <SocialMediaIcons />
          <p className="font-playfair text-md text-grey mb-1">©2023. All Rights Reserved.</p>
    </footer>
  );
}
