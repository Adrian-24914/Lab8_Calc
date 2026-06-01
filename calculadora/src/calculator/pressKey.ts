import type { CalculatorKey } from './keypad'
import type { OperatorKey } from '../types/calculator'

export type CalculatorActions = {
  pressDigit: (digit: string) => void
  pressOperator: (operator: OperatorKey) => void
  pressEquals: () => void
  pressDot: () => void
  pressToggleSign: () => void
  pressClear: () => void
}

export const pressKey = (key: CalculatorKey, actions: CalculatorActions) => {
  if (key.kind === 'digit') actions.pressDigit(key.value)
  if (key.kind === 'operator') actions.pressOperator(key.value)
  if (key.kind === 'action' && key.action === 'clear') actions.pressClear()
  if (key.kind === 'action' && key.action === 'dot') actions.pressDot()
  if (key.kind === 'action' && key.action === 'sign') actions.pressToggleSign()
  if (key.kind === 'action' && key.action === 'equals') actions.pressEquals()
}
