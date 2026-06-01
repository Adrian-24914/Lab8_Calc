import { keypadKeys } from '../calculator/keypad'
import { pressKey, type CalculatorActions } from '../calculator/pressKey'
import { Button } from './Button'

const variantFor = (key: (typeof keypadKeys)[number]) =>
  key.kind === 'operator' ? 'operator' : key.kind === 'action' && key.action === 'equals' ? 'equals' : key.kind

export function Keypad(actions: CalculatorActions) {
  return (
    <div className="keypad" role="group" aria-label="Teclado de calculadora">
      {keypadKeys.map((key) => (
        <Button
          key={key.id}
          label={key.label}
          ariaLabel={key.ariaLabel}
          variant={variantFor(key)}
          onPress={() => pressKey(key, actions)}
        />
      ))}
    </div>
  )
}
