import { FEATURED_PROJECTS, PROJECTS } from '../../data/site'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { ProjectCard } from '../ui/ProjectCard'

export function FeaturedProjects() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.12)

  return (
    <section
      id="projects"
      ref={ref}
      className="border-t border-white/[0.05] bg-bg py-24 sm:py-28 lg:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-10">
        <header
          className={`mb-16 max-w-2xl transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] sm:mb-20 lg:mb-24 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-gold/60" />
            <span className="text-[0.65rem] font-light tracking-[0.28em] text-gold/80 uppercase">
              תיק עבודות
            </span>
          </div>

          <h2
            id="projects-heading"
            className="font-display text-[clamp(2rem,5vw,3.25rem)] font-black leading-[1.05] tracking-tight text-text"
          >
            {FEATURED_PROJECTS.title}
          </h2>

          <p className="mt-6 text-base font-extralight leading-[1.85] text-muted sm:text-[1.0625rem] lg:max-w-xl">
            {FEATURED_PROJECTS.subtitle}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`transition-[opacity,transform] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >
              <ProjectCard
                name={project.name}
                location={project.location}
                area={project.area}
                image={project.image}
                href={project.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
