import { socialLinks } from "@/constants/socialLinks";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p className="text-center">
          © 2025 <strong>Andrii Zakharenko</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              target="_blank"
              className="transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <Image
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
