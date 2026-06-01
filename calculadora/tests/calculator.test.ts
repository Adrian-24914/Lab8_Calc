import { describe, expect, test } from 'bun:test'
import {
  calculate,
  chooseOperator,
  clearCalculator,
  inputDigit,
  inputDot,
  resolveEquals,
  toggleSign,
} from '../src/calculator/engine'
import type { CalculatorState } from '../src/types/calculator'

const enter = (state: CalculatorState, value: string) =>
  [...value].reduce((current, key) => key === '.' ? inputDot(current) : inputDigit(current, key), state)

describe('calculator engine', () => {
  test('concatenates digits and ignores input after nine visible characters', () => {
    const state = enter(clearCalculator(), '1234567899')

    expect(state.display).toBe('123456789')
  })

  test('resets the display after selecting an operator and resolves addition', () => {
    const afterOperator = chooseOperator(enter(clearCalculator(), '12'), '+')
    const result = resolveEquals(enter(afterOperator, '7'))

    expect(result.display).toBe('19')
  })

  test('resolves intermediate results when pressing consecutive operators', () => {
    const first = chooseOperator(enter(clearCalculator(), '8'), '+')
    const second = chooseOperator(enter(first, '4'), '*')
    const result = resolveEquals(enter(second, '3'))

    expect(result.display).toBe('36')
  })

  test('shows error when a subtraction result becomes negative', () => {
    expect(calculate('3', '8', '-')).toBe('ERROR')
  })

  test('shows error when the result exceeds the display limit', () => {
    expect(calculate('999999999', '2', '*')).toBe('ERROR')
  })

  test('formats long decimal division results into the nine character display', () => {
    expect(calculate('22', '7', '/')).toBe('3.1428571')
  })

  test('rejects invalid division and modulo results', () => {
    expect(calculate('8', '0', '/')).toBe('ERROR')
    expect(calculate('8', '0', '%')).toBe('ERROR')
  })

  test('counts the sign as part of the display length when toggling negatives', () => {
    const negative = toggleSign(enter(clearCalculator(), '12345678'))
    const unchanged = inputDigit(negative, '9')

    expect(negative.display).toBe('-12345678')
    expect(unchanged.display).toBe('-12345678')
  })
})
