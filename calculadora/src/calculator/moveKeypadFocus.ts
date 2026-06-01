import type { KeyboardEvent } from 'react'

const columns = 4
const keyMoves = {
  ArrowLeft: -1,
  ArrowRight: 1,
  ArrowUp: -columns,
  ArrowDown: columns,
}

export const moveKeypadFocus = (event: KeyboardEvent<HTMLDivElement>) => {
  const move = keyMoves[event.key as keyof typeof keyMoves]
  if (move === undefined) return

  const buttons = [...event.currentTarget.querySelectorAll<HTMLButtonElement>('button')]
  const index = buttons.indexOf(event.target as HTMLButtonElement)
  const nextIndex = Math.min(Math.max(index + move, 0), buttons.length - 1)
  if (index === -1 || nextIndex === index) return

  event.preventDefault()
  buttons[nextIndex].focus()
}
