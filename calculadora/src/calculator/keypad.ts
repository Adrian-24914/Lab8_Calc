import type { OperatorKey } from '../types/calculator'

export type CalculatorKey =
  | { id: string, label: string, ariaLabel: string, kind: 'digit', value: string }
  | { id: string, label: string, ariaLabel: string, kind: 'operator', value: OperatorKey }
  | { id: string, label: string, ariaLabel: string, kind: 'action', action: 'clear' | 'dot' | 'sign' | 'equals' }

export const keypadKeys: CalculatorKey[] = [
  { id: 'clear', label: 'C', ariaLabel: 'Limpiar', kind: 'action', action: 'clear' },
  { id: 'sign', label: '+/-', ariaLabel: 'Cambiar signo', kind: 'action', action: 'sign' },
  { id: 'modulo', label: '%', ariaLabel: 'Módulo', kind: 'operator', value: '%' },
  { id: 'divide', label: '÷', ariaLabel: 'Dividir', kind: 'operator', value: '/' },
  { id: 'seven', label: '7', ariaLabel: 'Siete', kind: 'digit', value: '7' },
  { id: 'eight', label: '8', ariaLabel: 'Ocho', kind: 'digit', value: '8' },
  { id: 'nine', label: '9', ariaLabel: 'Nueve', kind: 'digit', value: '9' },
  { id: 'multiply', label: '×', ariaLabel: 'Multiplicar', kind: 'operator', value: '*' },
  { id: 'four', label: '4', ariaLabel: 'Cuatro', kind: 'digit', value: '4' },
  { id: 'five', label: '5', ariaLabel: 'Cinco', kind: 'digit', value: '5' },
  { id: 'six', label: '6', ariaLabel: 'Seis', kind: 'digit', value: '6' },
  { id: 'subtract', label: '-', ariaLabel: 'Restar', kind: 'operator', value: '-' },
  { id: 'one', label: '1', ariaLabel: 'Uno', kind: 'digit', value: '1' },
  { id: 'two', label: '2', ariaLabel: 'Dos', kind: 'digit', value: '2' },
  { id: 'three', label: '3', ariaLabel: 'Tres', kind: 'digit', value: '3' },
  { id: 'add', label: '+', ariaLabel: 'Sumar', kind: 'operator', value: '+' },
  { id: 'zero', label: '0', ariaLabel: 'Cero', kind: 'digit', value: '0' },
  { id: 'dot', label: '.', ariaLabel: 'Punto decimal', kind: 'action', action: 'dot' },
  { id: 'equals', label: '=', ariaLabel: 'Igual', kind: 'action', action: 'equals' },
]
