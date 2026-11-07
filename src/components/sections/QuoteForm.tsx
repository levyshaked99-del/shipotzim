import { useState, type FormEvent } from 'react'
import { QUOTE } from '../../data/site'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { Button } from '../ui/Button'
import { FormField, FormSelect, FormTextarea } from '../ui/FormField'

function TrustCheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 stroke-gold" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5l3 3 6-6"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function QuoteForm() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.1)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section ref={ref} className="border-t border-white/[0.05] bg-bg pb-16 pt-10 sm:pb-24 sm:pt-12 lg:pb-28">
      <div className="mx-auto max-w-[720px] px-5 sm:px-8">
        {submitted ? (
          <div
            className={`border border-gold/20 bg-white/[0.02] px-6 py-14 text-center transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-10 sm:py-16 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
            role="status"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-gold/30 bg-gold/10">
              <TrustCheckIcon />
            </div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
              {QUOTE.successTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-base font-extralight leading-[1.8] text-muted/90">
              {QUOTE.successMessage}
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            noValidate
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <FormField
                id="fullName"
                label={QUOTE.labels.fullName}
                type="text"
                autoComplete="name"
                required
              />
              <FormField
                id="phone"
                label={QUOTE.labels.phone}
                type="tel"
                autoComplete="tel"
                dir="ltr"
                className="text-right"
                required
              />
              <FormField
                id="email"
                label={QUOTE.labels.email}
                type="email"
                autoComplete="email"
                dir="ltr"
                className="text-right"
                required
              />
              <FormField id="city" label={QUOTE.labels.city} type="text" autoComplete="address-level2" required />
              <div className="sm:col-span-2">
                <FormSelect
                  id="projectType"
                  label={QUOTE.labels.projectType}
                  options={QUOTE.projectTypes}
                  placeholder="בחרו סוג פרויקט"
                  required
                  defaultValue=""
                />
              </div>
              <div className="sm:col-span-2">
                <FormSelect
                  id="budget"
                  label={QUOTE.labels.budget}
                  options={QUOTE.budgetRanges}
                  placeholder="בחרו טווח תקציב"
                  required
                  defaultValue=""
                />
              </div>
              <div className="sm:col-span-2">
                <FormTextarea
                  id="description"
                  label={QUOTE.labels.description}
                  placeholder={QUOTE.descriptionPlaceholder}
                  rows={5}
                />
              </div>
            </div>

            <div
              className="mt-8 border border-white/[0.06] bg-white/[0.015] p-5 sm:mt-10 sm:p-6"
              aria-label="יתרונות"
            >
              <ul className="flex flex-col gap-4 sm:gap-5">
                {QUOTE.trustItems.map((item) => (
                  <li
                    key={item}
                    className="group flex items-start gap-3 text-sm font-extralight leading-relaxed text-muted/90 transition-colors duration-300 hover:text-text sm:text-[0.9375rem]"
                  >
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center border border-gold/25 bg-gold/10 transition-[border-color,box-shadow] duration-300 group-hover:border-gold/40 group-hover:shadow-[0_0_12px_rgba(199,116,46,0.2)]">
                      <TrustCheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 sm:mt-10">
              <Button
                type="submit"
                variant="primary"
                className="w-full !py-4 !text-sm sm:!py-[1.125rem]"
              >
                {QUOTE.submitCta}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
