import Image from "next/image"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"
import { GitFinder , FireSink , Echo , Kanban, code , external } from "@/constants.js/assets";
import styles from "@/constants.js/styles";
import { githubLink, projectsInfo } from "@/constants.js/links";

function ProjectCard({name, description, image, sourceLink, visitLink, techs}){
    return (
        <div className="relative group outline-none">
            <Card className="w-full border-[#2d2d2d] border shadow-lg bg-[#0b0c0e] group-hover:shadow-xl transition-transform scale-95 group-hover:scale-100">
                <Image
                    alt="Project thumbnail"
                    className="aspect-video overflow-hidden rounded-t-lg object-cover"
                    src={image}
                />

                <CardContent className="p-4">
                    <h3 className="text-xl text-white font-[400] sm:text-2xl">{name}</h3>
                
                    <p className="text-[17px] text-gray-400 truncate-3 md:text-base dark:text-gray-400">
                    {description}
                    </p>
                    <div className="flex flex-wrap items-center">
                        {techs.map((tech, index)=>{
                            return (
                                <>
                                    <span key={`${tech} ${index}`} alt={tech} className={`text-gray-400 my-2 mx-1 bg-[#111111] border-[#2d2d2d] border px-2 rounded-[100px]`}>
                                        {tech}
                                    </span>
                                </>
                            )
                        })}
                    </div>
                    <div className="flex flex-row items-center my-2">
                        <Link href={visitLink} target="blank">
                            <Image src={external} />
                        </Link>
                        <Link href={sourceLink} target="blank">
                            <Image src={code} className="mx-2"/>
                        </Link>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default function Projects() {
    const projects = [
        {
            title: "FireSink",
            img: FireSink,
            link: projectsInfo.FireSink.visit,
            source: projectsInfo.FireSink.github,
            tech: ["Next JS", "Typescript", "Shadcn", "Zustand", "FireBase" , "Clerk"],
            info: "FireSink is a robust file storage solution built with Next.js and TypeScript. It allows you to store all types of files (JPEG, PNG, DOCs, PPTX, MP4, etc.) with their timestamps of creation. It also provides the functionality to perform CRUD operations on them."
        },
        {
            title: "GitFinder",
            img: GitFinder,
            link: projectsInfo.GitFinder.visit,
            source: projectsInfo.GitFinder.github,
            tech: ["Next JS", "Typescript", "Shadcn", "Acertainity UI"],
            info : "GitFinder is your gateway to the coding world. Utilizing GitHub API, effortlessly search users by username, delve into their repositories, and access vital information, streamlining your development journey."
        },
        {
            title: "Kanbanize",
            img: Kanban,
            link: projectsInfo.Kanbanize.visit,
            source: projectsInfo.Kanbanize.github,
            tech: ["Next JS", "Typescript", "Shadcn", "Clerk", "MongoDB"],
            info: "Streamlined task management using a Kanban board to enhance project tracking and team collaboration. Kanbanize is a project management tool that allows you to create, update, and delete tasks, ensuring a seamless workflow."
        },
        {
            title: "Echo",
            img: Echo,
            link: projectsInfo.Echo.visit,
            source: projectsInfo.Echo.github,
            tech: ["Next JS", "Typescript", "Shadcn", "Gemini API"],
            info: "Introducing Echo, an innovative project leveraging the Google Gemini API. Seamlessly sync your Gemini content across devices, ensuring a consistent browsing experience. Unlock the full potential of Gemini with Echo's intuitive features and enhanced accessibility.."
        }
    ];
    return (
        <>
        <section id="projects" className="w-full py-12 lg:py-16 bg-black bg-dot-white/[0.3] relative">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
           
            <div className="container px-4 space-y-10 lg:space-y-12 ">
                <div className="space-y-4 lg:space-y-0 text-center">
                    <h2 className={`${styles.subheading} text-blue`}>Latest Projects</h2>
                    
                    <p className={`${styles.paragraph}`}>
                        Check out some of my recent and most exciting projects.
                    </p>

                </div>
            
                <div className="grid gap-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
                    {projects.map((project, index)=>{
                        return (
                        <ProjectCard 
                            key={index} 
                            sourceLink={project.source} 
                            visitLink={project.link} 
                            name={`${index + 1}. ${project.title}`} 
                            image={project.img} 
                            description={project.info} 
                            techs={project.tech}
                        />
                        )
                    })}
                </div>
                
                <div className="w-full text-center">
                    <Link href={githubLink} target="blank" className={`${styles.button} relative z-24 px-4`}>View more</Link>
                </div>

            </div>

        </section>

        </>
    )
}


