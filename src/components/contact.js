'use client'

import Link from "next/link"
import { gmail, discord, instagram, githublogo, linkedin, contact , twitter } from "@/constants.js/assets"
import Image from "next/image"
import styles from "@/constants.js/styles"
import { discordLink, gmailLink, githubLink , linkedinLink, twitterLink } from "@/constants.js/links"

export default function Contact() {
    const social = [
        { text: "Discord",  icon: discord,   link: discordLink   },
        { text: "Linkedin", icon: linkedin,  link: linkedinLink  },
        { text: "Github",icon: githublogo, link:githubLink },
        { text: "Gmail",    icon: gmail,     link: gmailLink     },
    ]

    const info = "I'm always open to new opportunities and interesting projects. Feel free to reach out using the platform that suits you best."

    return (
            <section id="contact" className="container flex flex-row about items-center justify-center gap-4 px-4 text-center md:px-6 xl:gap-10 bg-black py-6">
                <div className="container relative z-24 px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className={`${styles.subheading} text-blue tracking-tighter`}>Get in Touch</h2>
                        <p alt={info} className={`max-w-[700px] text-gray-400 ${styles.paragraph}`}>
                            {info}
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        {social.map((app, index)=>{
                            return (
                                <Link href={app.link}>
                                    <Image src={app.icon} className={`${app.text === "Discord" ? 'w-[33px]' : 'w-[30px]'} ${index == 1 ? '' : (index == 3) ? 'mx-0' : 'mx-3'}`}/>
                                </Link>
                            )
                        })}
                    </div>
                    </div>
                </div>
                <Image className="floating" src={contact} />
            </section>
    )
}

