import type { Meta, StoryObj } from '@storybook/react-vite'
import { Display } from './Display'

const meta = {
  title: 'Calculator/Display',
  component: Display,
} satisfies Meta<typeof Display>

export default meta
type Story = StoryObj<typeof meta>

export const Ready: Story = {
  args: { value: '12345.67' },
}

export const ErrorState: Story = {
  args: { value: 'ERROR' },
}
