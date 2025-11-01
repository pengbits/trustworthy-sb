# Design Tokens Extraction Guide (Free Figma Plan)

## Quick MVP Approach for Figma → Tailwind (No Dev Mode Required)

### Method 1: Manual Extraction (Works with Free Plan)

1. **Open Figma Design**
   - Open: https://www.figma.com/site/gsDtHk8kXrq8QOmTFDluFZ/Trustworthy-App-Download--Community-?node-id=0-1&p=f&t=hG5QX6MIcH6bECFJ-0
   - **You don't need Dev Mode or Inspect Mode!**

2. **Extract Key Tokens Using Right Sidebar:**

   **Colors:**
   - Select any colored element (shape, text, background)
   - Look at the **right sidebar** → **Fill** or **Stroke** section
   - Click on the color swatch to see hex code
   - Copy the hex code (e.g., `#0066CC`)
   - **Tip**: Right-click color → Copy as CSS gets you the hex

   **Typography:**
   - Select any text element
   - Check the **right sidebar** → **Text** section shows:
     - Font family (e.g., "Inter", "Poppins")
     - Font size (e.g., 16px, 24px, 48px)
     - Font weight (Regular 400, Medium 500, Semibold 600, Bold 700)
     - Line height (often shown as "Auto" or a specific value)
   - Write these down as you go

   **Spacing:**
   - Select an element with padding (button, card)
   - Right sidebar → **Padding** or **Auto Layout** section shows padding values
   - For gaps between elements, select the parent container
   - Look at **Auto Layout** → **Gap** value
   - **Tip**: Use Figma's measurement tool if available
   - Common values: 4px, 8px, 12px, 16px, 24px, 32px

   **Border Radius:**
   - Select element (button, card, input)
   - Right sidebar → **Corner Radius** section
   - Note the radius value (e.g., 8px, 12px, 16px)

   **Shadows:**
   - Select element with shadow
   - Right sidebar → **Effects** section
   - Click on the shadow effect to see:
     - X offset
     - Y offset
     - Blur
     - Spread
     - Color (with opacity)
   - **Note**: Shadows can be complex, start simple for MVP

### Method 2: Figma Plugins (Free Plan Compatible)

**No-code plugins that work on free plan:**

1. **Design Tokens Plugin** (if available)
   - Install from Figma Community
   - Select elements → Extract tokens
   - Export as JSON

2. **Copy Properties Plugin**
   - Right-click element → Plugins → Copy Properties
   - Gets CSS values

**Note**: Some plugins may require specific access. If unavailable, stick with Method 1 (manual extraction).

### Method 3: Browser Developer Tools (Alternative)

1. **Screenshot elements** from Figma
2. **Open in browser** or image editor
3. **Use color picker** tools (browser extensions, image editors)
4. **Measure spacing** visually or with tools

**Alternative: Browser Extensions**
- **Figma CSS Copy** (if available as browser extension)
- Color picker extensions
- Measurement tools

*For 6-hour MVP, Method 1 (manual from sidebar) is fastest and most reliable*

---

## How to Add Tokens to Tailwind Config

Extract tokens manually, then add them to `tailwind.config.cjs`:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors
      colors: {
        primary: {
          50: '#...',   // lightest
          100: '#...',
          500: '#...',  // main brand color
          900: '#...',  // darkest
        },
        // Or simple colors:
        'trust-blue': '#0066CC',
        'trust-gray': '#6B7280',
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
        // etc.
      },
      
      // Spacing (if different from Tailwind defaults)
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
      },
      
      // Border Radius
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      
      // Shadows
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
```

---

## Practical Extraction Workflow (15-20 min) - Free Plan

1. **Scan the Design** (5 min)
   - Quickly review all screens/sections in Figma
   - Identify repeating patterns:
     - Primary/secondary colors
     - Text sizes (3-5 different sizes)
     - Common spacing values

2. **Extract Tokens from Right Sidebar** (10 min)
   - Open a text editor or notes app (or use Figma comments)
   - For each element type, select and note values from right sidebar:
     
     **Colors** (5 min):
     - Select main button → Right sidebar → Fill → Copy hex
     - Select background → Right sidebar → Fill → Copy hex
     - Select text → Right sidebar → Fill → Copy hex
     - Example notes:
       ```
       Colors:
       - Primary button: #0066CC (from button fill)
       - Background: #F9FAFB (from frame fill)
       - Text dark: #1F2937 (from heading text)
       - Text light: #6B7280 (from body text)
       ```
     
     **Typography** (3 min):
     - Select largest heading → Right sidebar → Text section
       - Note: Font family, size (e.g., 48px), weight (e.g., Bold)
     - Select subheading → Note size/weight
     - Select body text → Note size/weight
     - Example notes:
       ```
       Typography:
       - H1: Inter, 48px, Bold (700)
       - H2: Inter, 36px, Semibold (600)
       - Body: Inter, 16px, Regular (400)
       ```
     
     **Spacing** (2 min):
     - Select button → Right sidebar → Auto Layout → Padding
     - Select card → Note padding values
     - Select container with gaps → Auto Layout → Gap
     - Example notes:
       ```
       Spacing:
       - Button padding: 12px 24px
       - Card padding: 24px
       - Gaps: 16px, 24px, 32px
       ```

3. **Add to Tailwind Config** (5 min)
   - Update `tailwind.config.cjs` with extracted values
   - Use `extend` to keep Tailwind defaults
   - Test in a component

---

## Quick Tips

- **Focus on the essentials**: For MVP, extract 3-5 colors, 2-3 text sizes, basic spacing
- **Use Figma's CSS export**: Right-click element → Copy as CSS (gets you computed values)
- **Check Styles Panel**: Figma's right sidebar shows all design properties
- **Measure spacing**: Use Figma's measurement tool or auto-layout gaps
- **Start simple**: You can always add more tokens later

---

## Example: Extracting from a Button (Free Plan)

1. **Select button element** in Figma
2. **Look at right sidebar** and note these properties:
   
   **Fill Section:**
   - Click the fill color swatch
   - Copy hex code (e.g., `#0066CC`)
   
   **Text Section:**
   - Select text inside button
   - Note font size (e.g., `16px`)
   - Note font weight (e.g., `600` = Semibold)
   
   **Corner Radius Section:**
   - Look for corner radius value (e.g., `8px`)
   
   **Auto Layout Section:**
   - Look at padding values (e.g., `12px 24px` or `12px` on all sides)
   
   **Effects Section:**
   - If shadow exists, note the values (optional for MVP)

3. **Add to Tailwind config:**
   ```javascript
   colors: {
     'btn-primary': '#0066CC',  // from Fill section
   },
   fontSize: {
     'button': '16px',  // from Text section
   },
   fontWeight: {
     'button': '600',  // from Text section
   },
   borderRadius: {
     'button': '8px',  // from Corner Radius section
   },
   ```

**Quick Reference: Right Sidebar Sections:**
- **Fill** = Background color
- **Text** = Font family, size, weight, line height
- **Auto Layout** = Padding, gaps, spacing
- **Corner Radius** = Border radius
- **Effects** = Shadows, blurs

---

## Tools & Resources

- **Figma Dev Mode**: Best for extracting exact values
- **Figma Plugins**: Design Tokens, Figma Tokens
- **Browser Extension**: Figma CSS Copy (if available)

For your MVP timeline, manual extraction + Tailwind config extension is the fastest path!

