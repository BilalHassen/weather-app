# Weather App Style Guide

## Design Philosophy
This style guide establishes the visual and interactive standards for the Weather App, ensuring consistency, accessibility, and a modern user experience.

## Color Palette

### Primary Colors
- **Primary Blue**: `#3B82F6` - Main brand color, used for primary actions and key elements
- **Primary Dark**: `#1E40AF` - Darker shade for hover states and emphasis
- **Primary Light**: `#93C5FD` - Lighter shade for backgrounds and subtle accents

### Secondary Colors
- **Accent Orange**: `#F97316` - Used for warnings, highlights, and temperature displays
- **Accent Green**: `#10B981` - Success states and positive indicators
- **Accent Red**: `#EF4444` - Error states and critical information

### Neutral Colors
- **Background**: `#F8FAFC` - Main background color
- **Surface**: `#FFFFFF` - Card and container backgrounds
- **Text Primary**: `#1E293B` - Main text color
- **Text Secondary**: `#64748B` - Secondary text and labels
- **Text Muted**: `#94A3B8` - Disabled or less important text
- **Border**: `#E2E8F0` - Borders and dividers

### Weather-Specific Colors
- **Sunny**: `#FBBF24` - Yellow for sunny weather
- **Cloudy**: `#94A3B8` - Gray for cloudy weather
- **Rainy**: `#60A5FA` - Blue for rainy weather
- **Stormy**: `#475569` - Dark gray for stormy weather

## Typography

### Font Family
- **Primary**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`
- **Monospace**: `'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace`

### Font Sizes
- **Display**: `3rem` (48px) - Large headings, hero text
- **H1**: `2.25rem` (36px) - Main page headings
- **H2**: `1.875rem` (30px) - Section headings
- **H3**: `1.5rem` (24px) - Subsection headings
- **H4**: `1.25rem` (20px) - Card titles
- **Body Large**: `1.125rem` (18px) - Emphasized body text
- **Body**: `1rem` (16px) - Default body text
- **Body Small**: `0.875rem` (14px) - Secondary text, captions
- **Caption**: `0.75rem` (12px) - Small labels, timestamps

### Font Weights
- **Light**: `300`
- **Regular**: `400`
- **Medium**: `500`
- **Semibold**: `600`
- **Bold**: `700`

### Line Heights
- **Tight**: `1.2` - Headings
- **Normal**: `1.5` - Body text
- **Relaxed**: `1.75` - Long-form content

## Spacing System

### Base Unit
- **Base**: `4px` - All spacing values are multiples of 4px

### Spacing Scale
- **xs**: `0.25rem` (4px)
- **sm**: `0.5rem` (8px)
- **md**: `1rem` (16px)
- **lg**: `1.5rem` (24px)
- **xl**: `2rem` (32px)
- **2xl**: `3rem` (48px)
- **3xl**: `4rem` (64px)
- **4xl**: `6rem` (96px)

### Usage Guidelines
- Use consistent spacing between related elements
- Maintain visual rhythm with the spacing scale
- Use larger spacing for section separation
- Use smaller spacing for related elements within a component

## Layout

### Container
- **Max Width**: `1200px` - Maximum content width
- **Padding**: `1rem` (16px) on mobile, `2rem` (32px) on desktop
- **Gap**: `1.5rem` (24px) - Default gap between grid items

### Grid System
- **Columns**: 12-column grid system
- **Gutters**: `1rem` (16px) between columns
- **Breakpoints**:
  - Mobile: `< 640px` - Single column
  - Tablet: `640px - 1024px` - 2 columns
  - Desktop: `> 1024px` - 3-4 columns

### Border Radius
- **Small**: `0.25rem` (4px) - Buttons, small elements
- **Medium**: `0.5rem` (8px) - Cards, inputs
- **Large**: `1rem` (16px) - Large cards, modals
- **Full**: `9999px` - Pills, badges

## Components

### Buttons

#### Primary Button
- **Background**: Primary Blue (`#3B82F6`)
- **Text**: White
- **Padding**: `0.75rem 1.5rem`
- **Border Radius**: `0.5rem`
- **Font Weight**: `600`
- **Hover**: Darker shade, slight scale transform
- **Active**: Pressed state with reduced opacity

#### Secondary Button
- **Background**: Transparent
- **Border**: `2px solid` Primary Blue
- **Text**: Primary Blue
- **Hover**: Background fill with Primary Blue, text becomes white

#### Ghost Button
- **Background**: Transparent
- **Text**: Text Primary
- **Hover**: Light background tint

### Cards
- **Background**: Surface White
- **Padding**: `1.5rem`
- **Border Radius**: `0.5rem`
- **Shadow**: `0 1px 3px rgba(0, 0, 0, 0.1)`
- **Hover Shadow**: `0 4px 6px rgba(0, 0, 0, 0.1)`

### Input Fields
- **Background**: White
- **Border**: `1px solid` Border color
- **Border Radius**: `0.5rem`
- **Padding**: `0.75rem 1rem`
- **Focus**: Border color changes to Primary Blue, outline ring
- **Error**: Border color changes to Accent Red

### Icons
- **Size**: `1.5rem` (24px) - Default
- **Color**: Inherit from parent or use Text Secondary
- **Spacing**: `0.5rem` margin when next to text

## Shadows

### Elevation Levels
- **Level 1**: `0 1px 3px rgba(0, 0, 0, 0.1)` - Subtle elevation
- **Level 2**: `0 4px 6px rgba(0, 0, 0, 0.1)` - Cards, elevated elements
- **Level 3**: `0 10px 15px rgba(0, 0, 0, 0.1)` - Modals, dropdowns
- **Level 4**: `0 20px 25px rgba(0, 0, 0, 0.15)` - High elevation elements

## Transitions & Animations

### Duration
- **Fast**: `150ms` - Hover states, quick interactions
- **Normal**: `300ms` - Default transitions
- **Slow**: `500ms` - Complex animations, page transitions

### Easing
- **Ease In**: `cubic-bezier(0.4, 0, 1, 1)`
- **Ease Out**: `cubic-bezier(0, 0, 0.2, 1)`
- **Ease In Out**: `cubic-bezier(0.4, 0, 0.2, 1)`

### Common Animations
- **Fade In**: Opacity from 0 to 1
- **Slide Up**: Transform translateY from 20px to 0
- **Scale**: Transform scale from 0.95 to 1 on hover
- **Spin**: Continuous rotation for loading indicators

## Responsive Design

### Breakpoints
```scss
$breakpoint-sm: 640px;   // Mobile
$breakpoint-md: 768px;   // Tablet
$breakpoint-lg: 1024px;  // Desktop
$breakpoint-xl: 1280px;  // Large Desktop
```

### Mobile-First Approach
- Design for mobile first, then enhance for larger screens
- Use relative units (rem, em, %) over fixed pixels
- Test on multiple device sizes

## Accessibility

### Color Contrast
- **Text on Background**: Minimum 4.5:1 ratio
- **Large Text**: Minimum 3:1 ratio
- **Interactive Elements**: Clear focus states

### Focus States
- **Outline**: `2px solid` Primary Blue
- **Offset**: `2px` from element
- **Always Visible**: Never remove focus indicators

### Interactive Elements
- **Minimum Touch Target**: `44px × 44px`
- **Hover States**: Provide visual feedback
- **Disabled States**: Reduced opacity, no pointer events

## SCSS Architecture

### File Structure
```
src/
  styles/
    abstracts/
      _variables.scss      // Colors, typography, spacing
      _mixins.scss         // Reusable mixins
      _functions.scss      // SCSS functions
    base/
      _reset.scss          // CSS reset
      _typography.scss     // Base typography
    components/
      _buttons.scss        // Button styles
      _cards.scss          // Card styles
      _inputs.scss         // Input styles
    layout/
      _container.scss      // Container styles
      _grid.scss           // Grid system
    main.scss              // Main import file
```

### Naming Conventions
- **Variables**: `$variable-name` (kebab-case)
- **Mixins**: `@mixin mixin-name` (kebab-case)
- **Classes**: `.component-name` (BEM methodology)
- **Files**: `_partial-name.scss` (leading underscore)

### BEM Methodology
```scss
.block {}                    // Main component
.block__element {}           // Element within block
.block--modifier {}          // Modifier of block
.block__element--modifier {} // Element modifier
```

## Usage Examples

### Using Variables
```scss
.button {
  background-color: $primary-blue;
  color: $text-white;
  padding: $spacing-md $spacing-lg;
}
```

### Using Mixins
```scss
.card {
  @include card-shadow;
  @include responsive-padding;
}
```

### Responsive Design
```scss
.container {
  padding: $spacing-md;
  
  @media (min-width: $breakpoint-lg) {
    padding: $spacing-xl;
  }
}
```

## Best Practices

1. **Consistency**: Always use design tokens (variables) instead of hardcoded values
2. **Modularity**: Keep styles modular and reusable
3. **Performance**: Minimize CSS output, use efficient selectors
4. **Maintainability**: Follow naming conventions and file structure
5. **Accessibility**: Always consider contrast, focus states, and keyboard navigation
6. **Responsive**: Design mobile-first, test on multiple devices

