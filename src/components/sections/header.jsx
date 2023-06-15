import Image from "next/image";
import React from "react";
import mail from "../../../public/assets/mail.png";
import CV from "../../../public/assets/cv.png";
import "../../styles/header.scss";

const buttonsContent = [
  {
    prompt: "Save Resume",
    href: "https://drive.google.com/file/d/11JVFfJYaJqUawXFev3lKbBEhLdWbZvn2/view",
    img: CV,
    key: "CV",
  },
  {
    prompt: "Get in touch!",
    href: "mailto:anna.joy.inbox@gmail.com?subject=Portfolio website inquiry&body=Let’s talk about the universe, baby.",
    img: mail,
    key: "mail",
  },
];

function Header() {
  return (
    <div className="header sm:px-16 px-8 sm:pt-10 pt-8">
      {buttonsContent.map((button) => (
        <button key={button.key} className="header-button" type="button">
          <a
            className="flex sm:gap-1.5 items-center"
            href={button.href}
            target="_blank"
          >
            <Image alt={button.key} src={button.img} className=" w-8" />
            <p className="hidden sm:contents pl-5">{button.prompt}</p>
          </a>
        </button>
      ))}
    </div>
  );
}

export default Header;
