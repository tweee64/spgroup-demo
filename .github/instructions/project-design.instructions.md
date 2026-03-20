---
applyTo: '**'
---

# Rules Creator - Project Design System

**This file defines the complete design system for the rules-creator project inspired by Palo IT's sophisticated brand aesthetic. Use this in conjunction with `tailwind.instructions.md` for implementation methodology.**

## Project Overview
Rules Creator is a sophisticated AI coding instructions management application that helps developers create, configure, and manage AI coding agent instructions through an intuitive visual interface. The design reflects Palo IT's modern, impact-driven aesthetic with bold typography, organic shapes, and a focus on crafting technology as a force for good.

## Design Philosophy
Inspired by Palo IT's brand language, create a powerful, impact-focused interface that emphasizes:
- **Bold Impact**: Strong typography and confident design choices that communicate purpose
- **Human-Centered Technology**: Warm, approachable tech aesthetic with organic elements
- **Professional Excellence**: Premium quality feel with attention to detail
- **Positive Energy**: Optimistic design language that inspires and empowers
- **Global Perspective**: Modern, international aesthetic that resonates across cultures

## Visual Identity

### Brand Inspiration
The design draws from Palo IT's distinctive visual language:
- **Organic Curves**: Flowing, natural shapes that soften technical interfaces
- **Bold Typography**: Large, confident headings with strategic emphasis
- **Gradient Backgrounds**: Subtle gradients that add depth and sophistication
- **Geometric Accents**: Modern shapes that balance organic elements
- **Impact-Driven Color**: Strategic use of brand colors to guide attention

## Color Palette

### Primary Brand Colors
- **PALO Teal** (`#00ab9c`): Primary brand color inspired by Palo IT's signature teal
- **Deep Forest** (`#0a5d57`): Darker teal variant for headers and emphasis
- **Tech Green** (`#10b981`): Secondary green for positive actions and success states
- **Pure White** (`#ffffff`): Clean backgrounds and content areas
- **Rich Black** (`#0f172a`): Deep, sophisticated dark for text and contrasts

### Supporting Colors
- **Soft Sage** (`#a7f3d0`): Light teal for subtle backgrounds and highlights
- **Warm Gray** (`#374151`): Professional gray for secondary text and elements
- **Light Mist** (`#f8fafc`): Very light gray for subtle section backgrounds
- **Silver** (`#9ca3af`): Medium gray for borders and inactive elements
- **Charcoal** (`#1f2937`): Dark gray for secondary headings and emphasis

### Accent Colors
- **Electric Blue** (`#0ea5e9`): Interactive elements and links
- **Vibrant Orange** (`#f97316`): Warning states and important highlights
- **Success Emerald** (`#059669`): Confirmation and positive feedback
- **Alert Rose** (`#e11d48`): Error states and critical actions

### Color Scale Structure
Each color family follows a numbered shade system from 50 (lightest) to 900 (darkest), following Palo IT's sophisticated approach to color hierarchy:

#### Teal Scale (Primary Brand)
- **50**: Very light teal (`#f0fdfa`) for subtle backgrounds
- **100**: Light teal (`#ccfbf1`) for secondary backgrounds  
- **200-400**: Progressive teal shades for borders and inactive elements
- **500**: PALO Teal (`#00ab9c`) - Primary brand color
- **600**: Deep Forest (`#0a5d57`) - Header and emphasis color
- **700-900**: Darker teal variants for depth and strong contrast

#### Gray Scale (Neutral Palette)
- **50**: Light Mist (`#f8fafc`) - Subtle backgrounds
- **100-200**: Very light grays for secondary surfaces  
- **300-500**: Silver (`#9ca3af`) for borders and inactive text
- **600**: Warm Gray (`#374151`) - Secondary text
- **700**: Charcoal (`#1f2937`) - Secondary headings
- **800-900**: Rich Black (`#0f172a`) - Primary text and high contrast

#### Blue Scale (Interactive Elements)
- **50-200**: Light blue tints for hover states and backgrounds
- **300-400**: Medium blues for secondary interactive elements
- **500**: Electric Blue (`#0ea5e9`) - Primary interactive color
- **600-900**: Darker blues for pressed states and emphasis

#### Green Scale (Success States)
- **50**: Soft Sage (`#a7f3d0`) for success backgrounds
- **300-400**: Medium greens for borders and secondary success elements
- **500**: Tech Green (`#10b981`) - Secondary brand color
- **600**: Success Emerald (`#059669`) - Primary success color
- **700-900**: Darker greens for text and strong emphasis

#### Orange Scale (Warning States)
- **50-200**: Light orange tints for warning backgrounds
- **300-400**: Medium oranges for borders and secondary warning elements
- **500**: Vibrant Orange (`#f97316`) - Primary warning color
- **600-900**: Darker oranges for text and emphasis

#### Rose Scale (Error States)
- **50-200**: Light rose tints for error backgrounds
- **300-400**: Medium roses for borders and secondary error elements
- **500**: Alert Rose (`#e11d48`) - Primary error color
- **600-900**: Darker roses for text and emphasis

### Semantic Color Roles
The design system uses semantic naming for color roles, inspired by Palo IT's purposeful color usage:

#### Primary Colors
- **Primary**: PALO Teal (500 shade) for main brand elements
- **Primary Hover**: Deep Forest (600 shade) for interactive states
- **Primary Light**: Soft Sage (50 shade) for backgrounds
- **Primary Dark**: Deep teal (800 shade) for emphasis

#### Interactive Colors
- **Accent**: Electric Blue (500 shade) for buttons and links
- **Accent Hover**: Darker blue (600 shade) for hover states
- **Accent Light**: Light blue (100 shade) for backgrounds
- **Accent Dark**: Dark blue (700 shade) for emphasis

#### State Colors
- **Success**: Success Emerald (600 shade) for positive actions
- **Warning**: Vibrant Orange (500 shade) for caution states
- **Error**: Alert Rose (500 shade) for destructive actions
- Each state has corresponding hover, light, and dark variants

#### Surface Colors
- **Surface**: Pure white for main backgrounds
- **Surface Secondary**: Light Mist (50 shade) for subtle backgrounds
- **Surface Tertiary**: Very light gray (100 shade) for cards

#### Text Colors
- **Text Primary**: Rich Black (900 shade) for main content
- **Text Secondary**: Warm Gray (600 shade) for supporting text
- **Text Tertiary**: Silver (500 shade) for subtle text
- **Text Inverse**: White for text on dark backgrounds

#### Border Colors
- **Border**: Silver (300 shade) for default borders
- **Border Focus**: Primary teal for focused elements
- **Border Error**: Error color for validation states

### Dark Mode Adaptations
In dark mode, the color system adapts while maintaining Palo IT's sophisticated aesthetic:
- **Surfaces**: Rich blacks and dark grays instead of white
- **Text**: Light colors on dark backgrounds with proper contrast
- **Borders**: Subtle light grays for definition
- **Brand colors**: Slightly lightened for better dark mode visibility

## Typography

### Font Family
Following Palo IT's clean, modern typography approach:
- **Primary**: Inter font family for exceptional legibility and modern character
- **Display**: Space Grotesk for bold headings and impact statements (optional)
- **Fallback**: System font stack ensuring reliability across all platforms

### Type Scale & Hierarchy
Inspired by Palo IT's bold typographic presence:
- **Display**: 3.5rem (56px) - Hero statements and major page titles
- **H1**: 2.5rem (40px) - Primary page headings
- **H2**: 2rem (32px) - Section headers and major divisions
- **H3**: 1.5rem (24px) - Subsection headers and card titles
- **H4**: 1.25rem (20px) - Component titles and small headings
- **Body Large**: 1.125rem (18px) - Important body text and descriptions
- **Body**: 1rem (16px) - Standard content text
- **Small**: 0.875rem (14px) - Secondary text, captions, metadata
- **Tiny**: 0.75rem (12px) - Labels and fine print

### Font Weights & Emphasis
Reflecting Palo IT's confident, impactful typography:
- **Light** (300): Elegant, de-emphasized text
- **Regular** (400): Standard body text and descriptions
- **Medium** (500): Emphasized content and important information
- **Semi-bold** (600): Strong headings, navigation, and key labels
- **Bold** (700): Impact statements, critical information, hero text
- **Extra Bold** (800): Major headings and brand statements (sparingly used)

### Typography Implementation
- **Display (Hero Text)**: 56px size, bold weight, rich black color with potential gradient
- **H1 (Page Titles)**: 40px size, semi-bold weight, rich black color
- **H2 (Section Headers)**: 32px size, semi-bold weight, rich black color
- **H3 (Subsection Headers)**: 24px size, medium weight, rich black color
- **Body Large (Descriptions)**: 18px size, regular weight, warm gray color
- **Body (Standard Content)**: 16px size, regular weight, warm gray color
- **Small (Secondary Text)**: 14px size, regular weight, silver color

### Typographic Emphasis Patterns
Following Palo IT's style of emphasizing key words:
- **Bold Keywords**: Strategic use of bold weight within sentences for impact
- **Color Emphasis**: PALO Teal for important terms and brand concepts
- **Size Contrast**: Mixing large and small text for visual hierarchy
- **Line Height**: Generous spacing (1.6-1.8) for readability and breath

## Spacing System

Uses a refined 4px base unit system that scales elegantly, inspired by Palo IT's thoughtful spacing:
- **Tiny**: 4px for minimal spacing and fine adjustments
- **Extra Small**: 8px for tight spacing between related elements
- **Small**: 12px for compact layouts and close relationships
- **Medium**: 16px for comfortable standard spacing
- **Large**: 24px for generous spacing and breathing room
- **Extra Large**: 32px for section separation and major gaps
- **2X Large**: 48px for significant content divisions
- **3X Large**: 64px for hero sections and major layout blocks
- **4X Large**: 96px for dramatic section breaks (sparingly used)

### Spacing Philosophy
- **Tight Groupings**: Use smaller spacing (4-8px) for related content
- **Comfortable Reading**: Medium spacing (16-24px) for main content flow
- **Dramatic Separation**: Large spacing (48-96px) for major sections
- **Consistent Rhythm**: Maintain consistent spacing patterns throughout

## Layout System

### Container Widths
Following Palo IT's content-focused layout approach:
- **Mobile**: 100% width with 16px padding for edge-to-edge content
- **Tablet**: 768px max-width, centered with comfortable margins
- **Desktop**: 1200px max-width, centered for optimal reading
- **Large**: 1400px max-width for expansive content and data tables
- **Hero Sections**: Can extend to full viewport width for impact

### Breakpoints
Using modern, device-agnostic breakpoints:
- **sm**: 640px - Large mobile and small tablets
- **md**: 768px - Medium tablets and small laptops
- **lg**: 1024px - Large tablets and standard desktops
- **xl**: 1280px - Large desktops and wide monitors
- **2xl**: 1536px - Extra wide displays and ultra-wide monitors

### Grid Philosophy
- **4px Base Grid**: All spacing and sizing follows 4px multiples
- **Flexible Grids**: CSS Grid and Flexbox for modern, responsive layouts
- **Content-First**: Layout serves content, not arbitrary column counts
- **Mobile-First**: Progressive enhancement from smallest to largest screens
- **Organic Flow**: Allow content to breathe with natural spacing

### Layout Patterns
Inspired by Palo IT's sophisticated layout approach:
- **Hero Sections**: Full-width with organic shapes and gradients
- **Content Blocks**: Generous white space with focused content areas
- **Asymmetric Layouts**: Interesting visual balance without perfect symmetry
- **Curved Sections**: Organic section dividers that soften the interface

## Component Design Standards

### Navigation
Inspired by Palo IT's sophisticated navigation design:
- **Header**: Fixed navigation with PALO Teal gradient background
- **Height**: 72px for comfortable touch targets and premium feel
- **Logo**: White on teal gradient, clean and prominent
- **Links**: White text with subtle hover effects
- **Active State**: Brighter teal or white underline
- **Mobile**: Elegant slide-out drawer with full-height overlay
- **Transparency**: Subtle backdrop blur when overlapping content

### Buttons

#### Primary Button (Impact Button)
Reflecting Palo IT's bold, action-oriented design:
- **Background**: PALO Teal gradient (teal-500 to teal-600)
- **Text**: Pure white with medium-bold weight
- **Padding**: Generous horizontal (24px), comfortable vertical (12px)
- **Border Radius**: 12px for modern, friendly appearance
- **Font Weight**: Semi-bold (600) for confidence
- **Hover State**: Subtle scale (1.02) and darker gradient
- **Transition**: Smooth transform and color change (200ms)
- **Shadow**: Medium depth for elevation

#### Secondary Button (Supporting Action)
- **Background**: Transparent with PALO Teal border (2px)
- **Text**: PALO Teal with medium weight
- **Padding**: Generous horizontal (24px), comfortable vertical (12px)
- **Border Radius**: 12px for consistency
- **Font Weight**: Medium (500) for clarity
- **Hover State**: Light teal background with white text
- **Transition**: Smooth background and text color change
- **Shadow**: Subtle elevation on hover

#### Danger Button (Critical Actions)
- **Background**: Alert Rose gradient
- **Text**: Pure white with semi-bold weight
- **Padding**: Standard sizing matching primary buttons
- **Border Radius**: 12px for consistency
- **Font Weight**: Semi-bold (600) for importance
- **Hover State**: Darker rose with subtle scale
- **Transition**: Smooth color and transform change

#### Ghost Button (Subtle Actions)
- **Background**: Transparent
- **Text**: Warm Gray with hover to PALO Teal
- **Padding**: Medium spacing for comfortable interaction
- **Border**: None, relies on text styling
- **Font Weight**: Medium (500)
- **Hover State**: Color change to primary teal
- **Transition**: Smooth color transition

### Cards
Inspired by Palo IT's sophisticated content presentation:
- **Background**: Pure white with subtle shadow and optional gradient border
- **Border**: Optional 1px gradient border (teal to transparent)
- **Border Radius**: 16px for modern, friendly appearance
- **Padding**: Generous spacing (32px) for premium feel
- **Shadow**: Soft, elevated shadow with subtle blur
- **Content Hierarchy**: Bold titles with supporting descriptive text
- **Hover State**: Subtle lift (transform: translateY(-2px)) with enhanced shadow
- **Transition**: Smooth transform and shadow changes
- **Accents**: Optional colored edge or corner accent in brand colors

### Forms

#### Input Fields
Following Palo IT's clean, accessible form design:
- **Background**: Pure white with subtle inner shadow
- **Border**: 1px solid Silver, focus state changes to PALO Teal
- **Border Radius**: 12px for modern, approachable feel
- **Padding**: Generous spacing (16px horizontal, 12px vertical)
- **Text Color**: Rich black for high contrast
- **Placeholder**: Silver color with helpful, encouraging language
- **Focus State**: Teal border with subtle glow effect
- **Transition**: Smooth border color and shadow changes
- **Width**: Full width with proper responsive behavior

#### Select Dropdowns
- **Background**: Pure white matching input fields
- **Border**: 1px solid Silver with teal focus state
- **Border Radius**: 12px for consistency
- **Padding**: Generous spacing matching inputs
- **Text Color**: Rich black for clarity
- **Arrow**: Custom teal arrow icon
- **Options**: Clear hierarchy with proper hover states
- **Focus State**: Teal border matching input behavior

#### Form Labels
- **Typography**: Medium weight (500) for clarity
- **Color**: Warm gray for professional appearance
- **Spacing**: Appropriate distance from input (8px)
- **Required Indicators**: Teal asterisk for required fields

### Status Indicators
Following Palo IT's clear, communicative feedback design:

#### Success State
- **Background**: Soft sage tint (success-50) with subtle texture
- **Border**: 2px solid Success Emerald for definition
- **Text Color**: Deep success green (success-800) for readability
- **Padding**: Generous spacing (16px) for comfortable reading
- **Border Radius**: 12px for modern, friendly appearance
- **Icon**: Checkmark icon in Success Emerald
- **Typography**: Semi-bold weight for label, regular for message
- **Animation**: Subtle fade-in or slide-in entrance

#### Warning State
- **Background**: Light orange tint (orange-50) with gentle warmth
- **Border**: 2px solid Vibrant Orange for attention
- **Text Color**: Deep orange (orange-800) for contrast
- **Padding**: Generous spacing (16px) for comfort
- **Border Radius**: 12px for consistency
- **Icon**: Alert triangle icon in Vibrant Orange
- **Typography**: Semi-bold weight for label, regular for message
- **Animation**: Gentle pulse or bounce to draw attention

#### Error State
- **Background**: Light rose tint (rose-50) with care
- **Border**: 2px solid Alert Rose for urgency
- **Text Color**: Deep rose (rose-800) for clarity
- **Padding**: Generous spacing (16px) for readability
- **Border Radius**: 12px for approachable feel
- **Icon**: Exclamation circle icon in Alert Rose
- **Typography**: Semi-bold weight for label, regular for message
- **Animation**: Subtle shake or fade-in for attention

#### Info State
- **Background**: Light blue tint (blue-50) for calm information
- **Border**: 2px solid Electric Blue for definition
- **Text Color**: Deep blue (blue-800) for readability
- **Padding**: Generous spacing (16px) for comfort
- **Border Radius**: 12px for consistency
- **Icon**: Information icon in Electric Blue
- **Typography**: Semi-bold weight for label, regular for message

## Application-Specific Components

### Rule Card
AI coding instruction display with Palo IT-inspired design confidence:
- **Layout**: Premium card container with white background and gradient accent
- **Header**: Flex layout with instruction name prominently displayed, status badge on right
- **Instruction Name**: Large text (24px), semi-bold weight, rich black color
- **Status Badge**: Rounded pill with teal gradient background and white text
- **Description**: Warm gray color, comfortable reading size (16px)
- **Actions**: Button row with teal-colored action links and clear hierarchy
- **Hover State**: Subtle lift effect with enhanced shadow for premium feel
- **Spacing**: Generous padding (32px) with comfortable element separation
- **Accent**: Optional left border in PALO Teal for visual interest

### Rule Configuration Panel
Sophisticated side panel for detailed instruction management:
- **Layout**: Full height panel with white background and subtle shadow
- **Border**: Left gradient border (teal to transparent) for elegant separation
- **Padding**: Generous spacing (32px) for comfortable configuration editing
- **Header**: Bold heading (32px) with rich black color and potential accent
- **Sections**: Clearly organized configuration options with visual grouping
- **Form Elements**: Consistent styling matching design system throughout
- **Progress Indicator**: Optional teal progress bar showing configuration completion
- **Actions**: Prominent action buttons following button design patterns

### Rule Search and Filter
Clean, powerful search interface reflecting Palo IT's focus on usability:
- **Container**: Light mist background with subtle organic curves
- **Search Input**: Full width with premium styling and helpful placeholder text
- **Filter Buttons**: Pill-shaped buttons with clear active/inactive states
- **Active Filter**: PALO Teal background with white text and subtle shadow
- **Inactive Filter**: White background with warm gray text and teal hover
- **Layout**: Search bar prominently positioned, filter buttons in flexible grid
- **Spacing**: Generous spacing with clear visual grouping
- **Animation**: Smooth transitions for filter state changes
- **Clear Actions**: Obvious way to clear all filters

### Hero Section
Bold introduction reflecting Palo IT's impact-driven messaging:
- **Background**: Subtle teal gradient with organic shapes
- **Typography**: Large, bold heading with strategic word emphasis
- **Layout**: Asymmetric design with compelling visual hierarchy
- **Call-to-Action**: Prominent primary button with clear value proposition
- **Visual Elements**: Optional geometric or organic accent shapes

## Visual Design Elements

### Icons
Following Palo IT's clean, modern iconography approach:
- **Library**: Heroicons or Lucide React for consistency and quality
- **Sizes**: 16px, 20px, 24px, 32px, 48px for comprehensive hierarchy
- **Colors**: Match text colors with PALO Teal for interactive elements
- **Style**: Consistent stroke width and rounded corners
- **Usage**: Strategic placement to enhance, not overwhelm content
- **Interactive States**: Subtle color changes and micro-animations

### Shadows and Elevation
Sophisticated depth system inspired by Palo IT's layered design:
- **Subtle**: Light shadow (0 1px 3px rgba(0,0,0,0.1)) for form elements
- **Medium**: Standard shadow (0 4px 6px rgba(0,0,0,0.1)) for cards
- **Strong**: Prominent shadow (0 10px 15px rgba(0,0,0,0.1)) for modals
- **Organic**: Soft, blurred shadows that feel natural and refined
- **Color Tinting**: Slight teal tint in shadows for brand consistency

### Border Radius and Curves
Modern, friendly corner treatments:
- **Small**: 8px for inputs and compact buttons
- **Medium**: 12px for standard buttons and badges  
- **Large**: 16px for cards and prominent panels
- **Extra Large**: 24px for hero sections and major containers
- **Organic**: Custom curved shapes for section dividers and accents

### Gradients and Textures
Subtle enhancement following Palo IT's sophisticated approach:
- **Primary Gradient**: PALO Teal to Deep Forest for buttons and accents
- **Subtle Gradients**: Light teal to white for backgrounds
- **Organic Shapes**: Flowing curves and natural forms as background elements
- **Texture**: Very subtle noise or grain for depth (sparingly used)

### Animations and Transitions
Smooth, purposeful movement reflecting quality and attention to detail:
- **Duration**: 200ms for micro-interactions, 300ms for complex animations
- **Easing**: Ease-out for entering states, ease-in for exiting
- **Properties**: Focus on transforms, opacity, and color changes
- **Micro-Interactions**: Button hover states, focus rings, loading states
- **Page Transitions**: Smooth navigation with appropriate loading states
- **Reduced Motion**: Respect user preferences for accessibility

## Responsive Design Strategy

### Mobile-First Philosophy
Following Palo IT's inclusive, global approach to design:
- **Core Functionality First**: Essential rule management always accessible
- **Touch-Friendly Interface**: Minimum 44px touch targets for accessibility
- **Progressive Enhancement**: Add complexity and features for larger screens
- **Content Priority**: Most important actions prominently featured
- **Performance Focus**: Optimized loading and interaction on mobile devices

### Content Prioritization Strategy
- **Essential Features**: Rule search, basic configuration, and quick actions
- **Secondary Features**: Advanced configuration in accessible but compact forms
- **Tertiary Features**: Detailed analytics and administrative functions
- **Search and Filtering**: Always prominent across all screen sizes
- **Clear Navigation**: Obvious paths to key functionality

### Responsive Navigation Patterns
- **Mobile (320-767px)**: Bottom navigation or elegant slide-out drawer
- **Tablet (768-1023px)**: Top navigation with collapsible sections
- **Desktop (1024px+)**: Full sidebar with rule categories and search
- **Transitions**: Smooth adaptation between navigation patterns

## Accessibility Requirements

### WCAG 2.1 AA Compliance
Reflecting Palo IT's commitment to inclusive design:
- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large text
- **Keyboard Navigation**: Complete keyboard accessibility for all interactive elements
- **Screen Readers**: Semantic HTML structure with comprehensive ARIA labels
- **Focus Management**: Clear, visible focus indicators with logical tab order
- **Alternative Text**: Descriptive alt text for all images and icons
- **Color Independence**: Information conveyed through multiple visual cues

### Inclusive Design Principles
- **Clear Language**: Simple, helpful text that guides users effectively
- **Error Prevention**: Proactive validation and clear error messaging
- **Flexible Interaction**: Multiple ways to complete tasks
- **Reduced Cognitive Load**: Intuitive interface patterns and clear information hierarchy
- **Cultural Sensitivity**: Design that works across global contexts

### Implementation Standards
- **Semantic HTML**: Proper use of headings, buttons, inputs, and form elements
- **ARIA Labels**: Comprehensive labeling for complex interactions
- **Form Validation**: Clear, helpful error messages with specific guidance
- **Loading States**: Informative feedback during processing
- **Reduced Motion**: Honor user preferences for minimal animation

## Performance Considerations

### Core Web Vitals Excellence
Following Palo IT's commitment to technical excellence:
- **LCP (Largest Contentful Paint)**: Optimized rule loading with skeleton screens
- **FID (First Input Delay)**: Minimal JavaScript blocking for responsive interaction
- **CLS (Cumulative Layout Shift)**: Stable layouts during rule configuration
- **Performance Budget**: Maintain fast loading across global networks

### Loading States and Feedback
- **Skeleton Screens**: Elegant loading placeholders matching content structure
- **Progressive Loading**: Smart loading for large rule sets and configurations
- **Optimistic UI**: Immediate feedback for better perceived performance
- **Error Recovery**: Graceful handling of network issues with retry options

### Technical Optimization
- **Image Optimization**: Efficient delivery of icons and graphics
- **Font Loading**: Strategic font loading to prevent layout shifts
- **Code Splitting**: Load only necessary functionality for current context
- **Caching Strategy**: Intelligent caching for frequently accessed rules

## Brand Integration

### Palo IT Brand Elements
Subtle integration of Palo IT's brand philosophy:
- **"We Share"**: Emphasize collaboration and knowledge sharing in rule management
- **"Force for Good"**: Frame AI coding instructions as tools for better, more inclusive development
- **Global Perspective**: Design that works across Palo IT's international offices
- **Innovation Focus**: Showcase cutting-edge approach to development tools
- **Impact Messaging**: Highlight how better coding guidelines lead to better software

### Visual Brand Cues
- **Color Psychology**: Teal conveys trust, growth, and technical sophistication
- **Typography Confidence**: Bold headings that communicate expertise
- **Organic Elements**: Natural shapes that humanize technical content
- **Professional Polish**: Premium feel that reflects Palo IT's quality standards