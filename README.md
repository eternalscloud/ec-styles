# @eternaljs/styles

A comprehensive design system and styling package for Eternals JS applications. Features complete color palettes, typography system, spacing utilities, theming capabilities, and modern CSS custom properties.

## Installation

```bash
npm install @eternaljs/styles
```

## Usage

### CSS/Styles

Import the compiled CSS:

```css
@import '@eternaljs/styles/styles';
```

Or import the SCSS source:

```scss
@import '@eternaljs/styles/scss';
```

### React Components

```tsx
import { DayPicker, HourPicker, Loading } from '@eternaljs/styles';

// DayPicker component
<DayPicker
  value={15}
  onChange={(day) => console.log('Selected day:', day)}
  placeholder="Select day"
/>

// HourPicker component
<HourPicker
  value={14}
  onChange={(hour) => console.log('Selected hour:', hour)}
  placeholder="Select hour"
/>

// Loading component
<Loading />
```

## Available Components

- **DayPicker**: A day selection component with calendar interface
- **HourPicker**: An hour selection component with 24-hour format  
- **Loading**: A loading spinner component

## Package Structure

```
@eternaljs/styles/
├── dist/
│   ├── index.js      # ES modules
│   ├── index.cjs     # CommonJS
│   ├── index.css     # Compiled styles
│   └── index.d.ts    # TypeScript declarations
├── src/
│   ├── index.ts      # Main entry point
│   ├── index.scss    # SCSS source
│   └── components/   # React components
└── package.json      # Package configuration
```

## Features

- Complete color palette system
- Typography system with multiple font families
- Spacing utilities
- Theming capabilities
- Light/dark theme support
- Modern CSS custom properties
- Responsive design utilities

## Development

```bash
# Install dependencies
npm install

# Build the library (CSS + Components)
npm run build

# Format code
npm run format

# Lint code
npm run lint
```

## Build Output

When you run `npm run build`, it generates:

- **`dist/index.js`** (207.56 kB) - ES modules format
- **`dist/index.cjs`** (142.72 kB) - CommonJS format  
- **`dist/index.css`** (1.99 kB) - Compiled styles
- **`dist/index.d.ts`** - TypeScript declarations

## Publishing

```bash
# Test build
npm run build

# Publish to npm
npm publish

# Or test publish first
npm publish --dry-run
```

## License

MIT