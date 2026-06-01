type ButtonProps = {
  label: string
  ariaLabel: string
  variant?: 'number' | 'operator' | 'action' | 'equals'
  onPress: () => void
}

export function Button({ label, ariaLabel, variant = 'number', onPress }: ButtonProps) {
  return (
    <button className={`calc-button calc-button--${variant}`} type="button" aria-label={ariaLabel} onClick={onPress}>
      {label}
    </button>
  )
}
