import { buttonVariantFor } from '../calculator/buttonVariant'
import { keypadKeys } from '../calculator/keypad'
import { moveKeypadFocus } from '../calculator/moveKeypadFocus'
import { pressKey, type CalculatorActions } from '../calculator/pressKey'
import { Button } from './Button'

export function Keypad(actions: CalculatorActions) {
  return (
    <div className="keypad" role="group" aria-label="Teclado" onKeyDown={moveKeypadFocus}>
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
