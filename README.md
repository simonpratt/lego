# Usage

### Installation

- Install peer dependencies
  `npm i -S styled-components@^5.2.1` (and `npm i -D @types/styled-components` if using typescript)
- Install package
  `npm i -S @dtdot/lego`

### Theme Context

Lego requires a `styled-components` theme context to function, this instructs lego whether to render in dark or default themes. It's recommended to place this near the root of your application.

```jsx
import { ThemeProvider } from 'styled-components';
import { Themes } from '@dtdot/lego';

export default function MyApp() {
  return (
    <ThemeProvider theme={Themes.default}>
      <AppImplementation />
    </ThemeProvider>
  );
}
```

### Components

After the above steps have been completed you're ready to start building. Here's a small example of importing and using a component, but see [Documentation](#documentation) for more complete examples.

```jsx
import { Alert } from '@dtdot/lego';

export default function Example() {
  return <Alert variant='success' message="Great! I'm rendering my first lego component..." />;
}
```

### Documentation

Lego uses storybook for documentation. This is yet to be hosted so if you need to view the documentation see [Storybook](#storybook) under [Contributing](#contributing) for details about how to run the documentation locally.

# Contributing

## Storybook

Storybook is used both for testing as you develop and as living documentation. After cloning the repository you can run `npm start` at the root directory to host the documentation locally on port `6006`. Changes to the source will hot reload the documentation as you develop.

## Linting

Dependencies are:

```
npm i --save-dev eslint eslint-config-prettier eslint-plugin-prettier prettier prettier-eslint
npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i --save-dev eslint-plugin-react eslint-plugin-react-hooks
```
