---
applyTo: '**'
---

# Technology Stack & Development Workflow

## Technology Stack

This rules-creator project uses modern web development technologies:

### Core Framework
- **Next.js 15.3.4** with App Router (React Server Components by default)
- **React 19** with latest features and concurrent rendering
- **TypeScript 5** with strict type checking enabled

### Styling & UI
- **Tailwind CSS v4** with PostCSS integration
- **Design System**: Custom design tokens following Palo IT aesthetic
- **Responsive Design**: Mobile-first approach with defined breakpoints

### Development Tools
- **ESLint v9** with Next.js recommended rules
- **Turbopack** for fast development builds
- **TypeScript** with strict configuration for type safety

### Package Configuration
Current dependencies from `package.json`:
```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.3.4"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.3.4",
    "@eslint/eslintrc": "^3"
  }
}
```

## Development Workflow

### Getting Started
1. **Install dependencies**: `npm install`
2. **Start development server**: `npm run dev` (uses Turbopack for faster builds)
3. **Build for production**: `npm run build`
4. **Start production server**: `npm start`
5. **Lint code**: `npm run lint`

### Available Scripts
- `npm run dev` - Start development server with Turbopack (`next dev --turbopack`)
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Development Features
- **Turbopack Development**: Faster builds and hot reload with `--turbopack` flag
- **TypeScript Strict Mode**: Project uses strict TypeScript configuration
- **ESLint v9**: Modern ESLint configuration with Next.js rules
- **React 19**: Latest React version with concurrent features enabled

## Project Configuration

### Next.js Configuration (next.config.ts)
```typescript
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}

export default nextConfig
```

### TypeScript Configuration
Strict TypeScript configuration enabled in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### Tailwind CSS v4 Integration
PostCSS configuration for Tailwind CSS v4 in `postcss.config.mjs`:
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### ESLint Configuration
Modern ESLint v9 configuration with Next.js rules in `eslint.config.mjs`.

## Font Optimization

### Inter Font Setup
Load Inter font using Next.js Font optimization in `app/layout.tsx`:

```tsx
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

## Performance Tools

### Bundle Analysis
Analyze bundle size with `@next/bundle-analyzer`:
```bash
ANALYZE=true npm run build
```

### Web Vitals Monitoring
Monitor Core Web Vitals with built-in reporting:
```tsx
'use client'
import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric)
  })
  return null
}
```

## Code Quality & Standards

### TypeScript Standards
- **Strict Type Checking**: All TypeScript options set to strict mode
- **Interface-First Design**: Define interfaces before implementations
- **Proper Type Exports**: Use consistent import/export patterns
- **Generic Constraints**: Leverage TypeScript generics for flexible, type-safe code

### ESLint Rules
- **Next.js Best Practices**: Follow Next.js recommended ESLint configuration
- **Consistent Formatting**: Maintain consistent code style across the project
- **Performance Rules**: Catch common performance anti-patterns
- **Accessibility Rules**: Ensure components meet accessibility standards

### Testing Philosophy
- **Type Safety Testing**: Leverage TypeScript for compile-time error catching
- **Component Testing**: Test component behavior and user interactions
- **Service Layer Testing**: Mock services for consistent, reliable testing
- **Performance Testing**: Monitor Core Web Vitals and bundle size

## Icon and Asset Management

### Icon Libraries
Recommended icon libraries for consistent visual design:
- **Heroicons**: Clean, professional icons for UI elements
- **Lucide React**: Extensive icon set with consistent styling
- **Custom SVGs**: Project-specific icons stored in `public/` directory

### Asset Optimization
- **Image Optimization**: Use Next.js Image component for automatic optimization
- **Font Loading**: Load fonts via Next.js Font optimization for performance
- **Bundle Analysis**: Regular monitoring of bundle size and performance impact
