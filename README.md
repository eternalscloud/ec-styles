# @eternals/styles

[![npm version](https://badge.fury.io/js/%40eternals%2Fstyles.svg)](https://badge.fury.io/js/%40eternals%2Fstyles)
[![npm downloads](https://img.shields.io/npm/dm/@eternals/styles.svg)](https://www.npmjs.com/package/@eternals/styles)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Eternals Cloud Styles package with design system, color palettes, typography, buttons, forms, and theming utilities.

## ✨ Features

- 🎨 **Complete Design System** - Colors, typography, spacing, shadows, and more
- 🌈 **20+ Color Palettes** - Red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose, slate, gray, zinc, neutral, stone
- 🔘 **Button Components** - Primary, secondary, success, danger, warning, info variants with outline and light styles
- 📝 **Form Components** - Styled inputs, labels, and form utilities
- 🎭 **Dynamic Theming** - Switch themes with data attributes
- 📱 **Typography System** - Multiple font families (Poppins, Manrope, Roboto, Inter)
- 🎯 **Design Tokens** - Consistent spacing, font sizes, line heights, border radius
- 📦 **Zero Dependencies** - Lightweight and fast
- 🚀 **Modern CSS** - Uses CSS custom properties and modern features
- 📏 **Small Package Size** - 28KB (5.5KB gzipped)

## 📦 Installation

```bash
npm install @eternals/styles
```

```bash
yarn add @eternals/styles
```

```bash
pnpm add @eternals/styles
```

## 🚀 Quick Start

```javascript
// ES6 Modules
import "@eternals/styles/dist/index.css";

// CommonJS
require("@eternals/styles/dist/index.css");
```

```html
<!-- Set theme color -->
<div app-color="blue">
  <button class="app-btn app-btn-primary">Primary Button</button>
</div>
```

## 🎨 Color System

### Available Color Palettes

| Color     | Shades | Usage                     |
| --------- | ------ | ------------------------- |
| Red       | 50-950 | Error states, danger      |
| Orange    | 50-950 | Warning states            |
| Amber     | 50-950 | Attention, highlights     |
| Yellow    | 50-950 | Caution, alerts           |
| Lime      | 50-950 | Success, nature           |
| Green     | 50-950 | Success, positive         |
| Emerald   | 50-950 | Success, growth           |
| Teal      | 50-950 | Info, water               |
| Cyan      | 50-950 | Info, sky                 |
| Sky       | 50-950 | Info, air                 |
| Blue      | 50-950 | Primary, trust            |
| Indigo    | 50-950 | Primary, depth            |
| Violet    | 50-950 | Creative, luxury          |
| Purple    | 50-950 | Creative, premium         |
| Fuchsia   | 50-950 | Creative, vibrant         |
| Pink      | 50-950 | Creative, warm            |
| Rose      | 50-950 | Creative, soft            |
| Slate     | 50-950 | Neutral, professional     |
| Gray      | 50-950 | Neutral, standard         |
| Zinc      | 50-950 | Neutral, modern           |
| Neutral   | 50-950 | Neutral, balanced         |
| Stone     | 50-950 | Neutral, natural          |

### Dynamic Theming

```html
<!-- Switch themes with data attributes -->
<div app-color="blue">
  <!-- All primary colors will be blue -->
  <button class="app-btn app-btn-primary">Blue Primary</button>
</div>

<div app-color="green">
  <!-- All primary colors will be green -->
  <button class="app-btn app-btn-primary">Green Primary</button>
</div>
```

## 🔘 Button Components

### Button Variants

```html
<!-- Primary Buttons -->
<button class="app-btn app-btn-primary">Primary</button>
<button class="app-btn app-btn-primary-outline">Primary Outline</button>
<button class="app-btn app-btn-primary-light">Primary Light</button>
<button class="app-btn app-btn-primary-link">Primary Link</button>

<!-- Secondary Buttons -->
<button class="app-btn app-btn-secondary">Secondary</button>
<button class="app-btn app-btn-secondary-outline">Secondary Outline</button>

<!-- Status Buttons -->
<button class="app-btn app-btn-success">Success</button>
<button class="app-btn app-btn-danger">Danger</button>
<button class="app-btn app-btn-warning">Warning</button>
<button class="app-btn app-btn-info">Info</button>

<!-- Neutral Buttons -->
<button class="app-btn app-btn-light">Light</button>
<button class="app-btn app-btn-dark">Dark</button>
```

### Button Sizes

```html
<button class="app-btn app-btn-primary app-btn-sm">Small</button>
<button class="app-btn app-btn-primary">Regular</button>
```

### Button with Icons

```html
<button class="app-btn app-btn-primary">
  <svg class="app-btn-icon">...</svg>
  Button with Icon
</button>
```

### Loading Button

```html
<button class="app-btn-spinner app-btn-primary">
  <div class="spinner-border"></div>
  <span>Loading...</span>
</button>
```

## 📝 Form Components

### Input Fields

```html
<div class="app">
  <label class="app-label field-required">Email Address</label>
  <input type="email" class="app-input" placeholder="Enter your email">
</div>
```

### Form Styling Features

- **Auto-focus styling** - Custom focus states with color-mix
- **Placeholder styling** - Consistent placeholder appearance
- **Required field indicators** - Red asterisk for required fields
- **Autofill handling** - Custom autofill styling

## 📱 Typography System

### Font Families

```html
<!-- Set font family with data attributes -->
<div app-font="poppins">Poppins Font</div>
<div app-font="manrope">Manrope Font</div>
<div app-font="roboto">Roboto Font</div>
<div app-font="inter">Inter Font</div>
```

### Font Sizes

```css
/* Available font size variables */
--fs-xxs: 0.75rem;   /* 12px */
--fs-xs: 0.875rem;   /* 14px */
--fs-sm: 1rem;       /* 16px */
--fs-rg: 1.125rem;   /* 18px */
--fs-md: 1.25rem;    /* 20px */
--fs-lg: 1.5rem;     /* 24px */
--fs-xl: 1.875rem;   /* 30px */
--fs-2xl: 2.25rem;   /* 36px */
--fs-3xl: 3rem;      /* 48px */
--fs-4xl: 3.75rem;   /* 60px */
--fs-5xl: 4.5rem;    /* 72px */
--fs-6xl: 6rem;      /* 96px */
--fs-8xl: 8rem;      /* 128px */
```

### Font Weights

```css
/* Available font weight variables */
--fw-thin: 100;
--fw-extralight: 200;
--fw-light: 300;
--fw-normal: 400;
--fw-medium: 500;
--fw-semibold: 600;
--fw-bold: 700;
--fw-extrabold: 800;
--fw-black: 900;
```

## 🎯 Design Tokens

### Spacing System

```css
/* Padding and Margin */
--padding-xxs: 2px;   --margin-xxs: 2px;
--padding-xs: 4px;    --margin-xs: 4px;
--padding-sm: 6px;    --margin-sm: 6px;
--padding-rg: 8px;    --margin-rg: 8px;
--padding-md: 12px;   --margin-md: 12px;
--padding-lg: 16px;   --margin-lg: 16px;
--padding-xl: 20px;   --margin-xl: 20px;
--padding-2xl: 24px;  --margin-2xl: 24px;
--padding-3xl: 28px;  --margin-3xl: 28px;
--padding-4xl: 32px;  --margin-4xl: 32px;
--padding-5xl: 36px;  --margin-5xl: 36px;
--padding-6xl: 40px;  --margin-6xl: 40px;
--padding-8xl: 48px;  --margin-8xl: 48px;
```

### Border Radius

```css
--radius-none: 0rem;
--radius-sm: 0.125rem;
--radius-base: 0.25rem;
--radius-md: 0.375rem;
--radius-lg: 0.5rem;
--radius-xl: 0.75rem;
--radius-2xl: 1rem;
--radius-3xl: 1.5rem;
--radius-4xl: 2rem;
--radius-5xl: 2.5rem;
--radius-circle: 50%;
```

### Shadows

```css
--shadow: 0 0px 1px 0.5px rgb(0 0 0 / 0.18);
--shadow-xxs: 0 1px rgb(0 0 0 / 0.05);
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
--shadow-none: 0 0 #0000;
```

## 💡 Usage Examples

### React/JSX

```jsx
import "@eternals/styles/dist/index.css";

function App() {
  return (
    <div app-color="blue" app-font="poppins">
      <h1 style={{ fontSize: 'var(--fs-2xl)', fontWeight: 'var(--fw-bold)' }}>
        Welcome to Eternals Styles
      </h1>
      
      <div style={{ padding: 'var(--padding-lg)' }}>
        <button className="app-btn app-btn-primary">
          Get Started
        </button>
        
        <div className="app" style={{ marginTop: 'var(--margin-lg)' }}>
          <label className="app-label field-required">Email</label>
          <input 
            type="email" 
            className="app-input" 
            placeholder="Enter your email"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
}
```


### SCSS Customization

```scss
// Import SCSS source for customization
@import "@eternals/styles/src/index.scss";

// Override design tokens
:root {
  --primary-500: #your-custom-color;
  --fs-lg: 1.75rem; // Custom large font size
  --padding-lg: 20px; // Custom large padding
}

// Create custom components
.my-custom-button {
  @extend .app-btn;
  background: linear-gradient(45deg, var(--primary-500), var(--primary-700));
  border: none;
  color: white;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
}
```

## 🌐 Browser Support

- ✅ All modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ CSS Custom Properties support
- ✅ CSS Grid and Flexbox support
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Progressive enhancement for older browsers

## 📄 License

- **Package**: MIT License
- **Fonts**: SIL Open Font License (OFL) - Free for commercial use

### License Summary
- ✅ Free for commercial and personal use
- ✅ Can be embedded in web applications
- ✅ Can be modified and redistributed
- ✅ No attribution required (but appreciated)

---

<div align="center">
  <strong>Made with ❤️ by Eternals Cloud</strong>
</div>