---
applyTo: '**'
---

## Project Structure

This Next.js project follows a standard App Router structure with the following organization:

```
rules-creator/
├── .github/
│   └── instructions/          # AI agent guidelines and project documentation
│       ├── design.instructions.md     # Design system and UI guidelines
│       ├── nextjs.instructions.md     # Next.js and TypeScript best practices
│       └── repo.instructions.md       # Project structure documentation
├── public/                    # Static assets served directly
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   └── app/                   # Next.js App Router directory (App Router v13+)
│       ├── favicon.ico        # Site favicon
│       ├── globals.css        # Global styles with Tailwind CSS
│       ├── layout.tsx         # Root layout component (Server Component)
│       └── page.tsx           # Home page component (Server Component)
├── eslint.config.mjs          # ESLint v9 configuration with Next.js rules
├── next-env.d.ts              # Next.js TypeScript declarations (auto-generated)
├── next.config.ts             # Next.js configuration (TypeScript)
├── package.json               # Dependencies and scripts (React 19, Next.js 15.3.4, Tailwind 4)
├── postcss.config.mjs         # PostCSS configuration for Tailwind CSS v4
├── tsconfig.json              # TypeScript configuration with strict mode
└── README.md                  # Project documentation
```

### Key Directories

- **`src/app/`**: Contains all pages, layouts, and routing using Next.js App Router
- **`public/`**: Static assets that are served directly by the web server
- **`.github/instructions/`**: AI agent guidelines and development instructions
  - `design.instructions.md` - Design system and UI guidelines
  - `nextjs.instructions.md` - Next.js and TypeScript best practices
  - `repo.instructions.md` - Project structure documentation
  - `tech.instructions.md` - Technology stack and development workflow
- **Root level**: Configuration files for Next.js, TypeScript, ESLint, and PostCSS

## File Organization Guidelines

### Naming Conventions
- **Components**: PascalCase for React components (`UserProfile.tsx`)
- **Files**: kebab-case for non-component files (`user-utils.ts`)
- **Directories**: kebab-case for folders (`user-management/`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_ENDPOINTS`)

### Directory Structure Patterns
```
src/
├── app/                       # Next.js App Router
│   ├── (auth)/               # Route groups for organization
│   ├── api/                  # API route handlers (if needed)
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # Reusable UI components
│   ├── ui/                   # Basic UI elements (buttons, inputs)
│   └── features/             # Feature-specific components
├── services/                 # Data access abstraction layer
│   ├── types.ts              # Service interface definitions
│   ├── registry.ts           # Service provider and registry
│   ├── errors.ts             # Service error types
│   ├── __mocks__/           # Mock implementations for testing
│   └── implementations/      # Actual service implementations (TBD)
├── hooks/                    # Custom React hooks (including data hooks)
├── lib/                      # Utility functions and configurations
└── types/                    # TypeScript type definitions
```

### Component Organization
- **Single Responsibility**: Each component should have one clear purpose
- **Composition over Inheritance**: Use composition patterns for flexibility
- **Props Interface**: Define clear TypeScript interfaces for all props
- **Default Exports**: Use default exports for main components
- **Named Exports**: Use named exports for utilities and hooks
