export type Operator = '+' | '-' | '*' | '/' | '%' | null

export interface CalculatorState {
  display: string
  operator: Operator
  operand: string
  shouldResetDisplay: boolean
}

export interface UseCalculatorReturn {
  display: string
  pressDigit: (digit: string) => void
  pressOperator: (op: Operator) => void
  pressEquals: () => void
  pressDot: () => void
  pressToggleSign: () => void
  pressClear: () => void
}