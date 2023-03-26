import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-deep-blue">
          <SocialMediaIcons />
          <p className="font-playfair text-md text-yallow mb-1">©2023. All Rights Reserved.</p>
    </footer>
  );
}
