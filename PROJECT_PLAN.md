# Trustworthy Financial App - Marketing Landing Page
## MVP Project Plan: 6-Hour Storybook + React + TypeScript PoC

### Project Overview
Build a minimal proof-of-concept marketing landing page demonstrating Storybook + React + TypeScript. **Timebox: 6 hours max.**

**Tech Stack:**
- React + TypeScript
- Vite (fast setup)
- Tailwind CSS
- Storybook
- Single landing page

---

## Quick Setup (30-45 minutes)

### 1.1 Project Initialization
- [x] Create Vite + React + TypeScript project: `npm create vite@latest . -- --template react-ts`
- [x] Install dependencies: `npm install`
- [x] Install Tailwind: `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`
- [x] Configure Tailwind (`tailwind.config.js`) and add to `index.css`
- [x] Install Storybook: `npx storybook@latest init --yes`
- [x] Configure Storybook to use Tailwind in `.storybook/preview.ts`

**Dependencies Needed:**
```
react, react-dom, typescript
vite
tailwindcss, postcss, autoprefixer
@storybook/react-vite
@storybook/addon-essentials (included with init)
```

---

## Design Review & Component Planning (15 minutes)

### 2.1 Quick Figma Review
- [ ] Review Figma design: https://www.figma.com/site/gsDtHk8kXrq8QOmTFDluFZ/Trustworthy-App-Download--Community-?node-id=0-1&p=f&t=hG5QX6MIcH6bECFJ-0
- [ ] Identify **3-5 essential components** only (e.g., Button, Card, Header, Hero, Footer)
- [x] Note Tailwind color classes needed (extend `tailwind.config.js` if needed)
- [ ] Identify page sections

**MVP Component List** (adjust based on design):
- Button (primary variant)
- Card/Feature Card
- Header/Navbar
- Hero Section
- Footer

**Skip for MVP:**
- Multiple button variants (just primary)
- Complex animations
- Multiple card types
- Advanced form components
- Extensive documentation

---

## Component Development (4 hours)

### 3.1 Quick Development Workflow

**For each component (30-45 min each):**
1. Create component file in `src/components/`
2. Write basic TypeScript interface for props
3. Implement with Tailwind classes
4. Create `.stories.tsx` file with:
   - Default story
   - Basic controls (if props exist)
   - One variant example (if applicable)
5. Test in Storybook
6. Use in landing page

### 3.2 Component Priority Order

**Build in this order (highest impact first):**
1. **Button** (15-20 min) - Most reusable
2. **Card/Feature Card** (30 min) - Core content component
3. **Header** (30-45 min) - Navigation + branding
4. **Hero Section** (45-60 min) - Main CTA area
5. **Footer** (15-20 min) - Quick links/social

**Time-saving tips:**
- Use Tailwind utility classes directly (no custom CSS)
- Skip complex state management
- Minimal TypeScript interfaces (just essential props)
- Simple stories (1-2 per component max)
- Reuse Tailwind patterns

---

## Landing Page Assembly (45 minutes)

### 4.1 Page Composition
- [ ] Create `src/App.tsx` or `src/pages/LandingPage.tsx`
- [ ] Import and compose components
- [ ] Add basic responsive breakpoints (mobile-first)
- [ ] Test layout across viewport sizes in Storybook
- [ ] Quick visual check against Figma

### 4.2 Final Polish (15 minutes)
- [ ] Fix any obvious spacing/layout issues
- [ ] Ensure basic responsive behavior
- [ ] Quick accessibility check (semantic HTML)
- [ ] Verify all components work in page context

---

## File Structure (Simplified)

```
trustworthy-sb/
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Button.stories.tsx
│   │   ├── Card.tsx
│   │   ├── Card.stories.tsx
│   │   ├── Header.tsx
│   │   ├── Header.stories.tsx
│   │   ├── Hero.tsx
│   │   ├── Hero.stories.tsx
│   │   ├── Footer.tsx
│   │   └── Footer.stories.tsx
│   ├── App.tsx (or LandingPage.tsx)
│   ├── main.tsx
│   └── index.css (Tailwind imports)
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

**Keep it simple:**
- No subfolders per component (all components in one folder)
- No separate types files (inline interfaces)
- No theme/tokens (use Tailwind directly)
- Minimal file structure

---

## Time Breakdown (6 hours total)

| Task | Time |
|------|------|
| Setup & Configuration | 45 min |
| Design Review | 15 min |
| Component Development | 4 hours |
| - Button | 20 min |
| - Card | 30 min |
| - Header | 45 min |
| - Hero | 60 min |
| - Footer | 25 min |
| Landing Page Assembly | 45 min |
| Final Polish | 15 min |
| **Total** | **6 hours** |

---

## MVP Success Criteria

✅ **Must Have:**
- Storybook running with 3-5 component stories
- Single landing page assembled
- Responsive layout (mobile + desktop)
- Basic TypeScript types
- Components styled with Tailwind

⚠️ **Nice to Have (skip if time is tight):**
- Multiple component variants
- Extensive Storybook controls
- Accessibility audit
- Animations/transitions
- Complex responsive breakpoints

❌ **Skip for MVP:**
- Testing
- Documentation
- Design tokens
- Multiple page routes
- Advanced Storybook features
- Performance optimization

---

## Quick Start Commands

```bash
# 1. Setup
npm create vite@latest . -- --template react-ts
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 2. Add Storybook
npx storybook@latest init --yes

# 3. Configure Tailwind in Storybook (add to .storybook/preview.ts)
import '../src/index.css';

# 4. Start development
npm run storybook  # Storybook dev server
npm run dev        # Main app dev server
```

---

## Resources

- Figma Design: [Trustworthy App Landing Page](https://www.figma.com/site/gsDtHk8kXrq8QOmTFDluFZ/Trustworthy-App-Download--Community-?node-id=0-1&p=f&t=hG5QX6MIcH6bECFJ-0)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Storybook Quick Start](https://storybook.js.org/docs/react/get-started/install)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
