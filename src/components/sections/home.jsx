import Image from "next/image";
import React from "react";
import astronaut from "../../../public/assets/computer-no-bg-black-helmet.png";
import "../../styles/home.scss";
import Link from "next/link";

function Home() {
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="home-bg">
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-16 px-7 lg:px-48 lg:pt-0 pt-28 lg:h-screen lg:pb-0 pb-28">
        <div className="col-span-1 lg:col-span-4 self-center text-center lg:text-left">
          <p className="text-4xl md:text-5xl xl:text-6xl lg:pb-4 pb-2">
            Hey, I&#39;m{" "}
            <Link
              className="highlight hover-blue"
              href="#about"
              onClick={handleScroll}
            >
              {"<Anya>"}
            </Link>
          </p>
          <p className="text-lg md:text-2xl">
            A full-stack developer based in Israel.
          </p>
          <p className="mt-5 md:mt-10 text-xl md:text-4xl">
            Check out my{" "}
            <Link
              className="highlight hover-red"
              href="#projects"
              onClick={handleScroll}
            >
              projects
            </Link>{" "}
            and{" "}
            <Link
              className="highlight hover-yellow"
              href="#skills"
              onClick={handleScroll}
            >
              skills
            </Link>
            .
          </p>
        </div>
        <div className="col-span-1 lg:col-span-2 self-center">
          <Image
            alt="astronaut"
            src={astronaut}
            className="lg:w-auto w-7/12 h-auto m-auto pt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
