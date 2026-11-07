import { FEATURED_PROJECTS } from '../../data/site'

interface ProjectCardProps {
  name: string
  location: string
  area: string
  image: string
  href: string
}

export function ProjectCard({ name, location, area, image, href }: ProjectCardProps) {
  return (
    <article className="group relative">
      <a href={href} className="block overflow-hidden">
        <div className="relative aspect-[4/5] overflow-hidden bg-bg">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/10 transition-opacity duration-500 group-hover:via-bg/40" />
          <div className="absolute inset-0 bg-bg/10 transition-colors duration-500 group-hover:bg-transparent" />
        </div>

        <div className="relative -mt-20 px-5 pb-6 pt-14 sm:-mt-24 sm:px-7 sm:pb-9 sm:pt-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gold/70 transition-all duration-500 group-hover:w-12" />
            <span className="text-[0.65rem] font-light tracking-[0.2em] text-gold/80 uppercase">
              {area}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold tracking-tight text-text transition-colors duration-300 group-hover:text-text sm:text-[1.65rem]">
            {name}
          </h3>

          <p className="mt-2 text-sm font-extralight tracking-wide text-muted/80">{location}</p>

          <span className="mt-6 inline-flex items-center gap-2 text-[0.75rem] font-medium tracking-[0.08em] text-muted transition-all duration-300 group-hover:gap-3 group-hover:text-gold">
            {FEATURED_PROJECTS.cta}
            <svg
              viewBox="0 0 16 16"
              className="h-3 w-3 stroke-current transition-transform duration-300 group-hover:-translate-x-1"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3L5 8l5 5"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </a>
    </article>
  )
}
