import { useCalculator } from '../hooks/useCalculator'
import { Display } from './Display'
import { Keypad } from './Keypad'

export function Calculator() {
  const calculator = useCalculator()

  return (
    <main className="app-shell">
      <section className="calculator" aria-labelledby="calculator-title">
        <h1 id="calculator-title">Calculadora Pro</h1>
        <Display value={calculator.display} />
        <Keypad {...calculator} />
      </section>
    </main>
  )
}
