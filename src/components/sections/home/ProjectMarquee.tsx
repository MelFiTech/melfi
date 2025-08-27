/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const projects = [
    {
        img: "https://picsum.photos/300/400?random=1",
    },
    {
        img: "https://picsum.photos/300/400?random=2",
    },
    {
        img: "https://picsum.photos/300/400?random=3",
    },
    {
        img: "https://picsum.photos/300/400?random=4",
    },
    {
        img: "https://picsum.photos/300/400?random=5",
    },
    {
        img: "https://picsum.photos/300/400?random=6",
    },
    {
        img: "https://picsum.photos/300/400?random=7",
    },
    {
        img: "https://picsum.photos/300/400?random=8",
    },
];

const firstRow = projects.slice(0, Math.ceil(projects.length / 2));
const secondRow = projects.slice(Math.ceil(projects.length / 2));

const ProjectCard = ({
    img,
}: {
    img: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-fit w-64 cursor-pointer overflow-hidden rounded-xl border mb-4",
                "border-white/10 hover:border-white/20 transition-all duration-300"
            )}
        >
            <img
                src={img}
                alt="Project showcase"
                className="w-full h-80 object-cover rounded-xl"
            />
        </figure>
    );
};

export function ProjectMarquee() {
    return (
        <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden">
            {/* Left column - moves down (with reverse) */}
            <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                {firstRow.map((project, index) => (
                    <ProjectCard key={`first-${index}`} {...project} />
                ))}
            </Marquee>
            {/* Right column - moves up (no reverse) */}
            <Marquee pauseOnHover vertical className="[--duration:20s]">
                {secondRow.map((project, index) => (
                    <ProjectCard key={`second-${index}`} {...project} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black"></div>
        </div>
    );
}