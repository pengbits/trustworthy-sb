/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ========================================
      // COLORS
      // Extract from Figma: Right sidebar → Fill section
      // ========================================
      colors: {
        white: '#FFFFFF',
        black: '#000000',

        accent: {
          100: '#D2FD9C',
          200: '#77912A',
          300: '#619111',
        },

        background: {
          100: '#FFFFFF'
        },        
        
        text: {
          heading: '#1F2937',   // e.g., Main text color (headings)
          paragraph1: '#394508',
          paragraph2: '#5D5D5D',
          subhead: '#CBCBCB',
        },
        
        background: {
          100: '#394508',   
          200: '#FFFFFF',    
          300: '#EDEDED'
        }
      },

      // ========================================
      // TYPOGRAPHY
      // Extract from Figma: Right sidebar → Text section
      // ========================================
      fontFamily: {
        // TODO: Extract font family names from text elements
        sans: ['Inter', 'system-ui', 'sans-serif'], // e.g., Body font
        display: ['Poppins', 'sans-serif'], // e.g., Heading font (if different)
        mono: ['Monaco', 'Consolas', 'monospace'], // Optional: for code
      },
      
      fontSize: {
        // TODO: Extract font sizes from heading and body text
        // Headings
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '700' }], // e.g., Largest heading (H1)
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '600' }], // e.g., H1
        'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }], // e.g., H2 (36px)
        'h3': ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }], // e.g., H3 (30px)
        'h4': ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }], // e.g., H4 (24px)
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }], // e.g., H5 (20px)
        
        // Body text
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }], // e.g., Body (16px)
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // e.g., Small body (14px)
        
        // UI elements
        'button': ['1rem', { lineHeight: '1.5', fontWeight: '600' }], // e.g., Button text (16px)
        'label': ['0.875rem', { lineHeight: '1.4', fontWeight: '500' }], // e.g., Form labels (14px)
      },
      
      fontWeight: {
        // TODO: Extract font weights from text elements
        // These are usually: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
        // Most already included in Tailwind, but you can add custom ones if needed
      },

      // ========================================
      // SPACING
      // Extract from Figma: Right sidebar → Auto Layout → Padding/Gap
      // ========================================
      spacing: {
        // TODO: Extract spacing values from buttons, cards, containers
        // Tailwind defaults: 4px increments (4, 8, 12, 16, 20, 24, 28, 32, 36, 40...)
        // Add custom spacing if your design uses non-standard values
        // Example:
        // '18': '4.5rem', // 72px
        // '88': '22rem',  // 352px
      },

      // ========================================
      // BORDER RADIUS
      // Extract from Figma: Right sidebar → Corner Radius
      // ========================================
      borderRadius: {
        // TODO: Extract border radius from buttons, cards, inputs
        // Tailwind defaults: none, sm (2px), DEFAULT (4px), md (6px), lg (8px), xl (12px), 2xl (16px), 3xl (24px), full
        // Add custom values if your design uses specific radii
        // Examples:
        // 'button': '8px', // Common button radius
        // 'card': '12px',  // Common card radius
        // 'input': '6px',  // Common input radius
      },

      // ========================================
      // SHADOWS
      // Extract from Figma: Right sidebar → Effects section
      // ========================================
      boxShadow: {
        // TODO: Extract shadow values from elements with shadows
        // Format: 'shadow-name': 'x y blur spread color'
        // Examples:
        // 'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        // 'medium': '0 4px 16px rgba(0, 0, 0, 0.15)',
        // 'large': '0 8px 24px rgba(0, 0, 0, 0.2)',
      },

      // ========================================
      // ADDITIONAL (Optional)
      // ========================================
      
      // Breakpoints (if design specifies custom breakpoints)
      // screens: {
      //   'xs': '375px',
      //   'sm': '640px',
      //   'md': '768px',
      //   'lg': '1024px',
      //   'xl': '1280px',
      //   '2xl': '1536px',
      // },
    },
  },
  plugins: [],
}
