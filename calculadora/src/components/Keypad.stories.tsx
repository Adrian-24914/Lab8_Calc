import type { Meta, StoryObj } from '@storybook/react-vite'
import { Keypad } from './Keypad'

const meta = {
  title: 'Calculator/Keyboard',
  component: Keypad,
  args: {
    pressDigit: () => undefined,
    pressOperator: () => undefined,
    pressEquals: () => undefined,
    pressDot: () => undefined,
    pressToggleSign: () => undefined,
    pressClear: () => undefined,
  },
} satisfies Meta<typeof Keypad>

export default meta
type Story = StoryObj<typeof meta>

export const CompleteKeyboard: Story = {}
