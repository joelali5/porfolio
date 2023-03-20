import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="pt-2 flex flex-col justify-center items-center bg-dark-grey">
          <SocialMediaIcons />
          <p className="font-playfair text-md text-yallow mb-5">©2023. All Rights Reserved.</p>
    </footer>
  );
}
