---
applyTo: '**'
---

# Next.js and TypeScript Best Practices

## Component Architecture

### Server vs Client Components

#### **Decision Framework: When to Use Each**

**🖥️ Use Server Components when:**
- Fetching data from APIs or databases
-### Data Fetching and Caching

### Service Layer Integration
- **Use service abstraction** for all data operations in Server Components:

```tsx
import { getDataService } from '@/services/registry';

export default async function Page() {
  const dataService = getDataService();
  
  // Service handles caching and data source details
  const [artist, albums] = await Promise.all([
    dataService.getArtist(username),
    dataService.getAlbums(username)
  ]);
  
  return <div>{artist.name}</div>;
}
```

### Parallel Data Fetchingcessing backend resources (environment variables, file system)
- Rendering static content (headers, navigation, content)
- SEO is important (metadata generation)
- Keeping sensitive logic on the server
- Default choice for better performance

**💻 Use Client Components when:**
- Adding interactivity (event handlers, form interactions)
- Using browser APIs (localStorage, geolocation, etc.)
- Managing state (useState, useReducer)
- Using effects (useEffect)
- Accessing React hooks
- Creating context providers
- Using third-party libraries that require browser APIs

#### **Implementation Guidelines**

**Default to Server Components** - Use Server Components by default for better performance and reduced client-side JavaScript:

```tsx
// ✅ Server Component - Good for data fetching with service abstraction
import { getDataService } from '@/services/registry';

export default async function Page() {
  const dataService = getDataService();
  const posts = await dataService.getPosts();
  
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

**Strategic "use client" boundaries** - Place `'use client'` directive only where necessary to minimize client bundle size:

```tsx
// ✅ Client Component - Only when interactivity is needed
'use client'
import { useState } from 'react'

export default function SearchForm() {
  const [query, setQuery] = useState('')
  
  return (
    <form>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
    </form>
  )
}
```

#### **Common Patterns and Anti-Patterns**

**✅ DO: Keep the client boundary minimal**
```tsx
// Server Component (layout)
export default function Layout({ children }) {
  return (
    <div>
      <Header /> {/* Server Component */}
      <SearchBar /> {/* Client Component - only interactive part */}
      <main>{children}</main>
      <Footer /> {/* Server Component */}
    </div>
  )
}
```

**❌ DON'T: Make entire layouts client components**
```tsx
// ❌ Bad - entire layout is client-side
'use client'
export default function Layout({ children }) {
  const [theme, setTheme] = useState('dark') // Only needed for theme toggle
  return (
    <div className={theme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
```

**✅ DO: Use composition to avoid client boundaries**
```tsx
// Server Component
export default function Page() {
  return (
    <InteractiveModal>
      <ProductDetails product={product} /> {/* Server Component */}
    </InteractiveModal>
  )
}

// Client Component
'use client'
export default function InteractiveModal({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  return isOpen && <div className="modal">{children}</div>
}
```

#### **Migration Checklist**
When converting from Client to Server Components:
- [ ] Remove `'use client'` directive
- [ ] Replace useState/useEffect with server-side data fetching
- [ ] Move event handlers to separate Client Components
- [ ] Use Server Actions for form submissions
- [ ] Ensure no browser APIs are being used

When converting from Server to Client Components:
- [ ] Add `'use client'` directive at the top
- [ ] Ensure all imported components are Client Components
- [ ] Move data fetching to parent Server Component or use Route Handlers
- [ ] Consider performance impact on bundle size

### Component Composition Patterns
- **Pass Server Components as children** to Client Components:

```tsx
// Server Component
export default function Page() {
  return (
    <Modal>
      <Cart /> {/* Server Component */}
    </Modal>
  )
}

// Client Component
'use client'
export default function Modal({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
```

- **Wrap third-party components** that lack `'use client'`:

```tsx
'use client'
import { Carousel } from 'acme-carousel'
export default Carousel
```

### Context Providers
- **Create Client Component providers** for React Context:

```tsx
'use client'
import { createContext } from 'react'

export const ThemeContext = createContext({})

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}
```

## Performance Optimization

### Bundle Size Optimization
- **Selective Client Components** - Only mark interactive components with `'use client'`:

```tsx
// Layout remains Server Component
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Logo /> {/* Server Component */}
        <Search /> {/* Client Component */}
      </nav>
      <main>{children}</main>
    </>
  )
}
```

- **Dynamic imports** for code splitting:

```tsx
'use client'
import dynamic from 'next/dynamic'

const WithCustomLoading = dynamic(
  () => import('../components/WithCustomLoading'),
  { loading: () => <p>Loading...</p> }
)
```

- **Analyze bundle size** with `@next/bundle-analyzer`:

```bash
ANALYZE=true npm run build
```

### Image Optimization
- **Use Next.js Image component** for automatic optimization:

```tsx
import Image from 'next/image'
import ProfileImage from './profile.png'

export default function Page() {
  return (
    <Image
      src={ProfileImage}
      alt="Picture of the author"
      placeholder="blur" // Optional blur-up while loading
    />
  )
}
```

- **Define responsive sizes** for better performance:

```tsx
<Image
  fill
  src="/example.png"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## Data Fetching and Caching

### Parallel Data Fetching
- **Avoid sequential requests** - Use Promise.all for parallel fetching with services:

```tsx
export default async function Page() {
  const dataService = getDataService();
  
  // Parallel fetching through service layer
  const [artist, albums] = await Promise.all([
    dataService.getArtist(username),
    dataService.getAlbums(username)
  ]);
  
  return <div>{artist.name}</div>;
}
```

### Caching Strategies
- **Use React cache** for memoizing data requests:

```tsx
import { cache } from 'react'

export const getPost = cache(async (slug: string) => {
  const res = await db.query.posts.findFirst({ where: eq(posts.slug, slug) })
  return res
})
```

- **Configure fetch caching** appropriately:

```tsx
// Static generation with revalidation
const res = await fetch('https://api.example.com/data', { 
  next: { revalidate: 60 } 
})

// No caching for dynamic data
const res = await fetch('https://api.example.com/data', { 
  cache: 'no-store' 
})
```

### Static Generation
- **Use generateStaticParams** for pre-rendering dynamic routes:

```tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json())
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

- **Optimize with partial static generation** for large datasets:

```tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json())
  
  // Render only first 10 posts at build time
  return posts.slice(0, 10).map((post) => ({
    slug: post.slug,
  }))
}
```

## TypeScript Best Practices

### Type Safety
- **Enable strict TypeScript** in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

- **Use Next.js TypeScript plugin** for enhanced type checking
- **Enable typed routes** for compile-time link validation:

```tsx
// next.config.ts
const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
}
```

### Component Typing
- **Proper prop typing** for components:

```tsx
interface PageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params
  // ...
}
```

- **Type Server Actions** properly:

```tsx
'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  
  // Validation and database operations
}
```

## Performance Monitoring

### Web Vitals
- **Monitor Core Web Vitals** with built-in reporting:

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

### Build Analysis
- **Regular bundle analysis** to monitor size growth
- **Use loading components** for better perceived performance:

```tsx
export default function Loading() {
  return <p>Loading...</p>
}
```

- **Implement Suspense boundaries** for streaming:

```tsx
import { Suspense } from 'react'

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
    </section>
  )
}
```

## Security and Best Practices

### Environment Variables
- **Use server-only package** for sensitive server code:

```tsx
import 'server-only'

export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })
  return res.json()
}
```

### Route Handlers
- **Cache static Route Handlers** when appropriate:

```tsx
export const dynamic = 'force-static'

export async function GET() {
  const data = await fetch('https://api.example.com/data')
  return Response.json({ data })
}
```

### Metadata and SEO
- **Generate dynamic metadata** for better SEO:

```tsx
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  return {
    title: post.title,
    description: post.excerpt,
  }
}
```

- **Create Open Graph images** for social sharing:

```tsx
export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://api.example.com/posts/${params.slug}`).then(res => res.json())

  return new ImageResponse(
    (
      <div style={{ fontSize: 48, background: 'white', width: '100%', height: '100%' }}>
        {post.title}
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
```

## Development Tools

### Bundle Analysis and Optimization
- **Analyze bundle size** with `@next/bundle-analyzer`:

```bash
ANALYZE=true npm run build
```

- **Dynamic imports** for code splitting:

```tsx
'use client'
import dynamic from 'next/dynamic'

const WithCustomLoading = dynamic(
  () => import('../components/WithCustomLoading'),
  { loading: () => <p>Loading...</p> }
)
```

- **Loading components** for better perceived performance:

```tsx
export default function Loading() {
  return <p>Loading...</p>
}
```

- **Implement Suspense boundaries** for streaming:

```tsx
import { Suspense } from 'react'

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
    </section>
  )
}
```

## Data Services & Abstraction Layer

### Service Layer Architecture

Use a **service layer abstraction** to decouple data retrieval from UI components. This allows flexible implementation of data sources without changing component code.

#### Core Principles

1. **Interface-First Design**: Define service contracts before implementation
2. **Implementation Agnostic**: Components don't know or care about data source
3. **Easy Migration**: Swap implementations without changing business logic
4. **Consistent API**: Same interface regardless of backend technology
5. **Type Safety**: Full TypeScript coverage for all service contracts

#### Service Interface Pattern

```typescript
// Define abstract service interfaces
export interface DataService {
  getItems(): Promise<Item[]>;
  getItemById(id: string): Promise<Item | null>;
  searchItems(query: string): Promise<Item[]>;
}

// Service registry for dependency injection
export function getDataService(): DataService {
  // Implementation will be determined during development
  return createDataService();
}
```

#### Component Usage Patterns

**Server Components with Services:**
```tsx
import { getDataService } from '@/services/registry';

export default async function ServerComponent() {
  const dataService = getDataService();
  const data = await dataService.getItems();
  
  return <ClientComponent data={data} />;
}
```

**Client Components with Service Props:**
```tsx
'use client';
import type { DataService } from '@/services/types';

interface Props {
  dataService: DataService;
}

export function ClientComponent({ dataService }: Props) {
  // Use service for dynamic data operations
  const handleSearch = async (query: string) => {
    const results = await dataService.searchItems(query);
    setResults(results);
  };
  
  return <div>{/* Interactive UI */}</div>;
}
```

**Service Hooks Pattern:**
```tsx
// Custom hooks for service integration
export function useDataItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getDataService()
      .getItems()
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);
  
  return { items, loading };
}
```

#### Implementation Guidelines

**DO: Service Abstractions**
- Define interface contracts without implementation details
- Use dependency injection through service registry
- Keep components implementation-agnostic
- Provide consistent error handling patterns

**DON'T: Direct Dependencies**
- Import specific implementations in components
- Couple components to specific data sources
- Expose implementation details in service interfaces

#### Benefits

- **Implementation Flexibility**: Choose any data source during development
- **Easy Testing**: Mock services for comprehensive testing
- **Future-Proof**: Migrate data sources without component changes
- **Clear Separation**: UI focuses on presentation, services handle data