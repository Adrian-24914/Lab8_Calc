import { useState } from 'react'
import {
  chooseOperator,
  clearCalculator,
  initialCalculatorState,
  inputDigit,
  inputDot,
  resolveEquals,
  toggleSign,
} from '../calculator/engine'
import type { CalculatorState, UseCalculatorReturn } from '../types/calculator'

export function useCalculator(): UseCalculatorReturn {
  const [state, setState] = useState(initialCalculatorState)
  const update = (nextState: (state: CalculatorState) => CalculatorState) => setState(nextState)

  return {
    display: state.display,
    pressDigit: (digit) => update((state) => inputDigit(state, digit)),
    pressOperator: (operator) => update((state) => chooseOperator(state, operator)),
    pressEquals: () => update(resolveEquals),
    pressDot: () => update(inputDot),
    pressToggleSign: () => update(toggleSign),
    pressClear: () => setState(clearCalculator()),
  }
}
