---
applyTo: '**'
---

# Tailwind CSS Implementation Instructions

**Note: This document describes the methodology and approach for implementing Tailwind CSS with semantic tokens. The specific colors used in examples are placeholders - each project should define its own color palette using the same structure and naming conventions.**

## Color and Theme Management

### Preferred Approach: @theme Directive
Use `@theme` directive in `globals.css` for native Tailwind v4 theming. **Never** create `tailwind.config.js` files.

```css
/* globals.css - Define all theme values here */
@theme {
  --color-primary-600: #[your-primary-color];
  --color-error-500: #[your-error-color];
  --spacing-lg: 24px;
}
```

### Fallback Approach: CSS Custom Properties
If `@theme` is not supported, use CSS custom properties in `:root`:

```css
:root {
  --color-primary-600: #[your-primary-color];
  --color-error-500: #[your-error-color];
  --spacing-lg: 24px;
}
```

### Usage in Components
```tsx
// With @theme: Use utility classes
<div className="bg-primary-600 text-white p-lg">
  Content
</div>

// With CSS custom properties: Use arbitrary values
<div className="bg-[var(--color-primary-600)] text-[var(--color-white)] p-[var(--spacing-lg)]">
  Content
</div>
```

## Mandatory Color Palette (Modern Numbered Shades)
Define your project's color palette using numbered shade values in `@theme` or CSS custom properties:

```css
@theme {
  /* Primary Color Scale (replace with your project's primary color) */
  --color-primary-50: #[lightest-shade];
  --color-primary-100: #[very-light-shade];
  --color-primary-500: #[main-brand-color];
  --color-primary-600: #[slightly-darker];
  --color-primary-700: #[darker-shade];
  --color-primary-900: #[darkest-shade];
  
  /* Neutral Scale (grays for your design system) */
  --color-white: #ffffff;
  --color-gray-50: #[lightest-gray];
  --color-gray-200: #[light-border-gray];
  --color-gray-500: #[medium-gray];
  --color-gray-600: #[text-secondary-gray];
  --color-gray-800: #[dark-text-gray];
  --color-gray-900: #[darkest-text-gray];
  
  /* Accent Color Scales (customize per project needs) */
  --color-accent-50: #[light-accent];
  --color-accent-500: #[main-accent-color];
  --color-accent-600: #[accent-hover];
  --color-accent-900: #[dark-accent];
  
  --color-success-50: #[light-success];
  --color-success-500: #[main-success-color];
  --color-success-600: #[success-hover];
  
  --color-warning-50: #[light-warning];
  --color-warning-500: #[main-warning-color];
  --color-warning-600: #[warning-hover];
  
  --color-error-50: #[light-error];
  --color-error-500: #[main-error-color];
  --color-error-600: #[error-hover];
}
```

## Mandatory Spacing Scale
Use these exact values in `@theme` or CSS custom properties:

```css
@theme {
  /* Spacing Scale (8px grid) */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
}
```

## Modern Color System

This design system uses **modern numbered color shades** following industry best practices:

- **50-900 Scale**: Each color family includes shades from 50 (lightest) to 900 (darkest)
- **500 as Primary**: The 500 shade represents the primary/brand color
- **600 for Dark Variants**: Use 600+ for darker alternatives or hover states
- **50-200 for Backgrounds**: Light shades for backgrounds and subtle elements

### Color Naming Convention
```css
--color-{family}-{shade}
```

Examples:
- `--color-primary-600` (primary brand color)
- `--color-error-500` (main error color) 
- `--color-gray-50` (light background)
- `--color-accent-900` (darkest accent shade)

### Usage Examples
```tsx
// Primary colors (500 shades)
<button className="bg-[var(--color-accent-500)]">Primary Button</button>

// Semantic tokens (recommended for common patterns)
<button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)]">
  Primary Button
</button>

// Hover states (600+ shades)
<button className="bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)]">
  Interactive Button
</button>

// Light backgrounds (50-200 shades)
<div className="bg-[var(--surface-secondary)]">Light Section</div>

// Dark text (700-900 shades)
<p className="text-[var(--text-primary)]">Dark Text</p>
```

## Semantic Color Tokens

In addition to numbered shades, this design system provides **semantic tokens** that reference the numbered color system using CSS variable references:

### Primary Semantic Tokens
```css
/* Semantic tokens that reference numbered shades */
--primary: var(--color-primary-600);         /* Main brand color */
--primary-hover: var(--color-primary-700);   /* Hover states */
--primary-light: var(--color-primary-100);   /* Light backgrounds */
--primary-dark: var(--color-primary-800);    /* Dark variants */

--secondary: var(--color-gray-600);          /* Secondary elements */
--accent: var(--color-accent-500);           /* Interactive elements */
--success: var(--color-success-500);         /* Success states */
--warning: var(--color-warning-500);         /* Warning states */
--error: var(--color-error-500);             /* Error states */
```

### Surface and Text Tokens
```css
/* Surface colors */
--surface: var(--color-white);            /* Main backgrounds */
--surface-secondary: var(--color-gray-50); /* Secondary backgrounds */
--surface-tertiary: var(--color-gray-100); /* Tertiary backgrounds */

/* Text colors */
--text-primary: var(--color-gray-900);    /* Primary text */
--text-secondary: var(--color-gray-600);  /* Secondary text */
--text-tertiary: var(--color-gray-500);   /* Tertiary text */
--text-inverse: var(--color-white);       /* Text on dark backgrounds */

/* Border colors */
--border: var(--color-gray-200);          /* Default borders */
--border-focus: var(--accent);            /* Focus states */
--border-error: var(--error);             /* Error borders */
```

### Usage Examples with Semantic Tokens
```tsx
// Using semantic tokens for common patterns
<button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--text-inverse)]">
  Primary Button
</button>

<div className="bg-[var(--surface)] border border-[var(--border)] text-[var(--text-primary)]">
  Card with semantic colors
</div>

<input className="border-[var(--border)] focus:border-[var(--border-focus)]" />

<div className="bg-[var(--error-light)] text-[var(--error-dark)] border border-[var(--error)]">
  Error message
</div>
```

### Component Implementation Examples

### Recommended Approach: Semantic Tokens
Use semantic tokens for most UI components as they provide consistent theming and automatic dark mode adaptation:

```tsx
// Primary Button
<button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--text-inverse)] px-[var(--spacing-md)] py-[var(--spacing-sm)] rounded-lg transition-colors">
  Primary Button
</button>

// Card Component
<div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-md p-[var(--spacing-lg)]">
  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-[var(--spacing-sm)]">Card Title</h3>
  <p className="text-[var(--text-secondary)]">Card content goes here</p>
</div>

// Form Input
<input className="bg-[var(--surface)] border border-[var(--border)] focus:border-[var(--border-focus)] text-[var(--text-primary)] px-[var(--spacing-md)] py-[var(--spacing-sm)] rounded-lg" />

// Error Alert
<div className="bg-[var(--error-light)] border border-[var(--error)] text-[var(--error-dark)] p-[var(--spacing-md)] rounded-lg">
  Error message content
</div>
```

### Alternative: Direct Color References
When you need specific shades not covered by semantic tokens:

```tsx
// Using numbered shades directly
<div className="bg-[var(--color-accent-50)] text-[var(--color-accent-800)] border border-[var(--color-accent-200)]">
  Light accent background with dark accent text
</div>

// Gradient with multiple shades
<div className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-600)]">
  Gradient background
</div>
```

### Wrong Approach - Avoid
```tsx
// ❌ Don't use hardcoded Tailwind classes without theming
<div className="bg-blue-600 text-white p-6">
  Content
</div>

// ❌ Don't use hardcoded hex values
<div style={{ backgroundColor: '#1a1a2e', color: '#ffffff' }}>
  Content
</div>
```

## Implementation Rules

1. **Semantic Tokens First**: Always prefer semantic tokens (`--primary`, `--secondary`, etc.) for UI components
2. **@theme Directive First**: Try `@theme` directive in `globals.css` first for native Tailwind v4 theming
3. **CSS Custom Properties Fallback**: If `@theme` fails, use `:root` in `globals.css`
4. **No Config Files**: Never create `tailwind.config.js` or similar configuration files
5. **Variable References**: Use `var(--color-*-*)` to reference numbered shades in semantic tokens
6. **Dark Mode**: Override properties in `@media (prefers-color-scheme: dark)` within `:root`
7. **Consistent Usage**: Always use themed values, never hardcode colors or spacing

## Verification Checklist

- [ ] **Prefer semantic tokens** for common UI patterns: `--primary`, `--secondary`, `--surface`, etc.
- [ ] Use numbered shades for specific design needs: `--color-accent-50`, `--color-primary-800`
- [ ] Semantic tokens reference numbered shades using `var(--color-*-*)`
- [ ] Try `@theme` directive first for native Tailwind v4 theming
- [ ] If `@theme` fails: Use CSS custom properties with arbitrary values `bg-[var(--primary)]`
- [ ] All colors use modern numbered shades (50, 100, 200, ...900)
- [ ] No `tailwind.config.js` file exists
- [ ] All values defined in `globals.css`
- [ ] Dark mode overrides in `@media (prefers-color-scheme: dark)` within `:root`
