import {
  contact_icon,
  experiences,
  gmail,
  linkedin,
  more,
  projects,
  tech,
  user,
  twitter,
  githublogo,
  github,
} from "@/constants.js/assets";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";
import styles from "@/constants.js/styles";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  gmailLink,
  twitterLink,
  linkedinLink,
  githubLink,
} from "@/constants.js/links";

function NavbarLink({ text, link = "" }) {
  return (
    <>
      <Link
        className={`text-lg header-link transition hover:text-[#1d8ce3] m-3 p-[.9px] text-center rounded-[100px]`}
        href={link}
      >
        {text}
      </Link>
    </>
  );
}

export default function HomeComponent() {
  const navLinks = [
    { text: "About", link: "#about", icon: user },
    { text: "Skills", link: "#skills", icon: tech },
    { text: "Projects", link: "#projects", icon: projects },
    { text: "Experiences", link: "#experiences", icon: experiences },
    { text: "Contact", link: "#contact", icon: contact_icon },
  ];

  const social = [
    { text: "Gmail", icon: gmail, link: gmailLink },
    { text: "Linkedin", icon: linkedin, link: linkedinLink },
    { text: "Github", icon: githublogo, link: githubLink },
  ];

  const info = `As someone who enjoys designing compelling products, I strive to continually improve and excel at my job.`;

  return (
    <div className="relative">
      <BackgroundBeams />

      <div className="flex w-full bg-black flex-col">
        <header className="p-10 relative z-10 my-2 h-14 flex items-center justify-center mx-w-full">
          <div className="p-4 bg-[#0b0d0e] border-[#0e1213] border rounded-[100px] navbar_">
            {navLinks.map((navLink, index) => {
              return <NavbarLink text={navLink.text} link={navLink.link} />;
            })}
          </div>

          <div className="absolute right-1 top-2 more-icon">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Image src={more} className="w-[32px]" />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                style={{ marginRight: "1rem" }}
                className="bg-[#0c0c0c] border border-[#141414] text-white shadow-md"
              >
                {navLinks.map((navlink, index) => {
                  return (
                    <Link href={navlink.link}>
                      <DropdownMenuItem className="cursor-pointer navbar_opt rounded-md">
                        <Image
                          src={navlink.icon}
                          className={`mx-1 ${index == 0 ? "" : "p-1"}`}
                        />{" "}
                        {navlink.text}
                      </DropdownMenuItem>
                    </Link>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 relative z-10">
          <section className="w-full py-20 hero">
            <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
              <div className="space-y-2 text-center">
                <h1 className={styles.heading}>Hi, I'm Adarsh</h1>
                <p
                  alt={info}
                  className={`max-w-[600px] text-gray-500 ${styles.paragraph}`}
                >
                  {info}
                </p>
                <div className="flex justify-center items-center">
                  {social.map((app, index) => {
                    return (
                      <Link href={app.link} target="blank">
                        <Image
                          src={app.icon}
                          className={`w-[30px] ${index == 1 ? "" : "mx-3"}`}
                        />
                      </Link>
                    );
                  })}
                </div>
                <Link href={"#about"}>
                  <button className={styles.button}>Know more...</button>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
