import type { CalculatorState, OperatorKey } from '../types/calculator'

export const ERROR_DISPLAY = 'ERROR'
export const MAX_DISPLAY_LENGTH = 9
export const MAX_VALUE = 999999999

export const initialCalculatorState: CalculatorState = {
  display: '0',
  operator: null,
  operand: '0',
  shouldResetDisplay: false,
}

const isError = (display: string) => display === ERROR_DISPLAY

export const formatResult = (result: number) => {
  if (!Number.isFinite(result)) return ERROR_DISPLAY
  if (Object.is(result, -0)) result = 0
  if (result < 0 || result > MAX_VALUE) return ERROR_DISPLAY

  const raw = result.toString()
  if (!raw.includes('e') && raw.length <= MAX_DISPLAY_LENGTH) return raw

  const integerLength = Math.trunc(result).toString().length
  const decimalPlaces = MAX_DISPLAY_LENGTH - integerLength - 1
  if (decimalPlaces < 0) return ERROR_DISPLAY

  const fixed = result.toFixed(decimalPlaces)
  const trimmed = fixed.replace(/\.?0+$/, '')
  return trimmed.length <= MAX_DISPLAY_LENGTH ? trimmed : ERROR_DISPLAY
}

export const calculate = (left: string, right: string, operator: OperatorKey) => {
  const a = Number(left)
  const b = Number(right)
  const operations = {
    '+': a + b,
    '-': a - b,
    '*': a * b,
    '/': a / b,
    '%': a % b,
  }

  return formatResult(operations[operator])
}

const withResult = (state: CalculatorState, result: string): CalculatorState => ({
  display: result,
  operator: result === ERROR_DISPLAY ? null : state.operator,
  operand: result === ERROR_DISPLAY ? '0' : result,
  shouldResetDisplay: true,
})

export const inputDigit = (state: CalculatorState, digit: string): CalculatorState => {
  if (state.shouldResetDisplay || isError(state.display)) {
    return { ...state, display: digit, shouldResetDisplay: false }
  }

  if (state.display.length >= MAX_DISPLAY_LENGTH) return state

  return { ...state, display: state.display === '0' ? digit : state.display + digit }
}

export const inputDot = (state: CalculatorState): CalculatorState => {
  if (state.shouldResetDisplay || isError(state.display)) {
    return { ...state, display: '0.', shouldResetDisplay: false }
  }

  if (state.display.includes('.') || state.display.length >= MAX_DISPLAY_LENGTH) return state
  return { ...state, display: `${state.display}.` }
}

export const toggleSign = (state: CalculatorState): CalculatorState => {
  if (state.display === '0' || isError(state.display)) return state
  if (state.display.startsWith('-')) return { ...state, display: state.display.slice(1) }
  if (state.display.length >= MAX_DISPLAY_LENGTH) return state
  return { ...state, display: `-${state.display}` }
}

export const chooseOperator = (state: CalculatorState, operator: OperatorKey): CalculatorState => {
  if (isError(state.display)) return state
  if (state.operator !== null && !state.shouldResetDisplay) {
    const nextState = withResult(state, calculate(state.operand, state.display, state.operator))
    return isError(nextState.display) ? nextState : { ...nextState, operator }
  }

  return { ...state, operator, operand: state.display, shouldResetDisplay: true }
}

export const resolveEquals = (state: CalculatorState): CalculatorState => {
  if (state.operator === null || isError(state.display)) return state
  const result = calculate(state.operand, state.display, state.operator)
  return { ...withResult(state, result), operator: null, operand: '0' }
}

export const clearCalculator = (): CalculatorState => initialCalculatorState
