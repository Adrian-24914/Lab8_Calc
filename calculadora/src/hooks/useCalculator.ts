import { useState } from 'react'
import type { Operator, UseCalculatorReturn } from '../types/calculator'

const calculate = (a: string, b: string, op: Operator): string => {
  const numA = parseFloat(a)
  const numB = parseFloat(b)
  let result: number

  if (op === '+') result = numA + numB
  else if (op === '-') result = numA - numB
  else if (op === '*') result = numA * numB
  else if (op === '%') result = numA % numB
  else if (op === '/') result = numA / numB
  else return b

  if (result < 0) return 'ERROR'
  if (result > 999999999) return 'ERROR'

  const str = result.toString()
  if (str.length <= 9) return str
  const fixed = result.toFixed(9 - str.indexOf('.') - 1)
  return fixed.length <= 9 ? fixed : 'ERROR'
}

export function useCalculator(): UseCalculatorReturn {
  const [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState<Operator>(null)
  const [operand, setOperand] = useState('0')
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false)

  const pressDigit = (digit: string) => {
    if (display.length >= 9 && !shouldResetDisplay) return
    if (shouldResetDisplay) {
      setDisplay(digit)
      setShouldResetDisplay(false)
    } else {
      setDisplay(display === '0' ? digit : display + digit)
    }
  }

  const pressOperator = (op: Operator) => {
    if (display === 'ERROR') return
    if (operator !== null) {
      const result = calculate(operand, display, operator)
      setDisplay(result)
      setOperand(result)
    } else {
      setOperand(display)
    }
    setOperator(op)
    setShouldResetDisplay(true)
  }

  const pressEquals = () => {
    if (operator === null || display === 'ERROR') return
    const result = calculate(operand, display, operator)
    setDisplay(result)
    setOperand('0')
    setOperator(null)
    setShouldResetDisplay(true)
  }

  const pressDot = () => {
    if (shouldResetDisplay) {
      setDisplay('0.')
      setShouldResetDisplay(false)
      return
    }
    if (display.includes('.')) return
    if (display.length >= 9) return
    setDisplay(display + '.')
  }

  const pressToggleSign = () => {
    if (display === '0' || display === 'ERROR') return
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
    } else {
      if (display.length >= 9) return
      setDisplay('-' + display)
    }
  }

  const pressClear = () => {
    setDisplay('0')
    setOperator(null)
    setOperand('0')
    setShouldResetDisplay(false)
  }

  return {
    display,
    pressDigit,
    pressOperator,
    pressEquals,
    pressDot,
    pressToggleSign,
    pressClear,
  }
}
