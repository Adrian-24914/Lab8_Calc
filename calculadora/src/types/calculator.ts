export type OperatorKey = '+' | '-' | '*' | '/' | '%'
export type Operator = OperatorKey | null

export interface CalculatorState {
  display: string
  operator: Operator
  operand: string
  shouldResetDisplay: boolean
}

export interface UseCalculatorReturn {
  display: string
  pressDigit: (digit: string) => void
  pressOperator: (op: OperatorKey) => void
  pressEquals: () => void
  pressDot: () => void
  pressToggleSign: () => void
  pressClear: () => void
}
