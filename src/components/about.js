import Link from "next/link";
import Image from "next/image";
import { about } from "@/constants.js/assets";
import styles from "@/constants.js/styles";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function About() {
  const words = [
    {
      text: "I",
      className: "text-white",
    },
    {
      text: "'m a",
      className: "text-white",
    },
    {
      text: "Full Stack Developer",
      className: "text-blue",
    },
  ];
  const info =
    "I'm a dedicated MERN Stack Developer with the experience of creating dynamic, user-friendly web applications. Skilled in React, Node.js, and MongoDB, I specialize in crafting seamless digital solutions that blend functionality with exceptional user experience. My work spans diverse projects, allowing me to refine my expertise in both frontend and backend development while delivering innovative and efficient results tailored to unique requirements.";

  return (
    <section
      id="about"
      className="w-full py-3 px-6"
      style={{ paddingBottom: "5rem" }}
    >
      <div className="container flex flex-row about items-center justify-center gap-4 px-4 text-center md:px-6 xl:gap-10">
        <div className="grid gap-3 text-left">
          <p className="text-sm font-medium tracking-wide uppercase text-gray-500 ">
            About Me
          </p>
          <div className="space-y-2">
            <h2 className={styles.subheading}>
              <span className="text-blue">नमस्ते,</span>{" "}
              <TypewriterEffectSmooth words={words} />
            </h2>
            <p className="text-gray-400 text-lg text-justify" alt={info}>
              {info}
            </p>
            <Link
              href={"Resume-current-adarshlkdev.pdf"}
              download="Resume-adarshlkdev"
              target="_blank"
            >
              <button className={styles.button}>My Resume</button>
            </Link>
          </div>
        </div>
        <Image src={about} />
      </div>
    </section>
  );
}
