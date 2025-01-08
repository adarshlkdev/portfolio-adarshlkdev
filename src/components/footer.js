import styles from "@/constants.js/styles";
import Link from "next/link";
import { Marhey } from "next/font/google";

const marhey = Marhey({ subsets: ["latin"] });

export default function Footer() {
  const currYear = new Date().getFullYear();
  const info =
    "I'm available for freelance work. If you have a project you think I can help with, please get in touch.";
  return (
    <footer style={{ paddingTop: "2rem" }} className="bg-[#060606]">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-2">
          <h2
            className={`${styles.subheading} text-blue tracking-tighter`}
            alt="Let's work together"
          >
            Let's work together
          </h2>
          <p
            alt={info}
            className={`mx-auto max-w-[600px] text-gray-500 ${styles.paragraph}`}
          >
            {info}
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm space-y-2">
          <Link
            href={"mailto:erlkadarsh@gmail.com"}
            className={`underline text-xl ${marhey.className}`}
          >
            erlkadarsh@gmail.com
          </Link>
        </div>
      </div>

      <div className="container flex items-center px-4 md:px-6">
        <div className="mx-auto flex items-center flex-col gap-1 text-xs">
          <br />
          <p
            className="text-gray-500 dark:text-gray-400"
            alt="© 2024 Parth Kabra. All rights reserved"
          >
            © {currYear} adarshlkdev. All rights reserved.
          </p>
          <p
            style={{ marginBottom: "2rem" }}
            className="text-gray-500 dark:text-gray-400"
            alt="This website took 10+ coffees to bring to life."
          >
            World is full of coffee, but this website took 10+ coffees to bring
            to life. ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
