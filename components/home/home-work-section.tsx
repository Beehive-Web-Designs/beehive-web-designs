import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Project = {
  name: string;
  detail: string;
  href: string;
  image: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    name: "Sport Science Network",
    detail: "Full-site design, build, and custom event registration integration",
    href: "https://www.sportsciencenetwork.com/",
    image: "/work/sport-science-network.png",
    imageAlt: "Sport Science Network homepage",
  },
  {
    name: "Buugz Auto Detailing",
    detail: "Design + build from scratch",
    href: "https://buugz-auto-detailing.netlify.app/",
    image: "/work/buugz-auto-detailing.jpg",
    imageAlt: "Buugz Auto Detailing homepage",
  },
];

export function HomeWorkSection() {
  return (
    <section id="work" className="py-24 bg-section-alt">
      <div className="mx-auto max-w-7xl px-6">
        
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-bold tracking-widest uppercase text-honey-dark">
                Recent work
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Real sites for real businesses
              </h2>
            </div>
            <Link
              href="/contact"
              className="text-sm font-semibold text-foreground underline underline-offset-4 decoration-honey hover:text-honey-dark transition-colors inline-flex items-center gap-1.5"
            >
              Start yours <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const card = (
              <div className="h-full overflow-hidden rounded-2xl bg-card card-soft hover-pop">
                <div className="relative aspect-[16/10] border-b border-border bg-muted/40">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 448px"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-bold mb-1">{project.name}</h3>
                  <p className="text-xs font-medium text-honey-dark">
                    {project.detail}
                  </p>
                </div>
              </div>
            );

            return (
              <div key={project.name} className="h-full">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {card}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
