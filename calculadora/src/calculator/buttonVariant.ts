import type { CalculatorKey } from './keypad'

export const buttonVariantFor = (key: CalculatorKey) => {
  if (key.kind === 'operator') return 'operator'
  if (key.kind === 'action' && key.action === 'equals') return 'equals'
  return key.kind
}
