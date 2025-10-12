# @eternaljs/styles

A comprehensive design system and styling package for Eternals JS applications, providing a complete set of design tokens, color palettes, typography, spacing utilities, and theming capabilities.

[![npm version](https://img.shields.io/npm/v/@eternaljs/styles.svg)](https://www.npmjs.com/package/@eternaljs/styles)
[![npm downloads](https://img.shields.io/npm/dm/@eternaljs/styles.svg)](https://www.npmjs.com/package/@eternaljs/styles)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/eternals-cloud/styles.svg)](https://github.com/eternals-cloud/styles/issues)
[![GitHub stars](https://img.shields.io/github/stars/eternals-cloud/styles.svg)](https://github.com/eternals-cloud/styles/stargazers)

## 🎨 Features

- **Complete Color Palette**: 8 color schemes with 11 shades each (50-950)
- **Typography System**: Multiple font families with comprehensive sizing and weight scales
- **Spacing System**: Consistent padding and margin utilities
- **Theme Support**: Light/dark mode with multiple color themes
- **Design Tokens**: CSS custom properties for consistent design
- **Modern CSS**: Built with SCSS and CSS custom properties
- **Responsive Design**: Mobile-first approach with flexible utilities

## 📦 Installation

```bash
npm install @eternaljs/styles
```

## 🚀 Quick Start

### Basic Usage

```css
/* Import the main stylesheet */
@import '@eternaljs/styles/dist/index.css';
```

### HTML Setup

```html
<!-- Set theme and color scheme -->
<html ec-app-theme="light" ec-app-color="blue" ec-app-font="poppins">
  <!-- Your content -->
</html>
```

## 🎯 Available Themes

### Color Schemes
- **Neutral** (default)
- **Blue**
- **Orange** 
- **Rose**

### Font Families
- **Poppins** (default)
- **Manrope**

### Theme Modes
- **Light** (default)
- **Dark**

## 🎨 Color Palette

The package includes 8 comprehensive color palettes:

- **Blue**: Professional and trustworthy
- **Emerald**: Success and growth
- **Red**: Error and danger
- **Teal**: Calm and balanced
- **Amber**: Warning and attention
- **Orange**: Energy and creativity
- **Cyan**: Fresh and modern
- **Gray**: Neutral and versatile
- **Neutral**: Clean and minimal
- **Rose**: Warm and friendly

Each color includes 11 shades (50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950).

## 📏 Typography

### Font Sizes
```css
--fs-xxs: 0.75rem    /* 12px */
--fs-xs: 0.875rem    /* 14px */
--fs-sm: 1rem        /* 16px */
--fs-rg: 1.125rem    /* 18px */
--fs-md: 1.25rem     /* 20px */
--fs-lg: 1.5rem      /* 24px */
--fs-xl: 1.875rem    /* 30px */
--fs-2xl: 2.25rem    /* 36px */
--fs-3xl: 3rem       /* 48px */
--fs-4xl: 3.75rem    /* 60px */
--fs-5xl: 4.5rem     /* 72px */
--fs-6xl: 6rem       /* 96px */
--fs-8xl: 8rem       /* 128px */
```

### Font Weights
```css
--fw-thin: 100
--fw-extralight: 200
--fw-200: 300
--fw-normal: 400
--fw-medium: 500
--fw-semibold: 600
--fw-bold: 700
--fw-extrabold: 800
--fw-black: 900
```

## 📐 Spacing System

### Padding & Margin
```css
--padding-xxs: 2px
--padding-xs: 4px
--padding-sm: 6px
--padding-rg: 8px
--padding-md: 12px
--padding-lg: 16px
--padding-xl: 20px
--padding-2xl: 24px
--padding-3xl: 28px
--padding-4xl: 32px
--padding-5xl: 36px
--padding-6xl: 40px
--padding-8xl: 48px
```

## 🔧 Border Radius

```css
--radius-sm: 0.125rem    /* 2px */
--radius-rg: 0.25rem     /* 4px */
--radius-md: 0.375rem    /* 6px */
--radius-lg: 0.5rem      /* 8px */
--radius-xl: 0.75rem     /* 12px */
--radius-2xl: 1rem       /* 16px */
--radius-3xl: 1.5rem     /* 24px */
--radius-4xl: 2rem       /* 32px */
--radius-5xl: 2.5rem     /* 40px */
--radius-circle: 50%
```

## 🌟 Shadows

```css
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

## 🎛️ Usage Examples

### CSS Custom Properties
```css
.my-component {
  background-color: var(--primary-500);
  color: var(--white-color);
  padding: var(--padding-lg);
  border-radius: var(--radius-md);
  font-size: var(--fs-md);
  font-weight: var(--fw-medium);
  box-shadow: var(--shadow-md);
}
```

### Theme Switching
```javascript
// Switch to dark mode
document.documentElement.setAttribute('ec-app-theme', 'dark');

// Change color scheme
document.documentElement.setAttribute('ec-app-color', 'rose');

// Change font family
document.documentElement.setAttribute('ec-app-font', 'manrope');
```

### SCSS Integration
```scss
@import '@eternaljs/styles/src/index.scss';

.my-custom-component {
  @extend .p-focus; // Use built-in focus styles
  
  background: var(--primary-100);
  border: 1px solid var(--primary-300);
  
  &:hover {
    background: var(--primary-200);
  }
}
```

## 🛠️ Development

### Build
```bash
npm run build
```

### Development Server
```bash
npm run dev
```

### Format Code
```bash
npm run format
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/eternals-cloud/styles/issues)
- **Documentation**: [GitHub Repository](https://github.com/eternals-cloud/styles)

## 🔗 Related Packages

- [@eternals/font-poppins](https://www.npmjs.com/package/@eternals/font-poppins)
- [@eternals/font-manrope](https://www.npmjs.com/package/@eternals/font-manrope)

---

Made with ❤️ by [Eternals Cloud](https://github.com/eternals-cloud)
