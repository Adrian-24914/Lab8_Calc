import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta = {
  title: 'Calculator/Button',
  component: Button,
  args: {
    onPress: () => undefined,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Number: Story = {
  args: { label: '7', ariaLabel: 'Siete', variant: 'number' },
}

export const Operator: Story = {
  args: { label: '×', ariaLabel: 'Multiplicar', variant: 'operator' },
}

export const Equals: Story = {
  args: { label: '=', ariaLabel: 'Igual', variant: 'equals' },
}
