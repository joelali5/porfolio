import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-yellow text-2xl">
            JOEL ALIYU
          </p>
          <p className="font-playfair text-md text-yallow">©2023 JOEL. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
