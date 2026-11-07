interface TestimonialCardProps {
  quote: string
  author: string
}

function StarRating() {
  return (
    <div className="flex items-center gap-0.5 text-gold/85" role="img" aria-label="5 מתוך 5 כוכבים">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4"
          aria-hidden="true"
        >
          <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.77l-3.52 1.85.67-3.92-2.85-2.78 3.94-.57L8 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <article className="group relative flex h-full flex-col border border-white/[0.06] bg-white/[0.015] p-6 transition-[transform,border-color,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-gold/18 hover:bg-white/[0.025] hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)] sm:p-7 lg:p-8">
      <StarRating />

      <blockquote className="mt-5 flex-1">
        <p className="text-[0.9375rem] font-extralight leading-[1.85] text-muted/90 sm:text-base">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      <footer className="mt-6 flex items-center gap-3 border-t border-white/[0.05] pt-5">
        <span className="h-px w-6 bg-gold/40 transition-all duration-500 group-hover:w-8" aria-hidden="true" />
        <cite className="not-italic text-sm font-light tracking-wide text-text/90">{author}</cite>
      </footer>
    </article>
  )
}
