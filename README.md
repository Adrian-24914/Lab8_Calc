# Calculadora Pro

Calculadora hecha con React, TypeScript, Vite y Bun para el laboratorio de componentes, testing, linting y Storybook.

## Requisitos

- Bun 1.3 o superior

## Instalacion

```bash
cd calculadora
bun install
```

## Correr la aplicacion

```bash
cd calculadora
bun run dev
```

Vite mostrara la URL local para abrir la aplicacion en el navegador.

## Tests

```bash
cd calculadora
bun test
```

Tambien se puede correr desde el script del proyecto:

```bash
cd calculadora
bun run test
```

## Lint

```bash
cd calculadora
bun run lint
```

El lint valida archivos JS, JSX, TypeScript y TSX, prohibe punto y coma, y limita las lineas a 120 caracteres.

## Storybook

```bash
cd calculadora
bun run storybook
```

Historias incluidas:

- Button
- Display
- Keyboard
- Estado ERROR

## Build

```bash
cd calculadora
bun run build
```

El resultado queda en `dist/`.
