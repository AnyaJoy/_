import ipet from "../../../public/assets/projects/ipet.png";
import blog from "../../../public/assets/projects/blog.png";
import stuff_sharing from "../../../public/assets/projects/stuff_sharing.png";
import git from "../../../public/assets/logos/git-white.png";
import youtube from "../../../public/assets/logos/youtube-white.png";
import web from "../../../public/assets/logos/website-white.png";

export const projects = [
    {
      name: "Stuff Sharing",
      description:
        "A responsive landing page for an all-things exchange platform. Built with a lot of Midjourney over night :)",
      img: stuff_sharing,
      tech: "Next.js · Tailwind · MongoDB",
      color: "orange",
      youtube: "",
      git: "https://github.com/AnyaJoy/Stuff_Sharing_Landing",
      web: "https://stuff-sharing-landing.vercel.app",
    },
    {
      name: "Personal blog",
      description:
        "A responsive blog for sharing thoughts, experiences, and insights. Provides a possibility to filter content by tags as well as to manage data and comments through content platform.",
      img: blog,
      tech: "Next.js · Tailwind · PostgreSQL",
      color: "yellow",
      youtube: "",
      git: "https://github.com/AnyaJoy/personal_blog",
      web: "https://personal-blog-three-rouge.vercel.app",
    },
    {
      name: "iPet",
      description:
        "A pet-adoption platform born as a final full-stack bootcamp project. Search and adopt pets as a user, monitor and manage as an admin. A digital haven where hearts unite for loving companionship.",
      img: ipet,
      tech: "React.js · NodeJS · MySql · CSS (literally, just css)",
      color: "red",
      youtube: "",
      git: "https://github.com/AnyaJoy/pet-adoption-be",
      web: "",
    },
  ];
  
  export const links = [
    { name: "git", img: git },
    { name: "web", img: web },
    { name: "youtube", img: youtube },
  ];