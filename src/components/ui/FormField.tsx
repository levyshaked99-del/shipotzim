import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

const fieldClassName =
  'w-full min-h-[48px] border border-white/[0.1] bg-white/[0.025] px-4 py-3.5 text-sm font-light text-text placeholder:text-muted/45 transition-[border-color,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus:border-gold/40 focus:bg-white/[0.035] focus:outline-none focus:ring-1 focus:ring-gold/20'

const labelClassName = 'mb-2 block text-[0.6875rem] font-light tracking-[0.12em] text-muted/85'

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export function FormField({ label, id, className = '', ...props }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input id={id} name={id} className={`${fieldClassName} ${className}`} {...props} />
    </div>
  )
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  id: string
  options: readonly { value: string; label: string }[]
  placeholder?: string
}

export function FormSelect({
  label,
  id,
  options,
  placeholder,
  className = '',
  ...props
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <select id={id} name={id} className={`${fieldClassName} appearance-none ${className}`} {...props}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-bg text-text">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  id: string
}

export function FormTextarea({ label, id, className = '', ...props }: FormTextareaProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        className={`${fieldClassName} min-h-[140px] resize-y sm:min-h-[160px] ${className}`}
        {...props}
      />
    </div>
  )
}
