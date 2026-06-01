import { buttonVariantFor } from '../calculator/buttonVariant'
import { keypadKeys } from '../calculator/keypad'
import { pressKey, type CalculatorActions } from '../calculator/pressKey'
import { Button } from './Button'

export function Keypad(actions: CalculatorActions) {
  return (
    <div className="keypad" role="group" aria-label="Teclado de calculadora">
      {keypadKeys.map((key) => (
        <Button
          key={key.id}
          label={key.label}
          ariaLabel={key.ariaLabel}
          variant={buttonVariantFor(key)}
          onPress={() => pressKey(key, actions)}
        />
      ))}
    </div>
  )
}
