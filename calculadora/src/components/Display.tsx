type DisplayProps = {
  value: string
}

export function Display({ value }: DisplayProps) {
  return (
    <output className="display" aria-label={`Pantalla: ${value}`} aria-live="polite">
      {value}
    </output>
  )
}
