interface ServiceCardProps {
  title: string
  description: string
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="group relative h-full border border-white/[0.06] bg-white/[0.015] p-6 transition-[transform,border-color,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-gold/20 hover:bg-white/[0.025] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:p-7 lg:p-8">
      <div className="mb-5 flex items-center gap-3 sm:mb-6">
        <span className="h-px w-8 bg-gold/60 transition-all duration-500 group-hover:w-12 group-hover:bg-gold/80" />
        <span className="h-1 w-1 rounded-full bg-gold/50 transition-[transform,box-shadow] duration-500 group-hover:scale-125 group-hover:shadow-[0_0_8px_rgba(199,116,46,0.4)]" aria-hidden="true" />
      </div>

      <h3 className="font-display text-lg font-semibold tracking-tight text-text transition-colors duration-300 group-hover:text-text sm:text-xl">
        {title}
      </h3>

      <p className="mt-3 text-sm font-extralight leading-[1.8] text-muted/90 sm:text-[0.9375rem]">
        {description}
      </p>
    </article>
  )
}
